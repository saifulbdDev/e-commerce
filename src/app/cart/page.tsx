"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  addCart,
  removeCart,
  incrementQuantity,
  decrementQuantity
} from "@/features/products/productsSlice";

import { ProductState } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
const Cart: React.FC = () => {
  const [count, setCount] = useState(1);
  const { carts } = useSelector((state: ProductState) => state.product);
  const selectCartTotal = () =>
    carts
      ?.reduce(
        (total: number, item: any) => total + item.price * item.quantity,
        0
      )
      .toFixed(2);
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId: number) => {
    dispatch(removeCart(itemId));
  };
  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity(itemId));
  };
  const handleDecrement = (itemId: number) => {
    dispatch(decrementQuantity(itemId));
  };
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {carts.length > 0 ? (
        <>
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {carts.map((item: any) => (
                <div
                  key={item.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <Link href={`/product/${item.id}`}>
                    <Image
                      src={item?.images}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-full rounded-lg sm:w-16"
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }}></Image>
                  </Link>

                  <div className="sm:ml-4 sm:flex sm:w-full items-center sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>
                      </Link>

                      <p className="mt-1 text-xs text-gray-700">
                        ${item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button
                          type="button"
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 group duration-100 hover:bg-primary-300 hover:text-white"
                          onClick={() => handleDecrement(item.id)}>
                          <MinusIcon className="text-red-600 group-hover:text-white  h-[24px] w-5" />
                        </button>
                        <input
                          type="text"
                          value={item?.quantity}
                          className="w-12 text-center bg-white-100 text-stone-950 outline-none"
                         
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(item.id)}
                          className="cursor-pointer rounded-r group bg-gray-100 py-1 px-3 duration-100 hover:bg-primary-300 hover:text-red-50">
                          <PlusIcon className="text-green-600 group-hover:text-white h-[24px] w-5" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        className="cursor-pointer inline-block rounded-r ml-3 group bg-gray-100 py-1 px-3 duration-100 hover:bg-primary-300 hover:text-red-50"
                        onClick={() => handleRemoveItem(item.id)}>
                        <TrashIcon className="text-red-400 h-[24px] w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700"> ${selectCartTotal()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$0.00</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="text-end">
                  <p className="mb-1 text-lg font-bold">
                    {" "}
                    ${ selectCartTotal()}
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-red-50 hover:bg-red-600">
                Check out
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-stone-950 flex-col flex items-center justify-center">
          <Image
            src="/empty.avif"
            width={200}
            height={200}
            alt="empty"
            className="w-full rounded-lg sm:w-40"
            style={{
              maxWidth: "100%",
              height: "auto"
            }}></Image>
          <div className="mt-4">
            Cart is empty.{" "}
            <Link className="ml-3 text-primary-300" href="/">
              Go shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
