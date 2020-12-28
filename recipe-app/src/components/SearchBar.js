import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { getUserRecipes } from "../store/actions";

const SearchBar = (props) => {
  console.log("props in the SearchBar: ", props);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([{}]);
  console.log("results: ", results);

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
        <h4>Results:</h4>
        {results.map((result) => (
          <Link>{result.title}</Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, {})(SearchBar);
