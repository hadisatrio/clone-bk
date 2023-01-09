import Head from "next/head";
import Link from "next/link";
import React from "react";
import { menu } from "../data/menu";
import { Rupiah } from "../utils/Rupiah";

export default function FilteringSide() {
  return (
    <section className="bg-food">
      <Head>
        <title>Menu | Burger King</title>
      </Head>
      <div className="max-w-4xl pt-4 pb-12 mx-auto px-2 md:px-0">
        <div className="block mt-2 lg:hidden">
          <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div className="relative">
              <input
                type="text"
                className="rounded-md border border-gray-300 shadow w-full focus:ring-orange-500 focus:border-orange-500 placeholder:text-gray-400 pr-8 input-chat"
                placeholder="Search menu..."
              />
              <span className="absolute right-2.5 bottom-2.5 change-color text-gray-400">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full h-full space-y-3.5 flex flex-col">
              {menu.map((item, index) => (
                <Link
                  href="/menu"
                  className={` ${
                    index === 0 ? "bg-orange-300" : "bg-orange-100"
                  } py-2 px-4 rounded-lg w-full h-full font-bold text-lg text-left hover:bg-orange-300 transition-all duration-200`}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-[10px] px-1">* Harga belum termasuk pajak</p>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {menu.map((item, index) => (
                <div
                  className="overflow-hidden rounded-lg border border-gray-100 shadow bg-white hover:shadow-orange-900 transition-all duration-200"
                  key={index}
                >
                  <div className="p-3">
                    <Link href={`/menu/${item.id}`}>
                      <img
                        alt={item.name}
                        src={item.image}
                        className="h-48 w-full object-cover rounded hover:opacity-90"
                      />
                    </Link>
                  </div>
                  <div className="px-3 mb-1">
                    <div className="">
                      <Link
                        href={`/menu/${item.id}`}
                        className="text-xl font-bold text-orange-900"
                      >
                        {item.name}
                      </Link>
                    </div>
                  </div>
                  <div className="px-3 mb-3">
                    <p className="text-orange-900 font-bold">
                      Rp. {Rupiah(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
