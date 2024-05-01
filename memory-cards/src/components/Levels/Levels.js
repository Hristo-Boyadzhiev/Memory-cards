import { LevelItem } from './LevelItem/LevelItem'
import styles from './Levels.module.css'

export function Levels(props) {

    return (
        <section className={styles.levelsSection}>
            <ul className={styles.levelsUl}>
                <li className={styles.levelsLi} ><LevelItem level={1} /></li>
                <li className={styles.levelsLi}><LevelItem level={2} /></li>
                <li className={styles.levelsLi}><LevelItem level={3} /></li>
                <li className={styles.levelsLi}><LevelItem level={4} /></li>
                <li className={styles.levelsLi}><LevelItem level={5} /></li>
                <li className={styles.levelsLi}><LevelItem level={6} /></li>
                <li className={styles.levelsLi}><LevelItem level={7} /></li>
                <li className={styles.levelsLi}><LevelItem level={8} /></li>
                <li className={styles.levelsLi}><LevelItem level={9} /></li>
                <li className={styles.levelsLi}><LevelItem level={10} /></li>
                <li className={styles.levelsLi}><LevelItem level={11} /></li>
                <li className={styles.levelsLi}><LevelItem level={12} /></li>
            </ul>


        </section>
    )
}