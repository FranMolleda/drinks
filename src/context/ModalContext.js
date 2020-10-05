import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idrecipe, setIdRecipe] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const ApiDetails = async () => {
      if (!idrecipe) return;
      const urlDetails = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const response = await axios.get(urlDetails);
      setRecipe(response.data.drinks[0]);
    };
    ApiDetails();
  }, [idrecipe]);

  return (
    <ModalContext.Provider
      value={{
        recipe,
        setRecipe,
        setIdRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
