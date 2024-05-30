import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../constants/slides.ts";

const SlideShow: FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={slides.length <= 1 ? "swiper-centered" : ""}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="sec dark:bg-slate-300 dark:text-slate-950">
              {slide.title && (
                <h2 className="dark:text-black">{slide.title}</h2>
              )}
              <p className="dark:text-black">{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideShow;
