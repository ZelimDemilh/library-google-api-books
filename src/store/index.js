import { configureStore } from "@reduxjs/toolkit";
import books from "./BooksSlice"

export default configureStore({
    reducer: {
        books: books
    },
    devTools: true,
});