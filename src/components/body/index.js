import React, {useEffect} from "react";
import {updateBooks} from "../../store/booksSlice";
import {useDispatch, useSelector} from "react-redux"
import Books from "./Books";

const Body = () => {

  const books = useSelector(state => state.books.books)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateBooks())
  }, [dispatch])

  return (
    <div>
      <div className="text-center p-3">
          <h3 className="fs-5">Found {books.length} result</h3>
      </div>
      <Books/>
    </div>
  );
};

export default Body;
