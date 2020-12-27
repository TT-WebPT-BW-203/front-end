import React from "react";
import { connect } from "react-redux";
import { updateRecipe } from "../store/actions";

const UpdateForm = (props) => {
  console.log("porps in the updateRecipe compoment: ", props);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>UpdateForm</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Title"
          name="title"
          //   value={recipe.title}
          //   onChange={handleChange}
        />
        <input
          placeholder="Enter Source"
          name="source"
          //   value={recipe.source}
          //   onChange={handleChange}
        />
        <input
          placeholder="Enter Category"
          name="category"
          //   value={recipe.category}
          //   onChange={handleChange}
        />
        <input
          placeholder="Enter URL for recipe image"
          name="image"
          //   value={recipe.image}
          //   onChange={handleChange}
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

export default connect(null, { updateRecipe })(UpdateForm);
