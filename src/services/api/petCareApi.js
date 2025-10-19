import { rtkQueryApi } from "../rtkQueryApi";

export const petCareApi = rtkQueryApi.injectEndpoints({
    endpoints: (builder) => ({
        getClientById: builder.query({
            query: (id) => `/b/${id}`,
            providesTags: ['Client'],
        }),
        createClient: builder.mutation({
            query: (clientData) => ({
                url: '/b',
                method: 'POST',
                body: clientData,
            }),
            invalidatesTags: ['Client'],
        })
    }),
    overrideExisting: true,
});

export const {
    useCreateClientMutation,
    useGetClientByIdQuery
} = petCareApi;
