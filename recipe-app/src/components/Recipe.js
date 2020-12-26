import React from "react";
import { connect } from "react-redux";

const Recipe = (props) => {
  console.log("props in the Recipe component: ", props);
  return (
    <div>
      <h3>Title:</h3>
      <p>Source: </p>
      <h4>Ingredients: </h4>
      {/* map list of Ingredients */}
      <h4>Instructions: </h4>
      <img alt="dish" />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, {})(Recipe);
