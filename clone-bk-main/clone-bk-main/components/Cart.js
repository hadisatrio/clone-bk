import Head from "next/head";
import Link from "next/link";
import { CartStore } from "../store/CartStore";
import { Rupiah } from "../utils/Rupiah";

export default function Cart() {
  const { carts, addCart, removeOneCart, removeAllCart } = CartStore(
    (state) => state
  );

  const handleChangeInput = (e, item) => {
    const { id, name, price, image } = item;
    if (e === "") {
      const quantity = "";
      addCart(id, name, price, quantity, image);
    } else if (Number(e)) {
      const quantity = Number(e);
      addCart(id, name, price, quantity, image);
    }
  };

  const onBlurInput = (e, item) => {
    if (e === "" || Number(e) <= 0 || Number(e) >= 100) {
      const quantity = 1;
      const { id, name, price, image } = item;
      addCart(id, name, price, quantity, image);
    }
  };

  const handleIncrementCart = (item) => {
    const { id, name, price, image } = item;
    const quantity = item.quantity + 1;
    addCart(id, name, price, quantity, image);
  };

  const handleDecrementCart = (item) => {
    if (item.quantity > 1) {
      const { id, name, price, image } = item;
      const quantity = item.quantity - 1;
      addCart(id, name, price, quantity, image);
    }
  };
  return (
    <section className="bg-food">
      <Head>
        <title>Cart | Burger King</title>
      </Head>
      <div className="max-w-4xl px-3 md:px-0 py-8 mx-auto min-h-[25vw]">
        {carts.length === 0 && (
          <div className="grid min-h-[30vw] px-4 bg-white place-content-center">
            <div className="text-center">
              <img src="/empty.svg" alt="empty" className="h-60" />
              <p className="mt-4 text-2xl font-medium">Your cart empty!</p>
              <Link
                href="/menu"
                className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-orange-600 rounded hover:bg-orange-700 focus:outline-none focus:ring"
              >
                Go To Our Menu
              </Link>
            </div>
          </div>
        )}
        {carts.length > 0 && (
          <div className="">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-4">
              <ul className="space-y-4">
                {carts.map((item, index) => (
                  <li className="flex items-center" key={index}>
                    <Link href={`/menu/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-20 md:w-32 h-20 md:h-32 rounded"
                      />
                    </Link>

                    <div className="ml-4">
                      <Link href={`/menu/${item.id}`}>
                        <h3 className="md:text-xl text-gray-900 font-medium">
                          {item.name}
                        </h3>
                      </Link>

                      <p className="text-xs">Rp. {Rupiah(item.price)}</p>
                    </div>

                    <div className="flex items-center justify-end flex-1 gap-2">
                      <form className="flex rounded items-center border border-gray-200">
                        <label htmlFor="Line1Qty" className="sr-only">
                          Quantity{" "}
                        </label>
                        <button
                          onClick={() => handleDecrementCart(item)}
                          type="button"
                          className="w-6 md:w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                          &#8722;
                        </button>
                        <input
                          type="number"
                          onBlur={(e) => onBlurInput(e.target.value, item)}
                          value={item.quantity}
                          onChange={(e) =>
                            handleChangeInput(e.target.value, item)
                          }
                          className="h-10 w-12 focus:ring-orange-500 border-none p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        <button
                          type="button"
                          onClick={() => handleIncrementCart(item)}
                          className="w-6 md:w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                          &#43;
                        </button>
                      </form>

                      <button
                        className="text-gray-600 transition hover:text-red-600"
                        type="button"
                        onClick={() => removeOneCart(item.id)}
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>
                        <>{`Rp. ${Rupiah(
                          carts.reduce(
                            (acc, item) => acc + item.quantity * item.price,
                            0
                          )
                        )}`}</>
                      </dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeAllCart()}
                      className="block px-6 py-3 text-sm text-gray-100 transition bg-orange-600 rounded font-bold"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
