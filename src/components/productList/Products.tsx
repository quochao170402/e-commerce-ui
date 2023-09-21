import { PRODUCTS } from '../../store/Product';
import Product from '../product/Product';

const Products = () => {
  return (
    <>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
