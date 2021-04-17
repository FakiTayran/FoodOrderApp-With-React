import React, { useContext } from 'react';
import styles from './Basket.module.css';
import Modal from '../UI/Modal';
import BasketContext from '../../context/basket-context'
import BasketItem from './BasketItem';

const Basket = (props) => {
    const basketCtx = useContext(BasketContext);
    const totalAmount = `$${basketCtx.totalAmount.toFixed(2)}`;
    const hasItems = basketCtx.items.length > 0;

    const basketItemRemoveHandler = id => {
        basketCtx.removeItem(id);
    };

    const basketItemAddHandler = item => {
        basketCtx.addItem({...item,amount:1});
    };

    const basketItems = (
        <ul className={styles['basket-items']}>
            {basketCtx.items.map((item) => (
                <BasketItem
                    key={item.id}
                    name={item.name}
                    price= {item.price}
                    amount={item.amount}
                    onRemove={basketItemRemoveHandler.bind(null,item.id)}
                    onAdd={basketItemAddHandler.bind(null,item)}
                />
            ))}
        </ul>
    );
    return (
        <Modal hideBasketHandler={props.onHideBasket}>
            {basketItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideBasket}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Basket
