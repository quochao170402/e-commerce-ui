import { ProductType } from './ProductType';
import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface ProductProps {
  product: ProductType;
}

const Product = (props: ProductProps) => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <div className="productContainer" key={props.product.id}>
        <img src={props.product.imageUrl} alt="Product image" />
        <div className="description">
          <p>
            <b>{props.product.name}</b>
          </p>
          <p>{props.product.price}</p>
        </div>
        <button
          className="btnAddToCart"
          onClick={() => cartContext.handleAddToCart(props.product.id)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Product;
