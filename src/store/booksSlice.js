import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchBook = createAsyncThunk(
  "books/search",
  async function (searchParams, { rejectWithValue }) {
    try {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=nodejs&orderBy=relevance&maxResults=1"
      );
    } catch (e) {
      return rejectWithValue(e.error);
    }
  }
);

export const updateBooks = createAsyncThunk(
  "books/uploadData",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=nodejs&orderBy=relevance&maxResults=4"
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (e) {
      return rejectWithValue(e.error);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    error: null,
    pending: false,
    books: [],
    searchParams: {
      sort: "",
      categories: "",
      textSearch: "",
    },
  },
  reducers: {},
  extraReducers: {
    [updateBooks.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },
    [updateBooks.fulfilled]: (state, action) => {
      state.pending = false;
      state.books = action.payload.items;
    },
    [updateBooks.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

// export const {} = booksSlice.actions

export default booksSlice.reducer;
