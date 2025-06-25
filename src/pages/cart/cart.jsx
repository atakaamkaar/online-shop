import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems, clearCart } = useContext(ShopContext);

  return (
    <React.Fragment>
      <h1>Your Cart Items</h1>
      <div className="row">
        {PRODUCTS.map((p) =>
          cartItems.some((i) => i.id === p.id && i.count > 0) ? (
            <Product data={p} key={p.id} />
          ) : null
        )}
      </div>
      <button onClick={clearCart} className="btn btn-danger mt-3">
        Clear Cart
      </button>
    </React.Fragment>
  );
};

export default Cart;
