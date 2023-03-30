import { createSlice } from "@reduxjs/toolkit";
import { InitialAuth } from "../../models/InitialAuth";
import { RootState } from "../store";

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
export const getToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
