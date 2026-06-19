
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import servicons2 from "../../assets/imgs/serv-icons/2.png";

const Service = () => {
  const [services] = useState([
    {
      _id: "1",
      title: "Web Development",
      details:
        "Custom responsive websites and web applications built using modern technologies such as React, Next.js, Node.js, and MongoDB.",
    },
    {
      _id: "2",
      title: "UI/UX Design",
      details:
        "Professional user interface and user experience design focused on usability, accessibility, and modern design principles.",
    },
    {
      _id: "3",
      title: "E-Commerce Development",
      details:
        "Complete e-commerce solutions with product management, payment gateway integration, and order processing systems.",
    },
    {
      _id: "4",
      title: "API Development",
      details:
        "Secure and scalable RESTful API development using Express.js, ASP.NET Core, and database integration.",
    },
    {
      _id: "5",
      title: "Hybride Mobile App Development",
      details:
        "Cross-platform mobile applications built with React Native to deliver seamless user experiences.",
    },
    {
      _id: "6",
      title: "Landing Page Design",
      details:
        "High-converting landing pages optimized for marketing campaigns, lead generation, and business growth.",
    },
    {
      _id: "7",
      title: "Website Maintenance",
      details:
        "Ongoing website support, bug fixing, performance optimization, and security updates for businesses.",
    },
    {
      _id: "9",
      title: "Database Design",
      details:
        "Efficient database architecture and management using MySQL, SQL Server, and MongoDB solutions.",
    },
    {
      _id: "10",
      title: "Cloud Deployment",
      details:
        "Deployment and hosting solutions using modern cloud platforms with scalability and reliability.",
    },
  ]);

  return (
    <section className="services-crev section-padding" data-scroll-index="1">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={service._id} className="col-lg-6">
              <div className="item-box mb-30">
                <div className="d-flex align-items-end">
                  <div>
                    <span className="num fz-20">{index + 1}.</span>

                    <div className="icon mr-80">
                      <img src={servicons2} alt="service icon" />
                    </div>
                  </div>

                  <div>
                    <h5>{service.title}</h5>

                    <div className="text mt-30">
                      <p className="mb-80">{service.details}</p>
                    </div>

                    <Link
                      to={`/serviceDetails/${service._id}`}
                      className="d-flex align-items-center gap-2"
                    >
                      <span>View More</span>

                      <span className="icon">
                        <IoArrowRedoOutline />
                      </span>
                    </Link>
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

