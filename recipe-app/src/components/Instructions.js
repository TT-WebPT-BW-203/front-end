import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
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
  return (
    <div>
      Instructions
      <form>
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

export default Instructions;
