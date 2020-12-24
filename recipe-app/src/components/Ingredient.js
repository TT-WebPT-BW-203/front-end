import React from "react";

const Ingredient = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.info.name}
          <button>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Ingredient;
