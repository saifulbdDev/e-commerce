"use client";

import ProductPage from "@/components/common/Product/index";
import { Loader } from "@/assets/icons";
import { Product } from "@/types/product.type";
import {
  useGetProductsQuery,
  useGetAllCategoriesQuery
} from "@/features/products/productsApi";
import React, { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("");
  const { data, isLoading } = useGetProductsQuery(category, {
    refetchOnMountOrArgChange: true
  });
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategoriesQuery({
      refetchOnMountOrArgChange: false
    });

  return (
    <div className="bg-gray-50">
      {categoriesLoading || isLoading ? (
        <div className="mx-auto flex items-center justify-center min-h-screen">
          <Loader className="w-10 h-10" />
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 items-center justify-between">
            <div className="">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Products list
              </h2>
            </div>

            <div className=" justify-end  flex items-center space-x-2 ">
              <span className="ml-4 text-black text-lg">
                Filter by Category :
              </span>
              <select
                id="category"
                name="category"
                onChange={(evt) => setCategory(evt.target.value)}
                className="block  rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6">
                {categories?.map((item: string) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-3  sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
            {data?.length
              ? data?.map((product: Product) => (
                  <ProductPage item={product} key={product.id} />
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
}
