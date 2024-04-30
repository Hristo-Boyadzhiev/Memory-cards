import styles from './Card.module.css'

function clickHandler(event){
    console.log(event.currentTarget)
}

export function Card(props) {
    return (
        <div className={styles.card} onClick={clickHandler}>
            <div className={styles.content}>
            <i className="fa-solid fa-star" style={{ fontSize: '3em', color: 'white' }}></i>
            </div>
        </div>
    )
}