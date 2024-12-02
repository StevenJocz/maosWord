import Image from 'next/image'
import style from './CommunityEffort.module.css'
import { IoCheckmarkCircle } from "react-icons/io5";
import { comments } from '@/models';
import EmpiezaAhora from '../button/EmpiezaAhora';

const CommunityEffort = () => {
    return (
        <div className={style.CommunityEffort}>
            <div className={style.Texto}>
                <h2>Un Proyecto Gracias al Esfuerzo Compartido</h2>
                <p>MAO'S Word es el resultado del compromiso y la creatividad de docentes, estudiantes y soñadores que creen en el poder transformador de la educación. Gracias a la profesora  <span>Nancy Esther Ruiz </span> y a quienes han aportado su tiempo, ideas y dedicación, este proyecto es hoy una realidad para todos los que desean aprender y crecer.</p>
                <ul>
                    <li>
                        <IoCheckmarkCircle className={style.Icono} />
                        Desarrollar competencias lingüísticas que impulsen el crecimiento personal y profesional, fortaleciendo la capacidad de comunicación en un mundo globalizado.
                    </li>
                    <li>
                        <IoCheckmarkCircle className={style.Icono} />
                        Fomentar habilidades como la disciplina, la dedicación y la constancia, esenciales para alcanzar metas y superar desafíos en el camino hacia la excelencia.
                    </li>
                </ul>
                <EmpiezaAhora type={3} />
            </div>
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
        </div>

    )
}

export default CommunityEffort