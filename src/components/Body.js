// import { useState } from 'react'
import styles from './Body.module.css'
import Card from './UI/Card'
import MealList from './Meals/MealList'
import { mealItems } from '../assets/meal-items'

const Body = () => {

    return (
        <div className={styles.body}>
            <Card className={styles.landingDesc}>
                <h3>Delicious Food, Delivered To You</h3>
                <p>Choose your favorite meal from our broad selection of and enjoy a delicious lunch or dinner at home</p>
                <p>All our meals are cooked to order with high quality ingredients and by experienced chefs!</p>
            </Card>
            <MealList meals={mealItems} />
        </div>
    )
}
export default Body