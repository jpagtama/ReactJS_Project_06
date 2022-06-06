import styles from './MealList.module.css'
import Card from '../UI/Card'
import MealAddForm from './MealAddForm'

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
                        <MealAddForm item={item} />
                    </div>
                </div>
            </li>
        )
    })

    meals = <Card className={styles.card} ><ul className={styles.list}>{meals}</ul></Card>

    return meals
}
export default MealList