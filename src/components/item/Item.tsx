import './Item.css';

const Item = () => {
  return (
    <>
      <div className="itemContainer">
        <div className="thumbnail">
          <img src="" alt="Thumbnail" />
        </div>
        <div className="title">Title</div>
        <div className="description">Description</div>
        <div className="price">Price</div>
        <button className="button button--add">Add to cart</button>
      </div>
    </>
  );
};

export default Item;
