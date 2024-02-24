import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const userAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});
const initialState = userAdapter.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/users/signup",
        method: "POST",
        body: {
          ...userData,
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    addUserVerification: builder.mutation({
      query: (userData) => ({
        url: "/users/verify_account",
        method: "PUT",
        body: {
          ...userData,
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    addVerificationCode: builder.mutation({
      query: (userData) => ({
        url: "/users/resend_verification_code",
        method: "POST",
        body: {
          ...userData,
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useAddUserMutation,
  useAddUserVerificationMutation,
  useAddVerificationCodeMutation,
} = userApiSlice;
