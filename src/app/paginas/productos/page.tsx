import Image from 'next/image'
import style from './Productos.module.css'
import { fetchProductosCard } from '@/services/productos/Productos.service'
import EmpiezaAhora from '@/components/button/EmpiezaAhora';

const Productos = () => {
    const [programa] = fetchProductosCard();
    const niveles = Object.entries(programa);
    return (
        <div className={style.Productos}>
            <div className={style.Productos_Titutlo}>
                <h1><span>Domina el Inglés con los Niveles de MAO Word</span></h1>
                <p>MAO Word ofrece siete niveles semestrales alineados con el M.C.R.E. (Marco Común Europeo de Referencia para las Lenguas): A1, A2 y B1. Diseñados para jóvenes y adultos, estos niveles te permiten aprender inglés como lengua extranjera de una forma comunicativa, práctica e integrada, mientras personalizas tu experiencia con tu avatar MAO.</p>
            </div>
            <div className={style.Productos_Content}>
                {niveles.map(([clave, nivel], index) => (
                    <div key={index} className={style.Productos_Content_Targeta}>
                        <h2><span>{clave}</span></h2>
                        <h3>{` Niveles ${nivel.niveles}`}</h3>
                        <Image
                            src={nivel.imagen}
                            className={style.Targeta_Header_Imagen}
                            alt={`Imagen del nivel ${clave}`}
                            width={300}
                            height={300}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,..."
                        />
                        <p>{nivel.descripcion}</p>
                        <ul>
                            {nivel.habilidades.map((habilidad: string, idx: number) => (
                                <li key={idx}>{habilidad}</li>
                            ))}
                        </ul>
                        <div className={style.Targeta_Header_Boton}>
                            <EmpiezaAhora type={6} />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Productos