import React, { useState } from "react";

const Ingredient = (props) => {
  console.log("props in the Ingredient component: ", props);
  const [editing, setEditing] = useState(true);
  const [text, setText] = useState("");
  console.log("editing state: ", editing);

  return (
    <div>
      {!editing ? (
        <div>
          <input placeholder="Enter new ingredient" />{" "}
          <button>Done Editing</button>
        </div>
      ) : (
        <ul>
          <li>
            {props.info.name}
            <button onclick={() => setEditing(!editing)}>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Ingredient;
