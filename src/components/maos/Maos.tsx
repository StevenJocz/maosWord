import { getRandomImages } from '@/utils';
import style from './Maos.module.css';
import Image from 'next/image';
import stroke from '../../../public/svg/stroke.svg'


const Maos = () => {
    const randomImages = getRandomImages();
    return (
        <div className={style.Maos}>
            <h2>Los <span>Mao's</span>  Más Populares</h2>
            <p>Conoce a algunos de los Mao's más queridos por nuestra comunidad. Estos avatares son la representación única de cada alumno, ¡y cada uno tiene su propio estilo y personalidad! Descubre cómo otros han personalizado su Mao y empieza a crear el tuyo propio.</p>

            <div className={style.Maos_Content}>
                {randomImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={style.Imagen}
                        width={800}
                        height={800}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,..."
                    />
                ))}
            </div>
            <Image
                src={stroke}
                alt="Imagen de fondo"
                className={style.ImagenFondo}
                width={800}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
            />
        </div>
    );
};

export default Maos;
