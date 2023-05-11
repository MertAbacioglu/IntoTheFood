import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart.js";
import CartProvider from "./store/CartProvider";
import Header from "./Components/Layout/Header";
import React from "react";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
