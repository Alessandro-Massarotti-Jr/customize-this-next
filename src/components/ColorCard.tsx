import styles from "../styles/ColorCard.module.css";
import { Icon } from '@iconify/react';
import { baseColors } from "../config/baseColorsConfig";

export interface ColorCardPropsInterface {
    title: string;
    originalColor: string;
    currentColor: string;
}

export default function ColorCard({ title, currentColor, originalColor }: ColorCardPropsInterface) {
    return (
        <div style={{ backgroundColor: baseColors.primary, color: baseColors.text }} className={styles.colorCard}>
            <div style={{ color: baseColors.text, backgroundColor: baseColors.secondary }} className={styles.colorCard__title}>
                <Icon color={baseColors.acents} width={20} height={20} icon="mdi:pencil-box" />
                <h3>{title}</h3>
            </div>
            <div className={styles.colorCard__colors}>
                <div className={styles.colors__container}>
                    <span style={{ backgroundColor: originalColor }} className={styles.colors__container__currentColor}></span>
                    <span className={styles.colors__container__title}>Original</span>
                </div>
                <div className={styles.colors__container}>
                    <span style={{ backgroundColor: currentColor }} className={styles.colors__container__currentColor}></span>
                    <span className={styles.colors__container__title}>Atual</span>
                </div>
            </div>

        </div>
    )
}