import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const OneBook = () => {

  const {id} = useParams()

  const book = useSelector(state => state.books.books.filter(book => book.id === id )[0])

    console.log(book)

  return (
      <div className="d-flex flex-wrap">
        <div className="m-auto py-5">
            <img src={
                book.volumeInfo.imageLinks === undefined
                    ? "https://i.pinimg.com/originals/aa/b0/dd/aab0dd7a13205ce05bff5ea2f2db866a.jpg"
                    : book.volumeInfo.imageLinks.thumbnail
            } alt="" className="" width="300px" height="400px"/>
        </div>
          <div className="p-4">
              <div className="py-4">
                  {book.volumeInfo.categories? book.volumeInfo.categories.map(category => `${category};`):"no category"}
              </div>
              <div className="py-4">
                  <h3>{book.volumeInfo.title}</h3>
              </div>
              <div className="py-4">
                  {book.volumeInfo.authors.map((author, index) => <span key={index} className="text-black-50">{`${author}; `}</span>)}
              </div>
              <div className="p-4 border">
                  <span className=""> {book.volumeInfo.description}</span>
              </div>
          </div>
      </div>
  );
};

export default OneBook;
