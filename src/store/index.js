import { configureStore } from "@reduxjs/toolkit";
import books from "./booksSlice"
import categories from "./categoriesSlice"
import sort from "./sortSlice"

export default configureStore({
    reducer: {
        books: books,
        categories: categories,
        sort: sort
    },
    devTools: true,
});