import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h3>Search for Recipes</h3>
      <form>
        <input placeholder="Enter recipe title to search here" name="search" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
