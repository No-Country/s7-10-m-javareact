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

export interface Category {
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
export const getProvider = createAsyncThunk(
  "service-providers/details/",
  async ({ id }: { id: string }) => {
    const apiProps: apiProps = {
      path: `service-categories/${id}`,
      method: "get"
    };
    const response = await useApi(apiProps);
    return response.data;
  }
);
export const providersSlice = createSlice({
  name: "providers",
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
export const SelectStatusProviders = (state: { providers: ProviderState }) =>
  state.providers.status;
export const SelectProviders = (state: { providers: ProviderState }) => state.providers.providers;
