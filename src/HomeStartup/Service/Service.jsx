import { IoArrowRedoOutline } from "react-icons/io5";
import servicons2 from "../../assets/imgs/serv-icons/2.png";
import { Link } from "react-router-dom";
import Useaxios from "../../Hooks/Useaxios";
import { useEffect, useState } from "react";

const Service = () => {
  const axiosPublic = Useaxios();
  const [services, setServices] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/services")
      .then(function (response) {
        // console.log(response.data);
        setServices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
//   console.log(services);

  return (
    <section className="services-crev section-padding" data-scroll-index="1">
      <div className="container">
        
        <div className="row">
          {services.map((service , index) => (
            <div key={service._id} className="col-lg-6">
              <div className="item-box mb-30">
                <div className="d-flex align-items-end">
                  <div>
                    <span className="num fz-20">{index+1}.</span>
                    <div className="icon mr-80">
                      <img src={servicons2} alt="servicons" />
                    </div>
                  </div>
                  <div>
                    <h5>{service.title}</h5>
                    <div className="text mt-30">
                      <p className="mb-80">
                        {service.details}
                      </p>
                    </div>
                    <a href="page-services-details.html">
                      <span>
                        <Link to={`/serviceDetails/${service._id}`}>View More</Link>{" "}
                      </span>
                      <span className="icon ">
                        <IoArrowRedoOutline />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
