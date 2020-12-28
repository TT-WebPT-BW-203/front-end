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
        <input
          placeholder="Enter Title"
          name="title"
          value={initialRecipe.title}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Source"
          name="source"
          value={initialRecipe.source}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Category"
          name="category"
          value={initialRecipe.category}
          onChange={handleChange}
        />
        <input
          placeholder="Enter URL for recipe image"
          name="image"
          value={initialRecipe.image}
          onChange={handleChange}
        />
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
  };
};
export default connect(mapStateToProps, { updateRecipe })(UpdateForm);
