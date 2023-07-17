import React from "react";
import ProductListingCard from "./../../Cards/Product-Listing-Card/ProductListingCard";
import { BookData } from "../../../UtilsData/BookData";
import "./ProductListing.css";

function ProductListing() {
  return (
    <div className="product-listing-container">
      <h2 style={{ textAlign: "center" }} >
        Here are some <span className="text-primary">books</span> that you might
        like
      </h2>
      <div className="container">
        <div className="listing-container">
          {BookData.slice(0, 4).map((book) => (                           // Slicing Books upto 4 content
            <ProductListingCard key={book.id} bookData={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
