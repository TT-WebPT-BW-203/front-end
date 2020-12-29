import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateRecipe } from "../store/actions";

const UpdateForm = (props) => {
  console.log("props in the updateRecipe compoment: ", props);
  const { id } = useParams();
  const history = useHistory();

  //I want to populate the values of the recipe to be edited

  const [initialRecipe, setInitialRecipe] = useState({
    title: "",
    source: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateRecipe(id, initialRecipe);
    history.goBack();
  };

  const handleChange = (e) => {
    setInitialRecipe({
      ...initialRecipe,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h3>UpdateForm</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Update recipe title:</label>
        <input
          id="title"
          name="title"
          value={initialRecipe.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="source">Update Source: </label>
        <input
          id="source"
          name="source"
          value={initialRecipe.source}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Update Category: </label>
        <input
          id="category"
          name="category"
          value={initialRecipe.category}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Update Image URL</label>
        <input
          id="image"
          name="image"
          value={initialRecipe.image}
          onChange={handleChange}
        />
        <br />
        <button>Update</button>
      </form>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Cancel
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, { updateRecipe })(UpdateForm);
