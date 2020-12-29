import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  console.log("props in the IngredientsList component: ", props);

  const { id } = useParams();

  const list = props.ingredients.filter((ing) => ing.recipe_id === Number(id));
  console.log("list const", list);

  return (
    <div>
      Your Ingredients:
      {props.ingredients.map((ing) => (
        <p>{ing.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, {})(IngredientList);
