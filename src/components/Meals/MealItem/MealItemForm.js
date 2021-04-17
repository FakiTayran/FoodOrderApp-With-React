import React from 'react'
import {useRef,useState} from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [isFormValid, setIsFormValid] = useState(true)

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = +(amountInputRef.current.value);
        if(enteredAmount === 0 ||enteredAmount<1 || enteredAmount > 5){
            setIsFormValid(false);
            return;
        }

        props.onAddToBasket(enteredAmount);
    };


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount" input={{
                ref:amountInputRef,
                id:'amount',
                type: 'number',
                min: '1',
                max:'5',
                step:'1',
                defaultValue: '1'
            }}/>
            <button >+ Add</button>
            {!isFormValid && <p>Please enter a valid amount(1-5)</p>}
        </form>
    )
}

export default MealItemForm
