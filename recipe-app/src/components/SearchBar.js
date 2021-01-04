import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchContainer, SearchCentered } from "../styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/user/${props.userId}`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.recipes]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setResults(
      recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(search.toLowerCase()) ||
          recipe.category.toLowerCase().includes(search.toLowerCase()) ||
          recipe.source.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  const performSearch = (e) => {
    e.preventDefault();

    setSearch("");
  };

  return (
    <SearchContainer>
      <SearchCentered>
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
      </SearchCentered>
      <SearchCentered>
        <h4>Number of Results: {results.length}</h4>
        {results.length >= 1 &&
          results.map((result) => (
            <div>
              <Link to={`/recipe/${result.id}`}>{result.title}</Link>
            </div>
          ))}
      </SearchCentered>
    </SearchContainer>
  );
};

export default SearchBar;
