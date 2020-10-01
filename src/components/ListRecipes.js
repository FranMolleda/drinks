import React, { useContext } from "react";
import { ContextRecipes } from "../context/ContextRecipes";
import Recipe from "./Recipe";

const ListRecipes = () => {
  const { recipe } = useContext(ContextRecipes);

  //if (recipe.length === 0) return;
  return (
    <div className="row">
      {recipe.map((oneRecipe, i) => (
        <Recipe key={i} oneRecipe={oneRecipe} />
      ))}
    </div>
  );
};

export default ListRecipes;
