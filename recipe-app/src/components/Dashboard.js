import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getUserRecipes } from "../store/actions";

const Dashboard = (props) => {
  console.log("props in the dashboard: ", props);

  useEffect(() => {
    props.getUserRecipes(props.userId);
  }, []);

  return (
    <div>
      {props.username && <h3>Welcome {props.username}</h3>}

      <Link to="/add_recipe">
        <button>Add New Recipe</button>
      </Link>

      {props.recipes &&
        props.recipes.map((rec) => (
          <div key={rec.id}>
            <p>{rec.title}</p>
            <img src={rec.image} alt="dish" />
            <p>Category: {rec.category}</p>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    recipes: state.recipes,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, { getUserRecipes })(Dashboard);
