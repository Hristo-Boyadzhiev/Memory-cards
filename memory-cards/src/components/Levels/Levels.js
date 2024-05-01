import { LevelItem } from './LevelItem/LevelItem'
import styles from './Levels.module.css'

export function Levels(props) {

    function clickHandler(event) {
        console.log(event.currentTarget.id)
    }

    return (
        <section className={styles.levelsSection}>
            <ul className={styles.levelsUl}>
                <li className={styles.levelsLi} id={1} onClick={clickHandler}><LevelItem level={1} /></li>
                <li className={styles.levelsLi} id={2} onClick={clickHandler}><LevelItem level={2} /></li>
                <li className={styles.levelsLi} id={3} onClick={clickHandler}><LevelItem level={3} /></li>
                <li className={styles.levelsLi} id={4} onClick={clickHandler}><LevelItem level={4} /></li>
                <li className={styles.levelsLi} id={5} onClick={clickHandler}><LevelItem level={5} /></li>
                <li className={styles.levelsLi} id={6} onClick={clickHandler}><LevelItem level={6} /></li>
                <li className={styles.levelsLi} id={7} onClick={clickHandler}><LevelItem level={7} /></li>
                <li className={styles.levelsLi} id={8} onClick={clickHandler}><LevelItem level={8} /></li>
                <li className={styles.levelsLi} id={9} onClick={clickHandler}><LevelItem level={9} /></li>
                <li className={styles.levelsLi} id={10} onClick={clickHandler}><LevelItem level={10} /></li>
                <li className={styles.levelsLi} id={11} onClick={clickHandler}><LevelItem level={11} /></li>
                <li className={styles.levelsLi} id={12} onClick={clickHandler}><LevelItem level={12} /></li>
            </ul>

        </section>
    )
}