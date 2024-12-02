import Image from "next/image";
import style from "./Maos.module.css";
import { comments, MaosContent } from "../../../models";
import stroke from '../../../../public/svg/stroke.svg'
import bg from '../../../../public/svg/bg.svg'
import linea from '../../../../public/svg/svgLinea.svg'

const Maos = () => {
    return (
        <div className={style.Maos}>
            <h1>¿Quién es <span>Mao</span>?</h1>
            <p>"MAO" es un personaje que nació en el aula de inglés de la profesora Nancy Esther Ruiz, fue donado por una alumna, quien nunca imaginó el impacto que tendría un pequeño cactus en la comunidad UNACENSE.</p>
            {MaosContent.map((item, index) => (
                <div key={index} className={style.Maos_Content}>
                    {index % 2 === 0 ? (
                        <>
                            <Image
                                src={item.imagen.src}
                                className={style.wave}
                                alt={item.imagen.alt}
                                width={300}
                                height={400}
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,..."
                            />
                            <div>
                                {item.textos.map((texto, idx) => (
                                    <p key={idx}>{texto}</p>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                {item.textos.map((texto, idx) => (
                                    <p key={idx}>{texto}</p>
                                ))}
                            </div>
                            <Image
                                src={item.imagen.src}
                                className={style.wave}
                                alt={item.imagen.alt}
                                width={300}
                                height={400}
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,..."
                            />
                        </>
                    )}
                </div>
            ))}
            <div className={style.Maos_Equipo}>
                <h1>Conoce al Equipo Detrás de <span>MAO'S Word</span></h1>
                <p>Ellos son los soñadores, creadores y hacedores que han convertido a MAO Word en una realidad. Cada miembro del equipo aporta su talento, pasión y dedicación para brindarte una experiencia única de aprendizaje y personalización. ¡Descubre quiénes están detrás de esta gran idea!</p>
                <div className={style.Comentarios}>
                    {comments.map((comment, index) => (
                        <div className={style.ComentariosContent} key={index}>
                            <Image
                                src={comment.image}
                                className={style.Imagen}
                                alt={comment.name}
                                width={80}
                                height={80}
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,..."
                            />
                            <div>
                                <h3>
                                    {comment.name}
                                    <span> {comment.role}</span>
                                </h3>
                                <p>{comment.message}</p>
                            </div>
                        </div>
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
            <Image
                src={bg}
                className={style.svgImagen}
                alt="svg"
                width={1000}
                height={900}
                placeholder="blur" // Activa el efecto de desenfoque
                blurDataURL="data:image/svg+xml;base64,..." // Agrega una URL de baja resolución
            />
            <Image
                src={linea}
                className={style.Linea}
                alt="svg"
                width={600}
                height={400}
                placeholder="blur" // Activa el efecto de desenfoque
                blurDataURL="data:image/svg+xml;base64,..." // Agrega una URL de baja resolución
            />
        </div>
    );
};

export default Maos;
