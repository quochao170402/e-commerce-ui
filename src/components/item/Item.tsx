import { ChangeEvent, useState } from 'react';
import './Item.css';

interface ItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  handleAddToCart: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleUpdateQuantity: (id: number, quantity: number) => void;
}

const Item = (props: ItemProps) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
    props.handleUpdateQuantity(props.id, quantity);
  };

  const handleClickUpdate = (newQuantity: number) => {
    setQuantity(newQuantity);
    props.handleUpdateQuantity(props.id, quantity);
  };

  console.log(props);

  return (
    <>
      <div className="cartItem">
        <img src={props.imageUrl} />
        <div className="description">
          <p>
            <b>{props.name}</b>
          </p>
          <p> Price: ${props.price}</p>
          <div className="countHandler">
            <button onClick={() => handleClickUpdate(quantity - 1)}>-</button>
            <input type="number" value={quantity} onChange={handleChange} />
            <button onClick={() => handleClickUpdate(quantity + 1)}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
