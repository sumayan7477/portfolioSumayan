import image1 from "../assets/imgs/intro/01.jpg";
import imagebg from "../assets/imgs/background/3.jpg";
import PageHeader from "../components/PageHeader";
import { useLoaderData } from "react-router-dom";
const ServiceDetails = () => {
    const {title , details ,short_details,thumb_img , features_list} = useLoaderData();
  return (
    <>
    <PageHeader title={title} subTitle={title}></PageHeader>
      <section className="services-details section-padding">
        <div className="container">
          <div className="sec-head text-center mb-80">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div>
                  <h6 className="sub-title main-color mb-15">
                    {title}
                  </h6>
                  <h4>
                    {details}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row serv-imgs mt-80">
            <div className="col-lg-4">
              <div className="img o-hidden radius-15 fit-img md-mb30">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="img o-hidden radius-15">
                <img src={imagebg} alt="" data-speed="auto" data-lag="0" />
              </div>
            </div>
          </div>
          <div className="row mt-80">
            <div className="col-lg-4">
              <div className="text md-mb50">
                <p>
                  {short_details} <br />{details}
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="">
                  <ul className="rest row list-arrow">
                    {
                        features_list.map((features , index) =>(
                            <li key={index} className="nowrap col-md-6 mb-10">
                      <span className="icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            fill="#14cf93"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="inline fw-400">{features}</h6>
                    </li>
                        ))
                    }
                    
                    
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
