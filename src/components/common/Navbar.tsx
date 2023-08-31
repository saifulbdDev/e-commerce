/* eslint-disable react-hooks/exhaustive-deps */
"use client"; // This is a client component

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";
import { ProductState } from "@/types/product.type";

export default function Example() {
  const { userId, carts } = useSelector((state: ProductState) => state.product);
 

  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      router.push("/");
    }
  }, [userId]);
  return (
    <header className="bg-primary-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-10"
        aria-label="Global">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <h2 className="text-2xl text-white">Saiful</h2>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white dark:text-white">
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative text-left lg:inline-block">
            <Link
              href="/cart"
              className=" py-2 pr-2 flex bg-transparenttext-zinc-900/80">
              <ShoppingCartIcon
                className="my-auto text-white h-10 w-10 relative"
                aria-hidden="true"
              />
              <div className="flex flex-col self-center">
                {carts && carts?.length ? (
                  <span className=" text-red-600 rounded-full w-[20px] h-[20px] text-[10px] text-center flex justify-center items-center bg-white absolute top-2 pt-[0.5px] font-bold left-8">
                    {carts?.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
