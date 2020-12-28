import React, { useState } from "react";
import { connect } from "react-redux";
// import { getUserRecipes } from "../store/actions";

const SearchBar = (props) => {
  console.log("props in the SearchBar: ", props);
  const [search, setSearch] = useState("");

  const findRecipe = (search) => {
    console.log("search in the find recipe: ", search);
    const searchResult = props.recipes.find(
      (recipe) => recipe.title === search
    );
    console.log("searchResult: ", searchResult.title);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    findRecipe(search);
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

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, {})(SearchBar);
