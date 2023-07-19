import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/Homepage/HomePage";
import BooksPage from "./Pages/Bookspage/BooksPage";
import CartPage from "./Pages/Cartpage/CartPage";
import SearchPage from "./Pages/Searchpage/SearchPage";
import BookDetails from "./Pages/Bookdetailspage/BookDetails";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

export const CartContext = createContext({});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + parseInt(item.price);
    });

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/book-details/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
