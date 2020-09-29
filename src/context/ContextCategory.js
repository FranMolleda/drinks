import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Crear el Context

export const ContextCategory = createContext();

// Provider es donde encontramos las funciones y el state

const ProviderCategories = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const ApiCategories = async () => {
      const urlCategories =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const response = await axios.get(urlCategories);
      setCategories(response.data.drinks);
    };
    ApiCategories();
  }, []);

  return (
    //Todo lo que ponemos dentro del return es lo que vamos a poder utilizar en todos los componentes
    //Lo que queramos pasar, se debe poner como value dentro de ContextCategory.Provider
    <ContextCategory.Provider value={{ categories }}>
      {props.children}
    </ContextCategory.Provider>
  );
};

export default ProviderCategories;
