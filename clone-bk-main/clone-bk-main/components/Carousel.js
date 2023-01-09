// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
  const images = [
    "https://bkdelivery.co.id/media/slider_image/2023/1/8/bz535qgss7hgtfqaglfwr4.jpg",
    "https://bkdelivery.co.id/media/slider_image/2022/12/20/iuazeo3rf9k7o7mdjfcpul.jpg",
  ];

  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="gambar"
              className="object-cover h-[200px] lg:h-[500px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
