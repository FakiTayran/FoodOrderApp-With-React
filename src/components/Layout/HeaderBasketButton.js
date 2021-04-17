import React, { useContext, useEffect, useState } from 'react'
import BasketIcon from '../Basket/BasketIcon'
import styles from './HeaderBasketButton.module.css'
import BasketContext from '../../context/basket-context'

const HeaderBasketButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const basketCtx = useContext(BasketContext)
    const numberOfBasketItems = basketCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
    useEffect(() => {
        if (basketCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300)
    }, [basketCtx.items]);
    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <BasketIcon />
            </span>
            <span>Your Basket</span>
            <span className={styles.badge}>
                {numberOfBasketItems}
            </span>
        </button>
    )
}

export default HeaderBasketButton
