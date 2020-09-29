import React from "react";

const Form = () => {
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
