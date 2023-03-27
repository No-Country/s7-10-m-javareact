import { createSlice } from "@reduxjs/toolkit";
import { InitialAuth } from "../../models/InitialAuth";

export const initialAuth: InitialAuth = {
  token: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,

  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.token;
    }
  }
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
