import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    error: null,
    pending: false,
    sort: ["relevance", "newest"],
  },
  reducers: {},
  extraReducers: {},
});

// export const {} = sortSlice.actions

export default sortSlice.reducer;
