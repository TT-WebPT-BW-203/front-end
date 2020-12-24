import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { addRecipe } from "../store/actions";
import { connect } from "react-redux";

const AddRecipe = (props) => {
  console.log("props in the AddRecipe component: ", props);
  const history = useHistory();
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    category: "",
    image: "",
  });
  console.log(recipe);
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const saveRecipe = (e) => {
    e.preventDefault();
    props.addRecipe(recipe, props.userData.id);
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
        <input
          placeholder="Enter URL for recipe image"
          name="image"
          value={recipe.image}
          onChange={handleChange}
        />
        <button>Enter Ingredients</button>
      </form>
      <button>Cancel</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};
export default connect(mapStateToProps, { addRecipe })(AddRecipe);
