import styles from './LevelItem.module.css'

export function LevelItem({
    level
}) {
    return (


        <div className={styles.cardContent}>
            <p className={styles.level}>{level}</p>
        </div>

    )
}