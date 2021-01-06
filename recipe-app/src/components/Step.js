import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  putInstructions,
  deleteInstruction,
  getInstructionById,
} from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ActionButtons, InstructionsDiv } from "../styles";

const Step = (props) => {
  const id = props.instruction.id;
  // debugger;
  console.log("id at the...", id);
  // debugger;
  const [initalStep, setInitialStep] = useState({
    step: props.instruction.step,
    details: props.instruction.details,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [step, setStep] = useState({
    step: props.instruction.step,
    details: props.instruction.details,
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/instructions/${id}`)
      .then((res) => {
        console.log("res in the step", res.data);
        setStep(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.instruction.step, props.instruction.details]);

  // const getInstruction = () => {};

  const handleChange = (e) => {
    e.preventDefault();
    setStep({
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // getInstruction(id);

    //populate state here
  };
  // debugger;

  const handleSave = () => {
    props.putInstructions(id, step);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <InstructionsDiv>
          <form>
            Step#:{" "}
            <input name="step" value={step.step} onChange={handleChange} />
            <br />
            Details:{" "}
            <input
              name="details"
              value={step.details}
              onChange={handleChange}
            />
            <br />
            <ActionButtons onClick={handleSave}>save</ActionButtons>
          </form>
          <ActionButtons
            style={{ backgroundColor: "#ff9999" }}
            onClick={handleEdit}
          >
            cancel
          </ActionButtons>
        </InstructionsDiv>
      ) : (
        <InstructionsDiv>
          <p>Step #{props.instruction.step}: </p>
          <p>Details: {props.instruction.details}</p>
          <ActionButtons onClick={handleEdit}>Edit</ActionButtons>
          <ActionButtons
            style={{ backgroundColor: "#ff9999" }}
            onClick={() => props.deleteInstruction(id)}
          >
            delete
          </ActionButtons>
        </InstructionsDiv>
      )}
    </div>
  );
};

export default connect(null, {
  putInstructions,
  deleteInstruction,
  getInstructionById,
})(Step);
