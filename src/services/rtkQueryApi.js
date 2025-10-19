import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../constants/api';

export const rtkQueryApi = createApi({
  reducerPath: 'rtkQueryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', API_CONFIG.HEADERS['Content-Type']);
      const masterKey = process.env.REACT_APP_JSONBIN_MASTER_KEY;
      const accessKey = process.env.REACT_APP_JSONBIN_ACCESS_KEY;

      if (masterKey) {
        headers.set('X-Master-Key', masterKey);
      }

      if (accessKey) {
        headers.set('X-Access-Key', accessKey);
      }

      return headers;
    },
  }),
  tagTypes: ['Client'],
  endpoints: () => ({}),
});