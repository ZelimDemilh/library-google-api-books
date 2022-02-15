import React from "react";
import { useSelector } from "react-redux";

const Categories = ({ handleSearchParams, searchParams }) => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="d-flex w-50 flex-wrap justify-content-center">
      <span className="p-2 text-white fw-bolder">Categories:</span>
      <select
        className="form-select w-auto"
        onChange={(e) => handleSearchParams.category(e.target.value)}
        aria-label="Default select example"
      >
        <option
          selected
          onChange={(category) => handleSearchParams.category(category)}
        >
          all
        </option>
        {categories.map((category) => {
          return <option key={category}> {category} </option>;
        })}
      </select>
    </div>
  );
};

export default Categories;
