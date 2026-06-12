import { Link } from "react-router-dom";
import arrowright from "../../assets/imgs/arrow-right.png";
import UIUX from "../../assets/imgs/serv-icons/6.png";

const SingleService = () => {
  return (
    <div className="swiper-slide">
      <div className="item-box radius-15">
        <div className="icon mb-40 opacity-5">
          <img src={UIUX} alt="" />
        </div>
        <h5 className="mb-15">UI-UX Design</h5>
        <p>
          Live workshop where we define the main problems and challenges before
          building a strategic plan moving forward.
        </p>
        <a href="page-services-details.html" className="rmore mt-30">
          <span className="sub-title"><Link to='/service'>Read More</Link></span>
          <img src={arrowright} alt="" className="icon-img-20 ml-5" />
        </a>
      </div>
    </div>
  );
};

export default SingleService;
