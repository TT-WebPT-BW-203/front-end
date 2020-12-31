import React, { useState } from "react";
import { connect } from "react-redux";
import { editIngredient } from "../store/actions";
import { Button, ButtonWrap, ListItems } from "../styles";

const Ingredient = (props) => {
  const [edit, setEdit] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });

  const { id } = props.ingredient;

  const handleChange = (e) => {
    setNewIngredient({ name: e.target.value });
  };

  const handleEdit = (e) => {
    setEdit(!edit);
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.editIngredient(id, newIngredient);
    setNewIngredient({
      name: "",
    });
    setEdit(!edit);
  };

  return (
    <div>
      {edit ? (
        <div>
          <input value={newIngredient.name} onChange={handleChange} />{" "}
          <button onClick={handleSave}>save</button>
          <button onClick={() => setEdit(!edit)}>cancel edit</button>
        </div>
      ) : (
        <ListItems>
          {props.ingredient.name}
          <ButtonWrap>
            <Button onClick={handleEdit}>edit</Button>
            <Button>delete</Button>
          </ButtonWrap>
        </ListItems>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};
export default connect(mapStateToProps, { editIngredient })(Ingredient);
