import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    review:
      "Working with him was a smooth experience. The work was delivered on time and exceeded expectations.",
    client_name: "Rahim Uddin",
    profession: "Business Owner",
  },
  {
    id: 2,
    review:
      "Very professional and skilled developer. Communication was clear throughout the project.",
    client_name: "Sarah Khatun",
    profession: "Entrepreneur",
  },
  {
    id: 3,
    review:
      "Excellent problem-solving ability and clean work. Highly recommended for web projects.",
    client_name: "Nusrat Jahan",
    profession: "Startup Founder",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          {/* LEFT */}
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>

              <h3 className="fw-600">
                What People <span className="fw-200">Say?</span>
              </h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-8 position-re">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="item">
                    <div className="content">
                      {/* QUOTE TEXT */}
                      <div className="text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256"
                          height="208"
                          viewBox="0 0 256 208"
                          className="qout-svg"
                        >
                          <path
                            d="M-23.723-530.169v97.327H-121.05..."
                            fill="none"
                            stroke="#fff"
                            opacity="0.3"
                          />
                        </svg>

                        <p className="fz-20">{review.review}</p>
                      </div>

                      {/* CLIENT INFO (NO IMAGE NOW) */}
                      <div className="info pt-40 mt-40 bord-thin-top">
                        <h5>{review.client_name}</h5>
                        <span className="sub-title main-color">
                          {review.profession}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAVIGATION BUTTONS */}
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <FaArrowLeft />
              </div>

              <div className="swiper-button-next">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;