import Link from "next/link";
import { baseColors } from "../config/baseColorsConfig";
import styles from "../styles/Header.module.css";
import { Icon } from '@iconify/react';
import NavLink, { NavLinkProps } from "./NavLink";

export default function Header() {

    const links: NavLinkProps[] = [
        {
            href: '/',
            label: "login"
        },
        {
            href: '/',
            label: "Cadastre-se"
        }
    ]

    return (
        <header style={{ backgroundColor: baseColors.primary, color: baseColors.text }} className={styles.header}>
            <Icon width={40} height={40} icon="mdi:pencil-circle-outline" style={{ color: baseColors.acents }} />
            <nav>
                <ul>
                    {
                        links.map((link) => {
                            return <NavLink key={link.href} href={link.href} label={link.label} />
                        })
                    }
                </ul>
            </nav>
        </header >
    )
}