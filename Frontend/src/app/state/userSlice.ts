import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useApi, apiProps } from "../../hooks/useApi";

interface UserState {
  user: {
    //El modelo aun no esta definido de como va responder Backend, supongo que es: urlPhoto + token + name o algo asi
    name: string;
    email: string;
    token: string;
  } | null;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null
};

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const apiProps: apiProps = {
      path: "auth/login",
      method: "post",
      body: {
        email,
        password
      }
    };
    const response = await useApi(apiProps);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ email, password }: { email: string; password: string }) => {
    const apiProps: apiProps = {
      path: "auth/register",
      method: "post",
      body: {
        email, //aca faltan los datos a pasar para registrarse
        password
      }
    };
    const response = await useApi(apiProps);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = "pending";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  }
});

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectToken = (state: { user: UserState }) => state.user.user?.token;
export const selectStatus = (state: { user: UserState }) => state.user.status;

export const selectError = (state: { user: UserState }) => state.user.error;
