const Quantity = ({ quantity, handleIncrement, handleDecrement }) => {
  return (
    <span>
      <button onClick={handleDecrement}>-</button> {quantity}{" "}
      <button onClick={handleIncrement}>+</button>
    </span>
  );
};

export default Quantity;
