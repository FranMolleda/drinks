import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink
  //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
