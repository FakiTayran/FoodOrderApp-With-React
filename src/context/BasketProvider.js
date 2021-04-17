import React,{useReducer} from 'react';
import BasketContext from './basket-context';

const defaultBasketState = {
    items: [],
    totalAmount:0
};

const basketReducer = (state,action) => {
    switch (action.type) {
        case 'ADD-ITEM':
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            const existingBasketItemIndex = state.items.findIndex(item=>item.id===action.payload.id);
            const existingBasketItem = state.items[existingBasketItemIndex];
            let updatedItems;
            if(existingBasketItem){
                const updatedItem = {
                    ...existingBasketItem,
                    amount:existingBasketItem.amount + action.payload.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingBasketItemIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat(action.payload);
            }
            return {
                items:updatedItems,
                totalAmount: updatedTotalAmount
            };
        case 'REMOVE-ITEM':
            const existingItemIndex = state.items.findIndex(item=>item.id === action.payload);
            const existingItem = state.items[existingItemIndex];
            const updatedtotAmount = state.totalAmount - existingItem.price;
            let updatedItems1;
            if(existingItem.amount===1){
                updatedItems1 = state.items.filter(item=>item.id !== action.payload);
            }else{
                const updatedItem1 = {...existingItem,amount:existingItem.amount-1};
                updatedItems1 = [...state.items];
                updatedItems1[existingItemIndex] = updatedItem1;
            }
            return {
                items :updatedItems1,
                totalAmount:updatedtotAmount
            }
        default:
            return state;
    }
};

const BasketProvider = (props) => {

    const [basketState, dispatchBasketAction] = useReducer(basketReducer, defaultBasketState)
    
    const addItemToBasketHandler = item =>{
        dispatchBasketAction({type:'ADD-ITEM',payload:item})
    };

    const removeItemFromBasketHandler = id => {
        dispatchBasketAction({type:'REMOVE-ITEM',payload:id})
    } ;


    const basketContext = {
        items:basketState.items,
        totalAmount:basketState.totalAmount,
        addItem: addItemToBasketHandler,
        removeItem: removeItemFromBasketHandler
    }

    return (
        <BasketContext.Provider value={basketContext}>
            {props.children}
        </BasketContext.Provider>
    )
}

export default BasketProvider
