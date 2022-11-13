import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={"/vercel.svg"} alt="image" width={80} height={80} />
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Cadastre-se</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}