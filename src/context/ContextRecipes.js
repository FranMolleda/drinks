import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextRecipes = createContext();

const RecipesProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [searchrecipe, setSearchRecipe] = useState({
    ingredient: "",
    category: "",
  });
  const [consult, setConsult] = useState(false);

  const { ingredient, category } = searchrecipe;

  useEffect(() => {
    const ApiRecipes = async () => {
      if (consult) {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const url2 = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink
            `;
        const response = await axios(url);
        setRecipe(response.data.drinks);
      }
    };
    ApiRecipes();
  }, [searchrecipe, ingredient]);

  return (
    <ContextRecipes.Provider
      value={{ searchrecipe, setSearchRecipe, recipe, setRecipe, setConsult }}
    >
      {props.children}
    </ContextRecipes.Provider>
  );
};

export default RecipesProvider;