import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardPage = ({ name, products, cart, addToCart, removeFromCart }) => {
  const navigate = useNavigate();
  if (!name) return <Navigate to="/register" />;

  return (
    <div id="container">
      <header>Choose what you need, {name}</header>
      <div id="main">
        <article>
          <div className="products">
            {products.map((product) => (
              <div key={`product-${product.id}`} className="product-card">
                <p className="title">{product.name}</p>
                <img className="product-image" src={product.image} />
                <button
                  className="product-select"
                  onClick={() => addToCart(product)}
                >
                  I want it!
                </button>
              </div>
            ))}
          </div>
        </article>
        <nav></nav>
        <aside>
          <div className="cart">
            <p>Cart</p>
            <div className="cart-products">
              {cart.map((product) => (
                <div key={`cart-${product.id}`} className="product-card">
                  <p className="title">{product.name}</p>
                  <img className="product-image" src={product.image} />
                  <button
                    className="product-select"
                    onClick={() => removeFromCart(product)}
                  >
                    I don't want it
                  </button>
                </div>
              ))}
              {cart.length > 0 && (
                <button
                  className="product-select"
                  onClick={() => navigate("/confirmation")}
                >
                  Confirm Products
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;
