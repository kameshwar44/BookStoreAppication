import React from "react";
import Showcase from "./../../Components/Layouts/showcase/Showcase";
import ProductListing from "./../../Components/Layouts/product-listing/ProductListing";

function HomePage() {
  return (
    <section>
      <Showcase />
      <ProductListing />
    </section>
  );
}

export default HomePage;
