import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useApi, apiProps } from "../../hooks/useApi";

interface UserState {
  token?: string;
  idUser?: number;
  email?: string;
  fullName?: string;
  country?: string;
  status: string;
  error: string | null;
}

export const initialUserState: UserState = {
  status: "idle",
  error: null
};

export const login = createAsyncThunk(
  "/auth/login",
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

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logout: state => {
      state.token = undefined;
      state.idUser = undefined;
      state.email = undefined;
      state.fullName = undefined;
      state.country = undefined;
      state.status = "idle";
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = "pending";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.token = action.payload?.token;
        state.idUser = action.payload.idUser;
        state.email = action.payload.email;
        state.fullName = action.payload.fullName;
        state.country = action.payload.country;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  }
});
export const { logout } = userSlice.actions;

export const selectFullname = (state: { user: UserState }) => state.user.fullName;
export const selectToken = (state: { user: UserState }) => state.user?.token;
export const selectStatus = (state: { user: UserState }) => state.user.status;
export const selectError = (state: { user: UserState }) => state.user.error;
