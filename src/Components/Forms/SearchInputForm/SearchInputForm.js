import React, { useState } from "react";
import style from './SearchInputForm.module.css'
import { useNavigate } from "react-router";

function SearchInputForm() {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  const redirectToSearch = () => {
    if (searchField === "") {
      alert("SearchField is Empty");
    } else {
      // Navigate to the search page with the search field as state
      navigate("/search", { state: searchField });
    }
  };

  return (
    <div className={style.search_input_form_containers}>
      <input
        type="text"
        className={style.search_input}
        placeholder="Search Books"
        value={searchField}
        onChange={handleChange}
      />
      <button onClick={redirectToSearch} className={style.search_button}>
        Search
      </button>
    </div>
  );
}

export default SearchInputForm;
