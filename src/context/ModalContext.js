import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idrecipe, setIdRecipe] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const ApiDetails = async () => {
      const urlDetails = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const response = await axios.get(urlDetails);
      setDetails(response.data.drinks);
    };
    ApiDetails();
  }, [idrecipe]);

  return (
    <ModalContext.Provider
      value={{
        details,
        setIdRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
