import React from 'react'
import styles from './Header.module.css'
import mealImage from '../assets/meals.jpg'
import HeaderBasketButton from './HeaderBasketButton'

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Food Shop</h1>
                <HeaderBasketButton onClick={props.onShowBasket}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt="A table full of delicious food!"/>
            </div>
        </>
    )
}

export default Header
