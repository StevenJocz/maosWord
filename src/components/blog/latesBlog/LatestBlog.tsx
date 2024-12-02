import EmpiezaAhora from '@/components/button/EmpiezaAhora'
import style from './LastesBlog.module.css'
import { BlogCard } from '../blogCard'

const LatestBlog = () => {
    return (
        <div className={style.LatestBlog}>
            <div className={style.latesBlog_Text}>
                <h2>Descubre lo Último en <span>MAO'S Word</span>: Noticias, Consejos y Actualizaciones</h2>
                <p>Siempre hay algo nuevo que aprender y compartir en nuestra comunidad. Aquí encontrarás las noticias más destacadas, consejos prácticos y todas las actualizaciones importantes sobre MAO Word. Explora nuestro blog y mantente conectado con el mundo que estamos construyendo juntos.</p>
                <EmpiezaAhora type={4} />
            </div>
            <div className={style.LastesBlog_Card}>
                <BlogCard />
            </div>
        </div>
    )
}

export default LatestBlog