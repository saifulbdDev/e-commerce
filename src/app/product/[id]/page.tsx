"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetProductQuery } from "@/features/products/productsApi";
import ProductDetail from "@/components/common/ProductDetails";
import { Loader } from "@/assets/icons";

export default function ProductDetails() {
  const params = useParams();
  console.log("router", params.id);
  const { data, isLoading } = useGetProductQuery(params.id, {
    refetchOnMountOrArgChange: true
  });

  console.log(data, "data");
  return (
    <div>
      {isLoading ? (
        <div className="mx-auto flex items-center justify-center min-h-screen">
          <Loader className="w-10 h-10" />
        </div>
      ) : (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          <ProductDetail product={data} />
        </div>
      )}
    </div>
  );
}
