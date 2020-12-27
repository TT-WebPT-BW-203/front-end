import React, { useState } from "react";
import { connect } from "react-redux";
import { updateRecipe } from "../store/actions";

const UpdateForm = (props) => {
  console.log("props in the updateRecipe compoment: ", props);

  const [initialRecipe, setInitialRecipe] = useState({
    title: "",
    source: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      // push to previous page, not a specific component, for
      //simplicity's sake
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
