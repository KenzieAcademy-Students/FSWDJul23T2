import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import RegisterPage from "./pages/RegisterPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import items from "./items";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);

  const registerUser = (name, email) => setUser({ name, email });

  const addProductToCart = (product) =>
    cart.some((cartItem) => cartItem.id === product.id)
      ? cart
      : setCart([...cart, product]);

  const removeProductFromCart = (product) =>
    cart.some((cartItem) => cartItem.id === product.id)
      ? setCart(cart.filter((cartItem) => cartItem.id !== product.id))
      : cart;

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/register"
        element={<RegisterPage registerUser={registerUser} />}
      />
      <Route
        path="/dashboard"
        element={
          <DashboardPage
            name={user.name}
            products={products}
            cart={cart}
            addToCart={addProductToCart}
            removeFromCart={removeProductFromCart}
          />
        }
      />
      <Route
        path="/confirmation"
        element={<ConfirmationPage user={user} cart={cart} />}
      />
    </Routes>
  );
};

export default App;
