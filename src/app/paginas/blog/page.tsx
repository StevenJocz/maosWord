import { fetchBlogCard } from '@/services';
import style from './Blog.module.css';
import Image from 'next/image';
import EmpiezaAhora from '@/components/button/EmpiezaAhora';

const Blog = () => {
    const cards = fetchBlogCard().reverse(); // Mostrar los elementos en orden descendente
    const [lastCard, ...otherCards] = cards; // Desestructurar para obtener el último y el resto

    return (
        <div className={style.Blog}>
            <h1>Lo Último en <span>MAO'S Word</span></h1>
            <p>Explora nuestro blog y mantente conectado con el mundo que estamos construyendo juntos.</p>
            <div className={style.Blog_Content}>
                {/* Targeta Principal - Última tarjeta */}
                <div className={style.Targeta_Principal}>
                    <Image
                        src={lastCard.imagen}
                        alt={lastCard.title}
                        className={style.Imagen}
                        width={800}
                        height={800}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,..."
                    />
                    <div>
                        <h3>{lastCard.date}</h3>
                        <h2>{lastCard.title}</h2>
                        <p>{lastCard.description}</p>
                        <EmpiezaAhora type={5} />
                    </div>
                </div>

                <div className={style.Targeta_Secundario}>
                    {otherCards.map((card, index) => (
                        <div key={index} className={style.BlogCard}>
                            <Image
                                src={card.imagen}
                                className={style.BlogCard_Imagen}
                                alt={card.title}
                                width={300}
                                height={300}
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,..."
                            />
                            <h4>{card.date}</h4>
                            <h3>{card.title}</h3>
                            <EmpiezaAhora type={5} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;