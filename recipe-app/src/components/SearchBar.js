import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div>
      <h3>Search for Recipes</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter recipe title to search here"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
