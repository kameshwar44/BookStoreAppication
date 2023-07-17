import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layouts/navbar/Navbar";
import SearchResultCard from "./../../Components/Cards/Search-Result-Card/SearchResultCard";
import { useLocation } from "react-router";
import { BookData } from "../../UtilsData/BookData";
import './searchpage.css';

function SearchPage() {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let searchValue = [];

    // Filter the BookData based on the search query from the location state
    searchValue = BookData.filter((data) =>
      data.book_name.toLowerCase().includes(location.state.toLowerCase())
    );

    setSearchResult(searchValue);
  }, [location.state]);

  return (
    <section>
      <Navbar />
      <div className="search-result-container">
        <div className="containers">
          <h2>Your Search Result</h2>

          {/* Map through the searchResult array and render SearchResultCard for each result */}
          {searchResult.map((result) => (
            <SearchResultCard key={result.id} bookData={result} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
