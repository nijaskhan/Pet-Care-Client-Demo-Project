import { configureStore } from '@reduxjs/toolkit';
import { petCareApi } from '../services/petCareApi';
import formSlice from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    [petCareApi.reducerPath]: petCareApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petCareApi.middleware),
});