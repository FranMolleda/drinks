import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ProviderCategories from "./context/ContextCategory";

function App() {
  //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink
  //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}
  return (
    <ProviderCategories>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </ProviderCategories>
  );
}

export default App;
