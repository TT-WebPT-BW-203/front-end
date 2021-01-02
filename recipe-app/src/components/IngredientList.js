import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "./Ingredient";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { IngredientDiv } from "../styles";

const IngredientList = (props) => {
  console.log("props in the IngredientsList component: ", props);
  const { id } = useParams();

  const [rehydratedIngredients, setRehydratedIngredients] = useState([]);
  console.log("IngredientList: rehydratedIngredients: ", rehydratedIngredients);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log("IngredientList: useEffect(): res: ", res.data);
        setRehydratedIngredients(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  }, [props.ingredients]);

  return (
    <IngredientDiv>
      {rehydratedIngredients.map((ingredient) => (
        <Ingredient ingredient={ingredient} />
      ))}
    </IngredientDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, {})(IngredientList);
