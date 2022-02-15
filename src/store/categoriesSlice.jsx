import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    error: null,
    pending: false,
    categories: [
      "art",
      "biography",
      "computers",
      "history",
      "medical",
      "poetry",
    ],
  },
  reducers: {},
  extraReducers: {},
});

// export const {} = categoriesSlice.actions

export default categoriesSlice.reducer;
