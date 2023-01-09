import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { CartStore } from "../store/CartStore";

export default function Header() {
  const { carts } = CartStore((state) => state);
  const router = useRouter();
  return (
    <header
      aria-label="Site Header"
      className="border-b border-transparent bg-neutral-800 sticky top-0 md:relative z-50 shadow"
    >
      <Toaster />
      <div className="mx-auto flex h-16 md:h-20 max-w-4xl items-center justify-between">
        <div className="flex">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">Logo</span>
              <img
                src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                alt="logo"
                className="w-12 md:w-24 md:mt-8"
              />
            </Link>
          </div>
          <div className="hidden md:flex mt-9 space-x-8 pl-8 font-bold">
            <div className="flex flex-col">
              <Link href="/" className="text-sm text-yellow-500">
                Delivery
              </Link>
              <Link href="/" className="text-2xl text-gray-100">
                Order
              </Link>
            </div>
            <div className="flex flex-col">
              <Link href="/" className="text-sm text-yellow-500">
                Get Fresh
              </Link>
              <Link href="/" className="text-2xl text-gray-100">
                Promotion
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center order-first p-2">
          <button type="button" className="">
            <svg
              className="h-6 w-6 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <div className="flex items-center divide-x divide-neutral-900/50 md:border-x border-neutral-900/50">
              <span>
                <Link
                  href="/cart"
                  className={`${
                    router.pathname === "/cart"
                      ? "border-orange-400"
                      : "border-transparent"
                  } block border-b-4 p-4 md:p-6 hover:border-orange-400`}
                >
                  <svg
                    className="h-6 w-6 fill-gray-200 md:fill-orange-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  {carts.length > 0 && (
                    <span
                      className={`${
                        carts.reduce((acc, item) => acc + item.quantity, 0) > 9
                          ? "md:p-1"
                          : "md:p-2"
                      } font-bold absolute text-gray-200 top-0 p-0.5`}
                    >
                      {carts
                        .filter((item) => item.quantity > 0)
                        .reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}

                  <span className="sr-only">Cart</span>
                </Link>
              </span>

              <span className="hidden md:block">
                <Link
                  href="/login"
                  className={`${
                    router.pathname === "/login"
                      ? "border-orange-400"
                      : "border-transparent"
                  } block border-b-4 p-6 hover:border-orange-400`}
                >
                  <svg
                    className="h-6 w-6 fill-orange-400 stroke-orange-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </Link>
              </span>

              <span className="hidden sm:block">
                <Link
                  href="/search"
                  className="block border-b-4 border-transparent p-6 hover:border-orange-400"
                >
                  <svg
                    className="h-6 w-6 p-0.5 stroke-orange-400 fill-orange-400"
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

                  <span className="sr-only"> Search </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
