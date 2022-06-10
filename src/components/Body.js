import styles from './Body.module.css'
import Card from './UI/Card'
import MealList from './Meals/MealList'

const Body = props => {

    return (
        <div className={styles.body}>
            <Card className={styles.landingDesc}>
                <h3>Delicious Food, Delivered To You</h3>
                <p>Choose your favorite meal from our broad selection of and enjoy a delicious lunch or dinner at home</p>
                <p>All our meals are cooked to order with high quality ingredients and by experienced chefs!</p>
            </Card>
            {props.isLoading? 
                <div style={{width:"100%",textAlign:"center"}}>
                    <h2 style={{marginTop:"10rem",padding:"none",margin:"none"}}>Loading...</h2>
                </div> 
            : 
                <MealList meals={props.meals} />}
        </div>
    )
}
export default Body