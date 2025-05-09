import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./service.common";

const service = new authService();

export const logoutCurrentUser = createAsyncThunk(
  "common/logoutCurrentUser",
  async (payload) => {
    await service.create(payload);
  }
);

const initialState = {
  user: null,
};

const common = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutCurrentUser.fulfilled, (state) => {
      state.user = null
    });
  },
});

export default common.reducer;
