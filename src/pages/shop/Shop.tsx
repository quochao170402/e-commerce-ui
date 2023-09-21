import Products from '../../components/productList/Products';
import CartContextProvider from '../../context/CartContext';
import './Shop.css';
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>

        <div className="products">
          <CartContextProvider>
            <Products />
          </CartContextProvider>
        </div>
      </div>
    </>
  );
};

export default Shop;
