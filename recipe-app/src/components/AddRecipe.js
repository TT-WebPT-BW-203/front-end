import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddRecipe = () => {
  const history = useHistory();
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    category: "",
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const saveRecipe = (e) => {
    e.preventDefault();
    history.push("/dashboard/ingredients");
  };
  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={saveRecipe}>
        <input
          placeholder="Enter Title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Source"
          name="source"
          value={recipe.source}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Category"
          name="category"
          value={recipe.category}
          onChange={handleChange}
        />
        <button>Enter Ingredients</button>
      </form>
      <button>Cancel</button>
    </div>
  );
};

export default AddRecipe;
