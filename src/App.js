import React,{useState} from 'react'

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Basket from "./components/Basket/Basket";
import BasketProvider from './context/BasketProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true)
  };

  const hideCartHandler = () =>{
    setCartIsShown(false)
  };

  return (
    <BasketProvider>
      {cartIsShown && <Basket onHideBasket={hideCartHandler}/>}
      <Header onShowBasket={showCartHandler} />
      <main>
        <Meals />
      </main>
    </BasketProvider>
  );
}

export default App;
