import Head from "next/head";
import Carousel from "../components/Carousel";
import Menu from "../components/Menu";

export default function PageHome() {
  return (
    <div className="h-full w-full bg-food pb-20">
      <Head>
        <title>Home | Burger King</title>
      </Head>
      <div className="">
        <Carousel />
      </div>
      <div className="text-center md:pt-6 px-2">
        <h1 className="mt-4 mb-6 text-2xl md:text-3xl font-bold text-orange-900">
          Our Menus
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
          <Menu />
        </div>
      </div>
    </div>
  );
}
