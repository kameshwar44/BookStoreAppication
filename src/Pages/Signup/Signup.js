import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./Signup.module.css";
import swal from "sweetalert";
import { nanoid } from "nanoid";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleChangeFName(e) {
    setFname(e.target.value);
  }

  function handleChangeLName(e) {
    setLname(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      swal("Invalid Email!", "Please enter a valid email address", "warning");
      return;
    }
    if (password.length < 6) {
      swal("Weak Password!", "Password must be at least 6 characters long", "warning");
      return;
    }
    let dataUser = {
      id: nanoid(4),
      fname,
      lname,
      email,
      password,
    };

    let olddata = localStorage.getItem("users");
    if (olddata == null) {
      olddata = [];
      olddata.push(dataUser);
      localStorage.setItem("users", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(dataUser);
      localStorage.setItem("users", JSON.stringify(oldArr));
    }

    swal({
      title: "Registration Successful!",
      text: "Congratulations! You are signed up!",
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
        navigate("/login");
      }
    });

    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.forms}>
      <input
        placeholder="FirstName"
        type="text"
        onChange={handleChangeFName}
        value={fname}
        required
        className={styles.inputs}
      />
      <input
        placeholder="LastName"
        type="text"
        onChange={handleChangeLName}
        value={lname}
        required
        className={styles.inputs}
      />
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

      <button className={styles.SignUpButton}> Sign Up</button>
      <h5>
        Already have an account?{" "}
        <NavLink style={{ color: "blue" }} to="/login">
          Login
        </NavLink>
      </h5>
    </form>
  );
}

export default Signup;
