import React from "react";
import Navbar from "../../Components/Layouts/navbar/Navbar";
import CartItemsContainer from './../../Components/Layouts/cart-items-container/CartItemsContainer';

function CartPage() {
  return (
    <section>
      <Navbar />

      <CartItemsContainer />
    </section>
  );
}

export default CartPage;
