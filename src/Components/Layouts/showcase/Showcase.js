import React from "react";
import Navbar from "../navbar/Navbar";
import "./Showcase.css";
import SearchInputForm from "../../Forms/SearchInputForm/SearchInputForm";

function Showcase() {
  return (
    <section className="showcase-container">
      <Navbar />

      <div className="showcase-content">
        <h1 className="heading_h1">
          Best <span className="text-primary">Books </span>Available
        </h1>
        <p className="heading_para">Buy quality books at cheaper price</p>

        <SearchInputForm />
      </div>
    </section>
  );
}

export default Showcase;
