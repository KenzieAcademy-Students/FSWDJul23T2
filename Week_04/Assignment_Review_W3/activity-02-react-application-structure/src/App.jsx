import { useState } from "react";
import Product from "./components/Product";
import { nanoid } from "nanoid";
import "./App.css";

const initialState = {
  cart: [
    {
      id: 1,
      name: "scarf",
      price: "11.50",
      quantity: 1,
    },
    {
      id: 2,
      name: "Shirt",
      price: "9.80",
      quantity: 1,
    },
    {
      id: 3,
      name: "pants",
      price: "25.50",
      quantity: 1,
    },
  ],
  isOnMailingList: false,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const handleIncrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setState({ ...state, cart: newList });
  };

  const handleDecrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setState({ ...state, cart: newList });
  };

  const handleCheckout = () => {
    alert(
      "Purchase Completed!" +
        (state.isOnMailingList ? " You will be added to the mailing list!" : "")
    );
  };

  return (
    <div className="app">
      <h2>Shopping Cart</h2>
      <ul className="list">
        {state.cart.map((item) => (
          <li key={item.id}>
            <Product
              item={item}
              handleIncrementQuantity={handleIncrementQuantity}
              handleDecrementQuantity={handleDecrementQuantity}
            />
          </li>
        ))}
      </ul>
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={state.isOnMailingList}
            onChange={(event) =>
              setState({ ...state, isOnMailingList: event.target.checked })
            }
          />
          Sign me up for the mailing list!
        </label>
      </div>
      <button onClick={handleCheckout}>Purchase</button>
    </div>
  );
};

export default App;
