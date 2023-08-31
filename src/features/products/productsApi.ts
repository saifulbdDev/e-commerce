import { apiSlice } from "@/features/apiSlice";
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        return {
          url: `${data ? `products/category/${data}` : "products"}`,
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
