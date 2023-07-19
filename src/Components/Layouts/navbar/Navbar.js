import React, { useContext } from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../App";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LoginState } from "../../Atom/LoginState";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // For Login functionality
  const setIsLoginStatus = useSetRecoilState(LoginState);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isLogin = useRecoilValue(LoginState);

  function LogOut() {
    setIsLoginStatus(false);
    navigate("/");
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
          <p>
            <span style={{ color: "blue" }}> Books</span>Pedia
          </p>
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

          {isLogin ? (
            <Link onClick={handleDropdownToggle} className={style.cartlink}>
              {user.fname}

              {isDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    backgroundColor: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <a
                    href="#"
                    onClick={LogOut}
                    style={{ display: "block", color: "black" }}
                  >
                    Log out
                  </a>
                </div>
              )}
            </Link>
          ) : (
            <li className={style.cartlink}>
              <Link to="/signup">Signup</Link>
            </li>
          )}
        </ul>
      </ul>
    </>
  );
}

export default Navbar;
