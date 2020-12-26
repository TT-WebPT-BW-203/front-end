import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Recipe = (props) => {
  console.log("props in the Recipe component: ", props);
  const history = useHistory();
  const params = useParams();

  const recipe = props.recipes.find((rec) => rec.id === Number(params.id));
  return (
    <div>
      <h3>Title: {recipe.title}</h3>
      <p>Source: {recipe.source}</p>
      <h4>Ingredients: </h4>
      {/* map list of Ingredients */}
      <h4>Instructions: </h4>
      <img alt="dish" />
      <button>Edit</button>
      <button>Delete</button>
      <p onClick={() => history.push("/dashboard")}>Back to Recipes</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, {})(Recipe);
