import { apiSlice } from "@/features/apiSlice";
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        let url = "products";

        if (data?.category) {
          url += `/category/${data.category}`;
        }

        if (data?.sort) {
          url += `?sort=${data.sort}`;
        }

        return {
          url: url,
          method: "GET"
        };
      }
    }),
    getProduct: builder.query({
      query: (data) => {
        return {
          url: `products/${data}`,
          method: "GET"
        };
      }
    }),
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `products/categories`,
          method: "GET"
        };
      }
    }),
    getUsers: builder.query({
      query: () => {
        return {
          url: `users`,
          method: "GET"
        };
      }
    })
  })
});

export const { 
  useGetProductsQuery, 
  useGetProductQuery, 
  useGetAllCategoriesQuery,
  useGetUsersQuery
} = productApi;
