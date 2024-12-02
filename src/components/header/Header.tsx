import Image from 'next/image'
import EmpiezaAhora from '../button/EmpiezaAhora'
import style from './Header.module.css'
import maoUno from '../../../public/img/maoUno.png'
import bg from '../../../public/svg/bg.svg'
import linea from '../../../public/svg/svgLinea.svg'

const Header = () => {
    return (
        <div className={style.Header}>
            <div>
                <h1>Bienvenido a <span>MAO'S Word</span></h1>
                <h2>Tu Compañero en el Camino al Inglés</h2>
                <p>Descubre tu potencial con MAO Word: el primer paso hacia el dominio del inglés comienza aquí. ¡Inscríbete y transforma tu futuro!</p>
                <div className={style.Empezar}>
                    <EmpiezaAhora type={2} />
                </div>
                <div className={style.Confian}>
                    <h4>Confían en nosotros</h4>
                    <div>
                        <img src="https://www.unac.edu.co/wp-content/uploads/2023/06/Logo_UNAC_svg.svg" alt="" />
                        <img src="https://www.unac.edu.co/wp-content/uploads/2022/10/Logo-ULC.png" alt="" />
                    </div>

                </div>
            </div>
            <Image
                src={maoUno}
                className={style.Imagen}
                alt="Mao"
                width={450}
                height={600}
                placeholder="blur" // Activa el efecto de desenfoque
                blurDataURL="data:image/svg+xml;base64,..." // Agrega una URL de baja resolución
            />
            <Image
                src={bg}
                className={style.svgImagen}
                alt="svg"
                width={800}
                height={700}
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
    )
}

export default Header