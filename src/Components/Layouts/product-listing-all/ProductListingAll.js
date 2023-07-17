import React from "react";
import { BookData } from "../../../UtilsData/BookData";
import "./ProductListingAll.css";
import ProductListingCard from "../../Cards/Product-Listing-Card/ProductListingCard";

function ProductListingAll() {
  console.log(BookData);

  return (
    <section className="product-listing-all-container">
      <div className="container">
        <div className="grid-container">
          {/* Mapping through the BookData */}

          {BookData.map((book) => {
            return (
              <div key={book.id} className="grid-item">
                <ProductListingCard bookData={book} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductListingAll;
