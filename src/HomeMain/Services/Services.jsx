
import digital from "../../assets/imgs/serv-icons/3.png";
import arrowright from "../../assets/imgs/arrow-right.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    details:
      "Building responsive, modern, and user-friendly interfaces with a focus on performance and usability.",
  },
  {
    id: 2,
    title: "Full Stack Development",
    details:
      "Developing complete web applications from frontend interfaces to backend systems and databases.",
  },
  {
    id: 3,
    title: "REST API Development",
    details:
      "Designing secure and scalable APIs for seamless communication between applications and services.",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    details:
      "Creating online stores with payment integration, product management, and optimized user experiences.",
  },
  {
    id: 5,
    title: "Database Design",
    details:
      "Designing efficient database structures that ensure scalability, security, and performance.",
  },
  {
    id: 6,
    title: "Website Maintenance",
    details:
      "Providing ongoing support, bug fixes, performance improvements, and feature enhancements.",
  },
];

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">What I Do</h6>

          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Professional <span className="fw-200">Services.</span>
              </span>
            </h2>

            <div className="ml-auto">
              <div className="swiper-arrow-control d-flex gap-3">
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

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="item-box radius-15">
                <div className="icon mb-40 opacity-5">
                  <img src={digital} alt={service.title} />
                </div>

                <h5 className="mb-15">{service.title}</h5>

                <p>{service.details}</p>

                <Link to="/service" className="rmore mt-30">
                  <span className="sub-title">Read More</span>

                  <img
                    src={arrowright}
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
