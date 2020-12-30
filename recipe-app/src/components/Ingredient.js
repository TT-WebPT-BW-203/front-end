import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editIngredient } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);

  const [edit, setEdit] = useState(false);
  console.log("is editing? ", edit);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });
  const [ingredientFromGet, setIngredientFromGet] = useState("");
  console.log("ingredientFromGet", ingredientFromGet);

  const params = useParams();
  const { id } = props.ingredient;
  console.log("id", id);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/ingredients/${params.id}`)
      .then((res) => {
        console.log("res in the get of ingrd by id: ", res.data.name);
        setIngredientFromGet(res.data.name);
      })
      .catch((err) => console.log(err));
  }, [props]);

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
        <li>
          {props.ingredient.name}
          <button onClick={handleEdit}>edit</button>
          <button>delete</button>
        </li>
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
