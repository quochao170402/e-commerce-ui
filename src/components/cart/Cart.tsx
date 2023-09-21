import { useContext } from 'react';
import Item from '../item/Item';
import { CartContext } from '../../context/CartContext';

import './Cart.css';
const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <div className="cartContainer">
        {cartContext.cart.items.map((item) => (
          <Item
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
            handleAddToCart={cartContext.handleAddToCart}
            handleRemoveFromCart={cartContext.handleRemoveFromCart}
            handleUpdateQuantity={cartContext.handleUpdateItemQuantity}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
