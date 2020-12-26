import React, { useState } from "react";
import IngredientList from "./IngredientList";
import { Link } from "react-router-dom";

const IngredientsForm = () => {
  const [ingredient, setIngredient] = useState("");
  console.log(ingredient);

  const [ingredientList, setIngredientList] = useState([]);

  const addToIngredientsList = (ing) => {
    setIngredientList([...ingredientList, ing]);
  };

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToIngredientsList(ingredient);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter Ingredients:</h3>
        <input name="ingredient" value={ingredient} onChange={handleChange} />
        <button>Add Ingredient</button>
      </form>
      <IngredientList ingredientList={ingredientList} />
      <Link to="/instructions">
        <p>Save Ingredients and Continue to Instructions &#62;&#62;</p>
      </Link>

      <Link to="/add_recipe">
        <p>&#60;&#60;Back</p>
      </Link>
    </div>
  );
};

export default IngredientsForm;
