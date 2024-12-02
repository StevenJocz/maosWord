import Link from "next/link";
import styles from "./Nav.module.css";
import Navigator from "../routes/Navigator";
import { Routes } from "@/models";
import EmpiezaAhora from "../button/EmpiezaAhora";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <Link href="/">
                <h3>Mao's Word</h3>
            </Link>
            <ul>
                <Navigator pathNames={[Routes.PRODUCTOS, Routes.MAOS, Routes.BLOG, Routes.CONTACTENOS]} />
            </ul>
            <div className={styles.Idioma}>
                <ul>
                    <li>En</li>
                </ul>
            </div>
            <div className={styles.Empezar}>
                <EmpiezaAhora type={1}/>
            </div>
        </div>
    )
}

export default Nav