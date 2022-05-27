import { useState, useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './MealList.module.css'
import Card from '../UI/Card'

const MealList = props => {
    const [amount, setAmount] = useState(1)
    const ctx = useContext(CartContext)

    const amountHandler = event => {
        setAmount(+event.target.value)
    }

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
                        <label htmlFor={`amount_${item.id}`} >Amount: </label>
                        <input id={`amount_${item.id}`} value={amount} onChange={amountHandler} type="number" step="1" min="1" max="10" size="2"/>
                        <div className={styles.actionRow}>
                            <button onClick={() => ctx.onAddToCart(item.id,amount)} >+ Add</button>
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