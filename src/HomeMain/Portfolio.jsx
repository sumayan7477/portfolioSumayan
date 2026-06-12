import { Link } from "react-router-dom";
import work3 from "../assets/imgs/works/1/website1.png";
import work2 from "../assets/imgs/works/1/website2.png";
import work1 from "../assets/imgs/works/1/website3.jpg";

const Portfolio = () => {
  return (
    <section className="inter-fixed-text section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25"> Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex justify-content-end">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                 Featured <span className="fw-200">projects</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container position-re">
        <div className="links-img">
          <div className="row">
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-1">
                  <img src={work1} alt="" />
                  <Link to='/portfolio' className="link-overlay"></Link>
                </div>
                <div className="cont">
                  <span className="tag text-dark">Business</span>
                  <h2 className="text-dark">Earthmade Aroma</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-2">
                  <img src={work2} alt="" />
                  <Link to='/portfolio' className="link-overlay"></Link>
                </div>
                <div className="cont">
                  <span className="tag">Branding</span>
                  <h2>Blom Air Purifier</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div className="img" data-tab="tab-3">
                  <img src={work3} alt="" />
                  <Link to='/portfolio' className="link-overlay"></Link>
                </div>
                <div className="cont">
                  <span className="tag">Branding</span>
                  <h2>Bank Rebranding</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links-text">
          <ul className="rest">
            <li id="tab-1">
              <span className="tag text-dark">Business</span>
              <h2 className="text-dark">Rstaurant Website</h2>
            </li>
            <li id="tab-2">
              <span className="tag">E-commerce</span>
              <h2 className="text-dark">E-commerce website</h2>
            </li>
            <li id="tab-3">
              <span className="tag">Service</span>
              <h2 className="text-dark"> Service website</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-40">
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <p>Here are some select projects that showcase.</p>
            <Link
             to='/portfolio'
              className="butn main-color ml-40 underline"
            >
              <span>View All</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
