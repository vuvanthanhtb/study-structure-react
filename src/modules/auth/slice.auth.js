import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./service.auth";
import BootStrapper from "app/routes/boot-strapper";

const service = new authService();

export const loginUser = createAsyncThunk("auth/loginUser", async (payload) => {
  const condition = true;
  if (condition) {
    BootStrapper.initialize();
    BootStrapper.setDataToRunApplicationInLocal(
      payload.username,
      payload.password
    );
    return {
      username: payload.username,
      roles: ["admin", "user"],
    };
  }
  const data = await service.loginUser(payload);

  return data;
});

const initialState = {
  currentUser: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export default auth.reducer;
