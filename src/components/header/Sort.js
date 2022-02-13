import React, { useState } from "react";
import { useSelector } from "react-redux";

const Sort = ({ handleSearchParams, searchParams }) => {
  return (
    <div className="d-flex w-50 flex-wrap justify-content-center">
      <span className="p-2 text-nowrap text-white fw-bolder">Sorting by:</span>
      <select
        onChange={(e) => handleSearchParams.sort(e.target.value)}
        className="form-select w-auto"
      >
        <option selected >relevance</option>
        <option> newest </option>
      </select>
    </div>
  );
};

export default Sort;
