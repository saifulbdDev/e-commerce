"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  addCart,

} from "@/features/products/productsSlice";

function ProductDetails({ product }: any) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch<any>();
  const handleAddToCart = (product: any) => {
    const id = product?.id;
    const name = product?.title;
    const price = product.price.toFixed(2);
    const images = product.image;
    dispatch(
      addCart({
        id,
        name,
        quantity: count,
        price: price,
        images
      })
    );
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="container px-5 py-24 mx-auto" style={{ cursor: "auto" }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-30 object-center rounded object-cover"
            src={product?.image}
            width={500}
            height={200}
            style={{
              height: "700px"
            }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
              {product?.title}
            </h1>
            <p className="leading-relaxed text-gray-900 pb-5">
              {" "}
              {product?.description}{" "}
            </p>

            <div className="pb-5 whitespace-nowrap">
              <div className="flex items-center border-gray-100">
                <button
                  type="button"
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 group duration-100 hover:bg-primary-300 hover:text-white"
                  onClick={() => handleDecrement()}>
                  <MinusIcon className="text-red-600 group-hover:text-white  h-[24px] w-5" />
                </button>
                <input
                  type="text"
                  value={count}
                  className="w-12 text-center bg-white-100 text-stone-950 outline-none"
                  onChange={(e: any) => setCount(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleIncrement()}
                  className="cursor-pointer rounded-r group bg-gray-100 py-1 px-3 duration-100 hover:bg-primary-300 hover:text-blue-50">
                  <PlusIcon className="text-green-600 group-hover:text-white h-[24px] w-5" />
                </button>
              </div>
            </div>

            <div className="">
              <p className="title-font font-medium text-2xl mb-3 text-gray-900">
                ${product?.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className=" text-white bg-primary-300 border-0 py-2 px-6 focus:outline-none hover:bg-primary-400 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
