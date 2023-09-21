import Cart from '../components/cart/Cart';
import CartContextProvider from '../context/CartContext';

const CartPage = () => {
  return (
    <>
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    </>
  );
};

export default CartPage;
