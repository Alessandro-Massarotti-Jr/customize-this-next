import { baseColors } from "../config/baseColorsConfig"
import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer style={{ backgroundColor: baseColors.primary, color: baseColors.text }} className={styles.footer}>
            <p>Desenvolvido por <a style={{ color: baseColors.acents }} href="https://github.com/Alessandro-Massarotti-Jr">Alessandro Massarotti Jr.</a> 🤖</p>
        </footer>
    )
}