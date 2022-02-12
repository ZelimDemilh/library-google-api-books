import React from "react";

const Categories = () => {
  return <div className="d-flex w-25 me-5">
    <span className="p-2 text-white fw-bolder">Categories:</span>
    <select className="form-select " aria-label="Default select example">
      <option selected>all</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>;
};

export default Categories;
