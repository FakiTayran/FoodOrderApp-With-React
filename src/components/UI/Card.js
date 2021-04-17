import React from 'react'
import styles from './Card.module.css'

const Basket = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Basket
