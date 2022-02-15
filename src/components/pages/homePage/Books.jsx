import React, { useState } from "react";
import { useSelector } from "react-redux";
import cl from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const Books = ({ paginations }) => {
  const books = useSelector((state) =>
    state.books.books.filter((book, index) => index < paginations)
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 bg-light">
      {books.map((book, index) => {
        return (
          <NavLink
            key={index}
            className="text-decoration-none text-black"
            to={`../book/${book.id}`}
          >
            <div className={`col p-2`}>
              <div className={`card border-0 p-2 ${cl.card}`}>
                <img
                  src={
                    book.volumeInfo.imageLinks === undefined
                      ? "https://i.pinimg.com/originals/aa/b0/dd/aab0dd7a13205ce05bff5ea2f2db866a.jpg"
                      : book.volumeInfo.imageLinks.thumbnail
                  }
                  className={`card-img-top text-center ${cl.cardImage}`}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-black-50">
                    {book.volumeInfo.categories
                      ? book.volumeInfo.categories[0]
                      : "no categories"}
                  </p>
                  <h5 className="card-title">
                    {book.volumeInfo.title || "no title"}
                  </h5>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Books;
