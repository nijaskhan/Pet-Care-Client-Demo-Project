import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/form/formSlice';
import { rtkQueryApi } from '../services/rtkQueryApi';

export const store = configureStore({
  reducer: {
    form: formSlice,
    [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
});