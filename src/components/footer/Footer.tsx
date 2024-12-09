import style from './Footer.module.css'
import Navigator from "../routes/Navigator";
import { Routes } from '@/models';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.Footer_Content}>
                <Link href="/">
                    <h2>Mao's Word</h2>
                </Link>
                <ul>
                    <Navigator pathNames={[Routes.PRODUCTOS, Routes.MAOS, Routes.BLOG]} />
                </ul>
                <ul>
                    <Navigator pathNames={[Routes.CONTACTENOS, Routes.PRIVACIDA, Routes.TERMINOS]} />
                </ul>
                <div className={style.Footer_Content_Icono}>
                    <h3>Síguenos en</h3>
                    <div>
                        <IoLogoFacebook className={`${style.Icono} ${style.Facebook}`} />
                        <IoLogoInstagram className={`${style.Icono} ${style.Instagram}`} />
                        <IoLogoYoutube className={`${style.Icono} ${style.Youtube}`} />
                        <IoLogoWhatsapp className={`${style.Icono} ${style.Whatsapp}`} />
                    </div>

                </div>
            </div>
            <p>© 2024 desarrollado por Hamilton Espinal para MAO'S WORD. Todos los derechos reservados.</p>
        </div>
    )
}

export default Footer