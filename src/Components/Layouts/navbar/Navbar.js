import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`${style.menu}`} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${style.navbarcontainer} ${menuOpen ? style.open : ""}`}>
       
          <Link to="/" className={style.logo}>
         <p><span style={{ color: "blue"}} > Books</span>Pedia</p>  
          </Link>
        
        <ul className={`${style.container}`}>
          <li>
            <Link to="/" className={style.Home}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Books" className={style.cartlink}>
              All Books
            </Link>
          </li>
          <li>
            <Link to="/cart" className={style.cartlink}>
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </ul>
    </>
  );
}

export default Navbar;
