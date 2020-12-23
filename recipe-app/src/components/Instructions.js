import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div>
      Instructions
      <form>
        <button>Save Recipe</button>
      </form>
      <Link to="dashboard/add_recipe">
        <p>Back</p>
      </Link>
    </div>
  );
};

export default Instructions;
