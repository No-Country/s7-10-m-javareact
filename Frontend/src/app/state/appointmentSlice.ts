import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useApi, apiProps } from "../../hooks/useApi";

interface ServiceRequest {
  idClient: number;
  idServiceProvider: number;
  problemDescription: string;
  problemPhotos: string[];
  date: string;
}
interface ServiceRequested {
  status: string;
  error: null | string;
  service: string;
}
export const initialUserState: ServiceRequested = {
  status: "idle",
  error: null,
  service: "idle"
};

export const postRequest = createAsyncThunk(
  "appointment",
  async ({
    idClient,
    idServiceProvider,
    problemDescription,
    problemPhotos,
    date
  }: ServiceRequest) => {
    const apiProps: apiProps = {
      path: `appointment`,
      method: "get",
      body: {
        idClient: idClient,
        idServiceProvider: idServiceProvider,
        problemDescription: problemDescription,
        problemPhotos: problemPhotos,
        date: date
      }
    };
    const response = await useApi(apiProps);
    return response.data;
  }
);

export const RequestSlice = createSlice({
  name: "service",
  initialState: initialUserState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postRequest.pending, state => {
        state.status = "pending";
      })
      .addCase(postRequest.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.service = action.payload; // La respuesta de la API contiene la lista de proveedores
      })
      .addCase(postRequest.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  }
});

/* // Selectors 
 export const SelectProviders = (state: { service: ServiceRequested }) => state.service;
 export const SelectStatusProviders = (state: { service: ServiceRequested }) => state.status;
 export const SelectErrorsProviders = (state: { service: ServiceRequested }) => state.error; */
