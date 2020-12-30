import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postInstructions } from "../store/actions";

const Instructions = (props) => {
  console.log("props in the instructions component: ", props);
  const [instruction, setInstruction] = useState({
    step: "",
    details: "",
  });
  console.log(instruction);

  const handleChange = (e) => {
    setInstruction({
      ...instruction,
      [e.target.name]: e.target.value,
    });
  };

  const addAnotherStep = (e) => {
    e.preventDefault();
    setInstruction({
      step: "",
      details: "",
    });
  };
  return (
    <div>
      Instructions
      <form onSubmit={addAnotherStep}>
        <label htmlFor="step">Step#: </label>
        <input
          id="step"
          name="step"
          value={instruction.step}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="details">Details: </label>
        <input
          id="step"
          name="details"
          value={instruction.details}
          onChange={handleChange}
        />
        <br />
        <button>Add Another Step</button>
      </form>
      <button>Finish</button>
      <Link to="dashboard/add_recipe">
        <p>Back</p>
      </Link>
    </div>
  );
};

export default connect(null, { postInstructions })(Instructions);
