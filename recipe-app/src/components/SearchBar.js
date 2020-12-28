import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([{}]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const performSearch = (e) => {
    e.preventDefault();
    setResults(
      props.recipes.filter(
        (recipe) => recipe.title === search || recipe.category === search
      )
    );
    setSearch("");
  };

  return (
    <div>
      <h3>Search for Recipes</h3>
      <form onSubmit={performSearch}>
        <input
          placeholder="Enter recipe title to search here"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <div>
        {results.length >= 1 &&
          results.map((result) => (
            <div>
              <h4>Results:</h4>
              <Link to={`/recipe/${result.id}`}>{result.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
