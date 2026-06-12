import digital from "../../assets/imgs/serv-icons/3.png";
import arrowright from "../../assets/imgs/arrow-right.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Useaxios from "../../Hooks/Useaxios";
import { useEffect, useState } from "react";

const Services = () => {
  const axiosPublic = Useaxios();
  const [services, setServices] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/services")
      .then( function (response) {
        // console.log(response.data);
        setServices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(services);

  return (
    <section className="services section-padding ">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Comprehensive <span className="fw-200">Services.</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <FaArrowLeft></FaArrowLeft>
                </div>
                <div className="swiper-button-next">
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <div
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              {services?.map((service) => (
                <div key={service._id} className="swiper-slide">
                  <div className="item-box radius-15">
                    <div className="icon mb-40 opacity-5">
                      <img src={digital} alt="" />
                    </div>
                    <h5 className="mb-15">{service.title}</h5>
                    <p>
                     {service.details}
                    </p>
                    <a
                      href=""
                      className="rmore mt-30"
                    >
                      <span className="sub-title">
                        {" "}
                        <Link to="/service">Read More</Link>
                      </span>
                      <img
                        src={arrowright}
                        alt=""
                        className="icon-img-20 ml-5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
