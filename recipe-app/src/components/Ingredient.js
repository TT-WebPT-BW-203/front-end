import React, { useState } from "react";

const Ingredient = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButton = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input />
          <button>save</button>
          <button onClick={() => setIsEditing(!isEditing)}>cancel</button>
        </div>
      ) : (
        <p>
          Single Ingredient <button onClick={handleEditButton}>edit</button>
          <button>delete</button>
        </p>
      )}
    </div>
  );
};

export default Ingredient;
