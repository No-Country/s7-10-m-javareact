import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useApi, apiProps } from "../../hooks/useApi";

interface Provider {
  id: number;
  name: string;
  address: string;
  // Agrega aquí cualquier otra propiedad que necesites para representar a los proveedores
}

interface ProviderState {
  status: string;
  error: string | null;
  providers: Provider[];
}

export const initialUserState: ProviderState = {
  status: "idle",
  error: null,
  providers: []
};

interface Category {
  id: number;
  name: string;
}
export const getProviders = createAsyncThunk(
  "service-categories/",
  async ({ id }: { id: string }) => {
    const apiProps: apiProps = {
      path: `service-categories/${id}`,
      method: "get"
    };
    const response = await useApi(apiProps);
    return response.data;
  }
);

export const providerSlice = createSlice({
  name: "provider",
  initialState: initialUserState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProviders.pending, state => {
        state.status = "pending";
      })
      .addCase(getProviders.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.providers = action.payload; // La respuesta de la API contiene la lista de proveedores
      })
      .addCase(getProviders.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  }
});
export const SelectStatusProviders = (state: { provider: ProviderState }) => state.provider.status;
export const SelectProviders = (state: { provider: ProviderState }) => state.provider.providers;
/*
export const selectToken = (state: { user: UserState }) => state.user?.token;
export const selectStatus = (state: { user: UserState }) => state.user.status;
export const selectError = (state: { user: UserState }) => state.user.error;
 */
