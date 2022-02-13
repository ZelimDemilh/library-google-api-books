import React from 'react';
import {useSelector} from "react-redux";
import cl from "./Body.module.css"

const Books = () => {

    const books = useSelector(state => state.books.books)
    console.log(books)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {books.map((book,index) => {
                return(
                    <div key={index} className={`col w-25 bg-light py-2`}>
                        <div className={`card border-0 ${cl.card}`}>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} className={`card-img-top text-center ${cl.cardImage}`} alt="..."/>
                            <div className="card-body">
                                <p className="card-text text-black-50">{book.volumeInfo.categories}</p>
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Books;