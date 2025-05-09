import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ItsdService from "./service.itsd";

const service = new ItsdService();

export const searchUsers = createAsyncThunk(
  "itsd/searchUsers",
  async (payload) => {
    console.log(999999, "Fetching tickets...");
    const data = await service.search(payload);
    return data;
  }
);

export const createNewUser = createAsyncThunk(
  "itsd/createNewUser",
  async (payload, thunkAPI) => {
    const data = await service.create(payload);
    if (data && data.id) {
      thunkAPI.dispatch(searchUsers());
    }
    return data;
  }
);

export const updateUser = createAsyncThunk(
  "itsd/updateUser",
  async (payload, thunkAPI) => {
    const data = await service.update(payload);
    if (data && data.id) {
      thunkAPI.dispatch(searchUsers());
    }
    return data;
  }
);

export const detailUser = createAsyncThunk(
  "itsd/detailUser",
  async (payload, thunkAPI) => {
    const data = await service.detail(payload);
    thunkAPI.dispatch(searchUsers());
    return data;
  }
);

const initialState = {
  list: [],
  user: null,
};

const itsdSlice = createSlice({
  name: "itsd",
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

export default itsdSlice.reducer;
