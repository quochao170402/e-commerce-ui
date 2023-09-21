import { ReactNode, createContext, useState } from 'react';
import { CartType } from '../components/cart/CartType';
import { PRODUCTS } from '../store/Product';

interface CartContextProps {
  children: ReactNode;
}

interface CartContextValueType {
  cart: CartType;
  handleAddToCart: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleUpdateItemQuantity: (id: number, quantity: number) => void;
}

const initContextValue: CartContextValueType = {
  cart: {
    items: [],
    quantity: 0,
    totalPrice: 0
  },
  handleAddToCart: (id: number) => {
    console.log(`Handle add product [${id}] to cart`);
  },
  handleRemoveFromCart: (id: number) => {
    console.log(`Handle remove product [${id}] from cart`);
  },
  handleUpdateItemQuantity: (id: number, quantity: number) => {
    console.log(
      `Handle update quantity for product [${id}] in cart with quantity [${quantity}]`
    );
  }
};

const initCart: CartType = {
  items: [],
  quantity: 0,
  totalPrice: 0
};

export const CartContext =
  createContext<CartContextValueType>(initContextValue);

const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState(initCart);

  const findProductById = (id: number) => {
    return PRODUCTS.find((product) => product.id === id);
  };
  //
  const handleAddToCart = (id: number) => {
    const updatedCart = { ...cart };

    const product = findProductById(id);
    if (!product) {
      console.error(`Product with ID ${id} not found.`);
      return;
    }
    const itemIndex = cart.items.findIndex((item) => item.id === id);

    if (itemIndex >= 0) {
      updatedCart.items[itemIndex] = {
        ...updatedCart.items[itemIndex],
        quantity: updatedCart.items[itemIndex].quantity + 1,
        totalPrice: (updatedCart.items[itemIndex].quantity + 1) * product.price
      };
    } else {
      updatedCart.items.push({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1,
        totalPrice: product.price
      });
    }

    updatedCart.quantity = updatedCart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    updatedCart.totalPrice = updatedCart.items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    console.log('Cart: ', cart);
    console.log('Updated cart', updatedCart);

    setCart(updatedCart);
  };

  //
  const handleRemoveFromCart = (id: number) => {
    console.log(`Handle remove product [${id}] from cart`);

    const updatedCart = { ...cart };
    const itemIndex = cart.items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      console.error(`Product with ID ${id} not found in the cart.`);
      return;
    }

    updatedCart.items.splice(itemIndex, 1);

    updatedCart.quantity = updatedCart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    updatedCart.totalPrice = updatedCart.items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    setCart(updatedCart);
  };

  //
  const handleUpdateItemQuantity = (id: number, quantity: number) => {
    console.log(
      `Handle update quantity for product [${id}] in cart with quantity [${quantity}]`
    );

    const updatedCart = { ...cart };
    const itemIndex = cart.items.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      console.error(`Product with ID ${id} not found in the cart.`);
      return;
    }

    if (quantity === 0) {
      updatedCart.items = cart.items.filter((item) => item.id !== id);
    } else {
      updatedCart.items = cart.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - quantity,
              totalPrice: item.quantity * item.price
            }
          : item
      );
    }

    updatedCart.quantity = updatedCart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    updatedCart.totalPrice = updatedCart.items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    setCart(updatedCart);
  };

  const contextValue: CartContextValueType = {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateItemQuantity
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
