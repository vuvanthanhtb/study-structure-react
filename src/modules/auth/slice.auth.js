import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./service.auth";

const service = new authService();

export const loginUser = createAsyncThunk("auth/loginUser", async (payload) => {
  const data = await service.loginUser(payload);
  return data;
});

export const logoutCurrentUser = createAsyncThunk(
  "auth/logoutCurrentUser",
  async (payload) => {
    await service.create(payload);
  }
);

const initialState = {
  user: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default auth.reducer;
