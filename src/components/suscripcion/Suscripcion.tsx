import style from './Suscripcion.module.css'

const Suscripcion = () => {
    return (
        <div className={style.Suscripcion}>
            <label htmlFor="">Suscríbete a lo último de Mao's</label>
            <input
                type="text"
                placeholder='Dirección de correo electrónico'
            />
            <button>Suscribirte</button>
        </div>
    )
}

export default Suscripcion