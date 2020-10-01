import React, { useContext, useState } from "react";
import { ContextCategory } from "../context/ContextCategory";
import { ContextRecipes } from "../context/ContextRecipes";

const Form = () => {
  const [search, setSearch] = useState({ ingredient: "", category: "" });
  const { categories } = useContext(ContextCategory);
  const { setSearchRecipe, setConsult } = useContext(ContextRecipes);

  const handleInput = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setSearchRecipe(search);
    setConsult(true);
  };
  return (
    <form className="col-12" onSubmit={handleForm}>
      <fieldset className="text-center">
        <legend>Search by category and ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="ingredient"
            placeholder="Search by ingredient"
            onChange={handleInput}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={handleInput}
          >
            <option value="">-- Select category --</option>
            {categories.map((category, i) => (
              <option key={i} name="category" value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search Drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
