import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useApi, apiProps } from "../../hooks/useApi";
import {Provider} from '../../models/Response';



interface ProviderState {
  status: string;
  error: string | null;
  provider: Provider;
}

export const initialUserState: ProviderState = {
    status: "idle",
    error: null,
    provider: {
      idUser: 0,
      email: "",
      fullName: "",
      country: "",
      experienceYears: "",
      kmAround: "",
      profileDescription: "",
      score: 0,
      categories: [],
      profilePhoto: null,
      galleryPhotos: [],
      reviews: [],
    },
  };

export interface Category {
  id: number;
  name: string;
}

export const getProvider = createAsyncThunk(
  "service-provider/details/",
  async ({ id }: { id: string }) => {
    const apiProps: apiProps = {
      path: `service-provider/details/${id}`,
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
      .addCase(getProvider.pending, state => {
        state.status = "pending";
      })
      .addCase(getProvider.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.provider = action.payload; // La respuesta de la API contiene la lista de proveedores
      })
      .addCase(getProvider.rejected, (state, action: PayloadAction<any>) => {
        state.status = "rejected";
        state.error = action.payload.message;
      });
  }
});
export const SelectStatusProvider = (state: { provider: ProviderState }) => state.provider.status;
export const selectProviderDescription = (state: { provider: ProviderState }) => state.provider.provider.profileDescription;
export const selectProviderHeader = (state: { provider: ProviderState }) => ({
  fullName: state.provider.provider.fullName,
  categories: state.provider.provider.categories,
  profilePhoto: state.provider.provider.profilePhoto,
  experienceYears: state.provider.provider.experienceYears,
  country: state.provider.provider.country,
  score: state.provider.provider.score
});
export const selectProviderReviews = (state: { provider: ProviderState }) => state.provider.provider.reviews;
export const SelectProvider = (state: { provider: ProviderState }) => state.provider.provider;