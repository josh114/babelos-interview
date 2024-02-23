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

    updateUser: builder.mutation({
      query: (userData) => ({
        url: `/user/${userData.id}`,
        method: "PATCH",
        body: {
          ...genreData,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
  }),
});
export const {
  useAddUserMutation,
  useAddUserVerificationMutation,
  useUpdateUserMutation,
} = userApiSlice;

//returns the query result object

// export const selectGenresResult = genreApiSlice.endpoints.getGenres.select();

// //creates memoized selector

// const selectGenreData = createSelector(
//   selectGenresResult,
//   (genresResult) => genresResult.data //normalized state object with ids and entities
// );
// //getselectors creates these selectors and we rename them with aliases with destructuring

// export const {
//   selectAll: selectAllGenres,
//   selectById: selectGenreById,
//   selectIds: selectGenreIds,
// } = genreAdapter.getSelectors(
//   (state) => selectGenreData(state) ?? initialState
// );
