import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { postInstructions } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const InstructionsForm = (props) => {
  console.log("InstructionsForm: props: ", props);
  const history = useHistory();
  const { id } = useParams();
  console.log("InstructionForm: id for the recipe: ", id);
  const [instruction, setInstruction] = useState({
    step: "",
    details: "",
  });
  console.log("InstructionsForm: instruction:", instruction);
  const [instructionList, setInstructionList] = useState([{}]);
  console.log("instructionList", instructionList);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then((res) => {
        console.log(res.data.instructions);
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
      this is the instructions component
      <form>
        <label htmlFor="step">Step #:</label>
        <input
          id="step"
          name="step"
          value={instruction.step}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="details">Details: </label>
        <input
          id="details"
          name="details"
          value={instruction.details}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Save Step</button>
        <button>Cancel</button>
      </form>
      <div>
        {instructionList.map((inst) => (
          <div>
            <p>Step#: {inst.step}</p>
            <p>Details: {inst.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions,
  };
};
export default connect(mapStateToProps, { postInstructions })(InstructionsForm);
