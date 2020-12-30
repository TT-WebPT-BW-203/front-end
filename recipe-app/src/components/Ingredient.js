import React from "react";
import { connect } from "react-redux";
import { editIngredient } from "../store/actions";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);
  return (
    <li>
      {props.ingredient.name}
      <button>edit</button>
      <button>delete</button>
    </li>
  );
};

export default connect(null, { editIngredient })(Ingredient);
