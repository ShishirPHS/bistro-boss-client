import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="pt-12">
      <SectionTitle
        subHeader={"From 11:00am to 10:00pm"}
        header={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Salads
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              pizzas
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Soups
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              desserts
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide5} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Salads
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
