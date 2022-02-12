import React from "react";

const Sorting = () => {
  return <div className="d-flex w-25">
    <span className="p-2 text-nowrap text-white fw-bolder">Sorting by:</span>
    <select className="form-select">
      <option selected>relevance</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>;
};

export default Sorting;
