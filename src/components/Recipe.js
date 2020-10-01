import React from "react";

const Recipe = ({ oneRecipe }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{oneRecipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={oneRecipe.strDrinkThumb}
          alt={`Images of ${oneRecipe.strDrink}`}
        />
        <button type="button" className="btn btn-block btn-primary">
          Show Recipe{" "}
        </button>
      </div>
    </div>
  );
};

export default Recipe;
