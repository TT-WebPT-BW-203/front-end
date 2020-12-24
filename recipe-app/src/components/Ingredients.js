import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Ingredients = () => {
  const history = useHistory();

  const [ingredient, setIngredient] = useState({
    name: "",
  });
  console.log(ingredient);

  const [ingredientList, setIngredientList] = useState([]);
  console.log("ingredientList: ", ingredientList);

  const handleChange = (e) => {
    setIngredient({ ...ingredient, name: e.target.value });
  };

  const addIng = (e) => {
    e.preventDefault();
    setIngredientList([...ingredientList, ingredient]);
    setIngredient({ name: "" });
  };

  return (
    <div>
      <form onSubmit={addIng}>
        <h3>Enter Ingredients:</h3>
        <input
          name="ingredient"
          value={ingredient.name}
          onChange={handleChange}
        />
        <button>Add Ingredient</button>
      </form>
      <div>
        {ingredientList.map((ingr) => (
          <p>{ingr.name}</p>
        ))}
      </div>
      <Link to="/instructions">
        <p>Continue to Instructions &#62;&#62;</p>
      </Link>

      <Link to="/add_recipe">
        <p>&#60;&#60;Back</p>
      </Link>
    </div>
  );
};

export default Ingredients;
