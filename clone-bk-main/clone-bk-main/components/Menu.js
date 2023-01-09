import Link from "next/link";
import { menu } from "../data/menu";

export default function Menu() {
  return (
    <>
      {menu.map((item, index) => (
        <div
          className="overflow-hidden rounded-lg border border-gray-100 shadow bg-white hover:shadow-orange-900 transition-all duration-200"
          key={index}
        >
          <div className="p-2">
            <Link href="/menu">
              <img
                alt={item.name}
                src={item.image}
                className="h-32 md:h-48 w-full object-cover rounded hover:opacity-90"
              />
            </Link>
          </div>
          <div className="p-2 md:p-3 grid grid-cols-1 md:grid-cols-3 justify-items-center mb-3">
            <div className="col-span-2">
              <Link href="/menu" className="text-xl font-bold text-orange-900">
                {item.name}
              </Link>
            </div>
            <div className="hidden md:block">
              <Link
                href="menu"
                className="py-2 px-4 bg-orange-500 text-white rounded-md font-bold inline-flex items-center"
              >
                Order
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
