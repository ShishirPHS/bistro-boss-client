import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="mb-32">
      <div className="mb-12">
        <SectionTitle
          subHeader={"What Our Clients Say"}
          header={"TESTIMONIALS"}
        ></SectionTitle>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-20">
                <div className="flex flex-col items-center justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <BsQuote className="text-[100px] mt-10 font-bold"></BsQuote>
                </div>
                <div>
                  <p className="text-[#444444] text-xl text-center mt-10 mb-2">
                    {review.details}
                  </p>
                  <h4 className="text-center font-Inter text-3xl text-[#CD9003]">
                    {review.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
