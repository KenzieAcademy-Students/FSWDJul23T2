import Quantity from "./Quantity";

const Product = ({
  item,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  const handleIncrement = () => {
    handleIncrementQuantity(item.id);
  };

  const handleDecrement = () => {
    handleDecrementQuantity(item.id);
  };

  return (
    <span>
      {item.name} - ${item.price} -
      <Quantity
        quantity={item.quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </span>
  );
};

export default Product;
