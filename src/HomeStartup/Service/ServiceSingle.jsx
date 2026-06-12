import servicons4 from "../../assets/imgs/serv-icons/6.png";

const ServiceSingle = () => {
  return (
    <div className="col-lg-6">
      <div className="item-box">
        <div className="d-flex align-items-end">
          <div>
            <span className="num fz-20">04.</span>
            <div className="icon mr-80">
              <img src={servicons4} alt="" />
            </div>
          </div>
          <div>
            <h5>Product Design</h5>
            <div className="text mt-30">
              <p className="mb-80">
                It is a involves the systematic analysis of data to gain
                valuable insights into the various type aspects of a business.
              </p>
            </div>
            <a href="page-services-details.html">
              <span>View More</span>
              <span className="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
