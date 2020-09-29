import React, { useContext } from "react";
import { ContextCategory } from "../context/ContextCategory";

const Form = () => {
  const { categories } = useContext(ContextCategory);

  console.log(categories);
  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Search by category and ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Search by ingredient"
          />
        </div>
        <div className="col-md-4">
          <select name="category" className="form-control">
            <option value="">-- Select category --</option>
            {categories.map((category, i) => (
              <option key={i} value={category.strCategory}>
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
