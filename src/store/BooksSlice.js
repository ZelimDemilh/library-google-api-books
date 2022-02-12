import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    error: null,
    pending: false,
    books: [],
  },
  reducers: {},
  extraReducers: {},
});

// export const {} = categorySlice.actions

export default booksSlice.reducer;
