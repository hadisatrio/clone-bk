import Head from "next/head";
import { useState } from "react";
import { CartStore } from "../store/CartStore";
import { Rupiah } from "../utils/Rupiah";

export default function Product({ product }) {
  // store carts
  const { addCart } = CartStore((state) => state);
  const [qty, setQty] = useState(1);

  const handlerAddToCart = () => {
    const quantity = Number(qty);
    const { id, name, price, image } = product;
    addCart(id, name, price, quantity, image);
  };

  const onBlurInput = (e) => {
    if (e === "" || Number(e) <= 0 || Number(e) >= 100) {
      const quantity = 1;
      setQty(quantity);
    }
  };

  const size = ["S", "M", "L", "XL"];
  return (
    <section className="bg-food">
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="relative mx-auto max-w-4xl py-8 px-2 md:mt-2">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src={product.image}
                className="h-72 w-full rounded-xl object-cover lg:h-96"
              />

              <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>

                <span className="ml-1.5 text-xs"> Click to zoom </span>
              </div>
            </div>

            <ul className="mt-1 flex gap-1">
              <li>
                <img
                  alt="Tee"
                  src={product.image}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </li>
            </ul>
          </div>

          <div className="lg:sticky lg:top-0">
            <form className="space-y-4 lg:pt-8">
              <fieldset>
                <legend className="text-lg font-bold">Size</legend>

                <div className="mt-2 flex gap-1">
                  {size.map((item, index) => (
                    <label
                      htmlFor={item}
                      className="cursor-pointer"
                      key={index}
                    >
                      <input
                        type="radio"
                        id={item}
                        name={item}
                        className="peer sr-only"
                        defaultChecked={index === 0}
                      />
                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <p className="text-xl font-bold">Rp. {Rupiah(product.price)}</p>
              </div>

              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity{" "}
                </label>

                <div className="flex items-center border border-gray-200 rounded w-2/5 md:w-full">
                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    type="button"
                    className="w-20 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    &#8722;
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value={qty}
                    onBlur={(e) => onBlurInput(e.target.value)}
                    onChange={(e) => setQty(e.target.value)}
                    className="h-10 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none focus:border-red-500 focus:ring-red-500"
                  />

                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="w-20 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    &#43;
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlerAddToCart(product)}
                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>

              <h2>Ingridients</h2>

              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
