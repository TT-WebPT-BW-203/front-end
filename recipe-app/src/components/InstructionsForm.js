import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { postInstructions } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  Button,
  ButtonWrap,
  DisplayList,
  ItemForm,
  ItemLabel,
  ItemInput,
  TextArea,
  Step,
} from "../styles";

const InstructionsForm = (props) => {
  const history = useHistory();
  const { id } = useParams();
  console.log("id in thre form", id);
  const [instruction, setInstruction] = useState({
    step: "",
    details: "",
  });
  const [instructionList, setInstructionList] = useState([]);
  const thisRecipe = props.recipes.find((recipe) => recipe.id === Number(id));
  console.log("this recipe", thisRecipe);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        setInstructionList([...res.data.instructions]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.instructions]);

  const handleChange = (e) => {
    setInstruction({
      ...instruction,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postInstructions(id, instruction);
    setInstruction({
      step: "",
      details: "",
    });
  };

  return (
    <div>
      <h3>Instructions for {thisRecipe.title}</h3>
      <ItemForm>
        <ItemLabel htmlFor="step">Step #:</ItemLabel>
        <ItemInput
          id="step"
          name="step"
          value={instruction.step}
          onChange={handleChange}
        />
        <br />
        <ItemLabel htmlFor="details">Details: </ItemLabel>
        <TextArea
          id="details"
          style={{ resize: "vertical", rows: "3" }}
          name="details"
          value={instruction.details}
          onChange={handleChange}
        />
        <br />
        <ButtonWrap>
          <Button onClick={handleSubmit}>Save Step</Button>
        </ButtonWrap>
      </ItemForm>
      <DisplayList>
        {instructionList.map((inst) => (
          <Step key={inst.id}>
            <p>Step#: {inst.step}</p>
            <p>Details: {inst.details}</p>
          </Step>
        ))}
      </DisplayList>
      <ButtonWrap>
        <Button onClick={() => history.push(`/recipe/${id}`)}>
          Done adding instructions
        </Button>
      </ButtonWrap>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions,
    recipes: state.recipes,
  };
};
export default connect(mapStateToProps, { postInstructions })(InstructionsForm);
