import Image from 'next/image'
import style from './Invitacion.module.css'
import maoDos from '../../../public/img/MaoDos.png'
import EmpiezaAhora from '../button/EmpiezaAhora'

const Invitacion = () => {
    return (
        <div className={style.Invitacion}>
            <h2><span>¡Únete a MAO'S Word y Transforma Tu Aprendizaje!</span></h2>
            <div>
                <EmpiezaAhora type={2} />
            </div>
            <Image
                src={maoDos}
                className={style.Imagen}
                alt="Imagen de invitación mao"
                width={800}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
            />
        </div>
    )
}

export default Invitacion