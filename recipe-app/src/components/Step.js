import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { putInstructions, deleteInstruction } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Step = (props) => {
  console.log("props in the Step component: ", props);
  const id = props.instruction.id;
  console.log("id in step.js", id);

  const [isEditing, setIsEditing] = useState(false);
  const [step, setStep] = useState({
    step: props.instruction.step,
    details: props.instruction.details,
  });
  console.log("step to edit: ", step);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/instructions/${id}`)
      .then((res) => {
        console.log("res in the step", res.data);
      })
      .catch((err) => console.log(err));
  }, [props.instruction.step, props.instruction.details]);

  const handleChange = (e) => {
    e.preventDefault();
    setStep({
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    props.putInstructions(id, step);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <>
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
            <button onClick={handleSave}>save</button>
          </form>
          <button onClick={handleEdit}>cancel</button>
        </>
      ) : (
        <div>
          <p>Step #{props.instruction.step}: </p>
          <p>Details: {props.instruction.details}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => props.deleteInstruction(id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default connect(null, { putInstructions, deleteInstruction })(Step);
