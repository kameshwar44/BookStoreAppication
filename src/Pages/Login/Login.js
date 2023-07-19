import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import swal from "sweetalert";
import { LoginState } from "../../Components/Atom/LoginState";
import Navbar from './../../Components/Layouts/navbar/Navbar';

function Login() {
  let setLogin = useSetRecoilState(LoginState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("users")) {
      const data = JSON.parse(localStorage.getItem("users"));
      console.log(data);
    }
  }, []);
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLogin(true);
      localStorage.setItem("currentUser", JSON.stringify(user));

      swal({
        title: "Login Successful!",
        text: "Congratulations! You Are Succesfully Login!",
        icon: "success",
        buttons: {
          confirm: {
            text: "Okay",
            value: true,
            visible: true,

            closeModal: true,
          },
        },
        dangerMode: false,
      }).then((value) => {
        if (value) {
          navigate("/");
        }
      });
    } else {
      swal({
        title: "User not found!",
        text: "Enter valid credentials!",
        icon: "error",
        buttons: {
          confirm: {
            text: "Okay",
            value: true,
            visible: true,

            closeModal: true,
          },
        },
        dangerMode: false,
      });
    }
  };

  return (
    <>
   < Navbar/>
    <div className={styles.login_form_top}>

    <form className={styles.forms} onSubmit={handleSubmit}>
      <input
        placeholder="email"
        type="email"
        onChange={handleEmail}
        value={email}
        required
        className={styles.inputs}
      />
      <input
        placeholder="password"
        type="password"
        onChange={handlePassword}
        value={password}
        required
        className={styles.inputs}
      />
      <button className={styles.LoginButton}>Login</button>
      <h5>
        don't have an account?{" "}
        <NavLink style={{ color: "blue" }} to="/signup">
          Sign Up 
        </NavLink>
      </h5>
    </form>
    </div>
    
    </>
  );
}

export default Login;
