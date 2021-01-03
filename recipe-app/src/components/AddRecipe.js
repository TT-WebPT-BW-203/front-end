import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { addRecipe } from "../store/actions";
import { connect } from "react-redux";
import {
  CenteredForm,
  StyledLabel,
  StyledInput,
  Button,
  ButtonWrap,
} from "../styles";

const AddRecipe = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const saveRecipe = (e) => {
    e.preventDefault();
    props.addRecipe(recipe, props.userId);
    history.push(`/dashboard/`);
  };
  return (
    <CenteredForm>
      <h3>Add Recipe Form</h3>
      <form onSubmit={saveRecipe}>
        <StyledLabel htmlFor="title">Recipe Title:</StyledLabel>
        <StyledInput
          placeholder="Enter Title"
          name="title"
          id="title"
          value={recipe.title}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="source">Recipe Source:</StyledLabel>
        <StyledInput
          placeholder="Enter Source"
          name="source"
          id="source"
          value={recipe.source}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="category">Category: </StyledLabel>
        <StyledInput
          placeholder="Enter Category"
          name="category"
          id="category"
          value={recipe.category}
          onChange={handleChange}
        />
        <br />
        <StyledLabel htmlFor="image">Image URL:</StyledLabel>
        <StyledInput
          placeholder="Enter URL for recipe image"
          name="image"
          id="image"
          value={recipe.image}
          onChange={handleChange}
        />

        <br />
        <ButtonWrap>
          <Button style={{ margin: "1rem" }}>Add Recipe</Button>
        </ButtonWrap>
      </form>
      <ButtonWrap>
        <Button
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Cancel
        </Button>
      </ButtonWrap>
    </CenteredForm>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};
export default connect(mapStateToProps, { addRecipe })(AddRecipe);
