import React from "react";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);
  return <li>{props.ingredient}</li>;
};

export default Ingredient;
