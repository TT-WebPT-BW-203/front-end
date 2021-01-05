import React, { useState } from "react";
import { connect } from "react-redux";
import { editIngredient, deleteIngredient } from "../store/actions";
import { ActionButtons, IngredientDiv, IngredientText, TextP } from "../styles";

const Ingredient = (props) => {
  const ingrId = props.ingredient.id;
  const ingredientToEdit = props.ingredient;
  const [isEditing, setIsEditing] = useState(false);
  const [newIngredient, setNewIngredient] = useState(ingredientToEdit);

  const handleChange = (e) => {
    setNewIngredient({ name: e.target.value });
  };

  const handleEditButton = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    props.editIngredient(ingrId, newIngredient);
    setNewIngredient({ name: "" });
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    props.deleteIngredient(ingrId);
  };

  return (
    <IngredientDiv>
      {isEditing ? (
        <IngredientText>
          <TextP>
            <input value={newIngredient.name} onChange={handleChange} />
            <ActionButtons onClick={handleSave}>save</ActionButtons>
            <ActionButtons
              onClick={() => setIsEditing(!isEditing)}
              style={{ backgroundColor: "#ff9999" }}
            >
              cancel
            </ActionButtons>
          </TextP>
        </IngredientText>
      ) : (
        <IngredientText>
          <TextP>
            {props.ingredient.name}
            <ActionButtons onClick={handleEditButton}>edit</ActionButtons>
            <ActionButtons
              onClick={handleDelete}
              style={{ backgroundColor: "#ff9999" }}
            >
              delete
            </ActionButtons>
          </TextP>
        </IngredientText>
      )}
    </IngredientDiv>
  );
};
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, { editIngredient, deleteIngredient })(
  Ingredient
);
