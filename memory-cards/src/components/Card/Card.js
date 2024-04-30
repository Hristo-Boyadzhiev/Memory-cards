import styles from './Card.module.css'

export function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
            <i class="fa-solid fa-star" style={{ fontSize: '3em', color: 'white' }}></i>
            </div>
        </div>
    )
}