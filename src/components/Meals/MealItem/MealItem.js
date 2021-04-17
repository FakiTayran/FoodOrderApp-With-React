import React,{useContext} from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import BasketContext from '../../../context/basket-context'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const basketCtx = useContext(BasketContext)

    const addToBasketHandler = amount => {
        basketCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToBasket={addToBasketHandler}/>
            </div>
        </li>
    )
}

export default MealItem
