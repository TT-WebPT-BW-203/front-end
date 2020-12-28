import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserRecipes } from "../store/actions";
import Loader from "react-loader-spinner";

const Dashboard = (props) => {
  console.log("props in the dashboard: ", props);

  useEffect(() => {
    props.getUserRecipes(props.userId);
  }, []);

  return (
    <div>
      {props.username && <h2>Welcome {props.username}</h2>}
      <Link to="/add_recipe">
        <button>Add New Recipe</button>
      </Link>

      {props.isLoading === true ? (
        <Loader
          type="ThreeDots"
          color="#000"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : null}

      {props.recipes &&
        props.recipes.map((rec) => (
          <Link to={`/recipe/${rec.id}`} key={rec.id}>
            <div>
              <p>{rec.title}</p>
              <img src={rec.image} alt="Dish" />
              <p>Category: {rec.category}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    recipes: state.recipes,
    userId: state.userId,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getUserRecipes })(Dashboard);
