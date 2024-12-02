import Link from "next/link";
import styles from "./Button.module.css";
import { IoArrowForward } from 'react-icons/io5';
import { Routes } from "@/models/Routes.models";

interface Props {
    type: number;
}

function EmpiezaAhora({ type }: Props) {
    return (
        <div>
            {type === 1 ? (
                <Link
                    href={Routes.LOGIN.path}
                    className={styles.Primary}>
                    {Routes.LOGIN.name}
                    <IoArrowForward className={styles.Icono} />
                </Link>
            ) : type === 2 ? (
                <Link
                    href={Routes.LOGIN.path}
                    className={styles.Secondary}>
                    {Routes.LOGIN.name}
                    <IoArrowForward className={styles.Icono} />
                </Link>
            ) : type === 3 ? (
                <Link
                    href={Routes.MAOS.path}
                    className={styles.Conoce}>
                    Conoce más de {Routes.MAOS.name}
                    <IoArrowForward className={styles.Icono} />
                </Link>
            ) : type === 4 ? (
                <Link
                    href={Routes.BLOG.path}
                    className={styles.LeerMasNoticias}>
                    Leer Más Noticias
                    <IoArrowForward className={styles.Icono} />
                </Link>
            ) :(
                <Link
                    href={Routes.BLOG.path}
                    className={styles.LeerMas}>
                    Leer Más 
                    <IoArrowForward className={styles.Icono} />
                </Link>
            )}
        </div>
    );
}

export default EmpiezaAhora;