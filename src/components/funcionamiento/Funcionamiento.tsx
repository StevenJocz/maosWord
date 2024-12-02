import style from './Funcionamiento.module.css'
import { IoPersonAdd, IoDocumentText, IoImage, IoMedal, IoSchool } from "react-icons/io5";
import wave from '../../../public/svg/wave.svg'
import Image from 'next/image';
import { CardFuncionamiento } from '@/models';

const Funcionamiento = () => {
    return (
        <div className={style.Funcionamiento}>
            <h2>Así Funciona <span>MAO'S Word</span></h2>
            <h3>Tu Camino hacia el Aprendizaje y la Personalización</h3>
            <p className={style.Texto}>Descubre MAO'S Word: inscríbete, aprende a tu ritmo, personaliza tu avatar MAO con recompensas y recibe un certificado al completar tu curso. ¡Una experiencia educativa única y divertida!</p>
            <div className={style.Content}>
                {CardFuncionamiento.map((card, index) => (
                    <div key={index} className={style.Content_Card}>
                        <div className={style.Content_Icono}>
                            <card.icon className={style.Icono} />
                        </div>
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                        <div className={style.Content_Numero}>
                            <span>{card.numero}</span>
                        </div>
                    </div>
                ))}
                <Image
                    src={wave}
                    className={style.wave}
                    alt="fondo imagen"
                    width={80}
                    height={80}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,..."
                />
            </div>


        </div>
    )
}

export default Funcionamiento