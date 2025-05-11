import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "./service.common";
import { clearAllCache } from "shared/cache";

const service = new authService();

export const logoutCurrentUser = createAsyncThunk(
  "common/logoutCurrentUser",
  async () => {
    try {
      const condition = false;
      if (condition) {
        await service.create();
      }
      clearAllCache();
      toast.success("Logout successfully")
      return false;
    } catch (error) {
      toast.error(error);
    }
  }
);

const initialState = {
  hasCurrentUser: true,
};

const common = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutCurrentUser.fulfilled, (state) => {
      state.hasCurrentUser = false;
    });
  },
});

export default common.reducer;
