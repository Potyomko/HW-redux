import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://65b92f2bb71048505a8a6162.mockapi.io/'
    }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `contacts`,
            providesTags: ['Contacts'],
        }),
        deleteTask: builder.mutation({
            query: (contactId) => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
                providesTags: ['Contacts'],
            }),
        }),
    })
})
export const { useGetTasksQuery, useDeleteTaskMutation } = contactsApi;