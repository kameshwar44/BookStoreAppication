import React from "react";
import Navbar from "./../../Components/Layouts/navbar/Navbar";
import SearchInputForm from "./../../Components/Forms/SearchInputForm/SearchInputForm";
import ProductListingAll from "./../../Components/Layouts/product-listing-all/ProductListingAll";
import "./booksPage.css";
function BooksPage() {
  return (
    <section>
      <Navbar />

      <div className="search-container">
        <h2>
          Find the <span className="text-primary">Books</span> that you want
        </h2>
        <SearchInputForm />
      </div>
      
      {/* <div className="searchfieldBook">
     
        
      </div> */}

      <ProductListingAll />
    </section>
  );
}

export default BooksPage;
