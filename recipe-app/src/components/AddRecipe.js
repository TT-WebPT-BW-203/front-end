import React, { useState } from "react";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    ingredients: [],
    category: [],
  });
  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form>
        {/* <input placeholder="Enter Recipe Title" value={recipe.title} />
        <input placeholder="Enter Source" value={recipe.source} /> */}
        {/* ingredients */}
        {/* Instructions */}
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default AddRecipe;
