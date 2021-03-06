import React from "react";
import { useDispatch } from "react-redux";
import { searchBook, updateBooks } from "../../store/booksSlice";
import { useNavigate } from "react-router-dom";

const SearchAria = ({ handleSearchParams, searchParams }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchBooksInGoogle = async () => {
    navigate("/");
    dispatch(searchBook(searchParams));
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        onChange={(e) => handleSearchParams.searchText(e.target.value)}
        value={searchParams.text}
        onKeyDown={(e) => e.key === "Enter" && searchBooksInGoogle()}
      />

      <button
        type="button"
        className="btn btn-light py-1"
        onClick={searchBooksInGoogle}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchAria;
