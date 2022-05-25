import styles from './MealList.module.css'
import Card from '../UI/Card'

const MealList = props => {
    
    let meals = props.meals.map((item) => {
        return (
            <li key={item.id}>
                <div className={styles.row} >
                    <div className={styles.descBox} >
                        <b>{item.title}</b>
                        <i>{item.desc}</i>
                        <b className={styles.price}>${item.price}</b>
                    </div>
                    <div className={styles.cartBox}>
                        <b>Amount </b>
                        <input type="number" step="1.0" value="1" min="0" max="10" size="2"/>
                        <div className={styles.actionRow}>
                            <button >+ Add</button>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    meals = <Card className={styles.card} ><ul className={styles.list}>{meals}</ul></Card>

    return meals
}
export default MealList