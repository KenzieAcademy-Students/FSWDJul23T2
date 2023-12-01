import React from "react";

const ConfirmationPage = ({ user, cart }) => {
  return (
    <div id="container">
      <header>Confirm your purchase, {user.name}</header>
      <div id="confirm">
        <p>
          Thank you for your order. Your receipt has been sent to {user.email}.
        </p>
        <div className="products">
          {cart.map((product) => (
            <div key={`confirm-${product.id}`} className="product-card">
              <p className="title">{product.name}</p>
              <img className="product-image" src={product.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
