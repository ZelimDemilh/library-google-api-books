import React, { useEffect, useState } from "react";
import { updateBooks } from "../../../store/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import Books from "./Books";

const HomePage = () => {
  const [paginations, setPaginations] = useState(9);

  const handlePaginations = () => {
    if (paginations < 30) {
      setPaginations(paginations + 30);
    }
  };

  const books = useSelector((state) => state.books.books);

  const pending = useSelector((state) => state.books.pending);

  const dispatch = useDispatch();

  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(updateBooks());
  }, [dispatch]);

  if (pending) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  if (!books) {
    return (
      <div>
        <h2>nothing was found for your query</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center p-3 my-4">
        <h3 className="fs-5">Found {books.length} result</h3>
      </div>
      <Books paginations={paginations} />
      {books.length > paginations && (
        <h3
          type="button"
          className="text-center text-primary cursor-pointer py-2"
          onClick={handlePaginations}
        >
          load more
        </h3>
      )}
    </div>
  );
};

export default HomePage;
