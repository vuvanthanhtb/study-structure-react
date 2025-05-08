import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "./service.user";

const service = new UserService();

export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  async (payload) => {
    console.log("Fetching tickets...");
    const data = await service.search(payload);
    return data;
  }
);

export const createNewUser = createAsyncThunk(
  "users/createNewUser",
  async (payload, thunkAPI) => {
    const data = await service.create(payload);
    if (data && data.id) {
      thunkAPI.dispatch(searchUsers());
    }
    return data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkAPI) => {
    const data = await service.update(payload);
    if (data && data.id) {
      thunkAPI.dispatch(searchUsers());
    }
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (payload, thunkAPI) => {
    const data = await service.delete(payload);
    thunkAPI.dispatch(searchUsers());
    return data;
  }
);

const initialState = {
  list: [],
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.list = action.payload || [];
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
