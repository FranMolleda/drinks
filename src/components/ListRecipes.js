import React, { useContext } from "react";
import { ContextRecipes } from "../context/ContextRecipes";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const ListRecipes = () => {
  const { recipe, loading } = useContext(ContextRecipes);

  //if (recipe.length === 0) return;

  return (
    <div className="row size">
      {loading ? <Spinner /> : null}
      {!loading ? (
        <div className="row size">
          {recipe.map((oneRecipe, i) => (
            <Recipe key={i} oneRecipe={oneRecipe} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ListRecipes;
