import logo from "../src/assets/imgs/logo-light.png";
import footBg from "../src/assets/imgs/header/bg1.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="clean-footer crev bg-img"
      data-background={footBg}
      data-overlay-dark="10"
    >
      <div className="container pb-40 section-padding ontop">
        <div className="cal-action pb-50 mb-80 bord-thin-bottom">
          <h2 className="fz-120 line-height-1 d-rotate wow">
            <span className="rotate-text">
              <a href="page-contact3.html">Let’s Contact </a>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="logo icon-img-100">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column">
              <div className="mb-40">
                <h6 className="sub-title mb-30">Address</h6>
                <h5 className="opacity-8">
                  Munshiganj sadar <br /> Dhaka , Bangladesh
                </h5>
              </div>

              <a href="tel:+880 01401446231" className="underline">
                <span className="fz-22 main-color">+880 01401446231</span>
              </a>
              <br />
              <a href="mailto:sumayan7477@gmail.com" className="underline">
                <span className="fz-22 main-color">sumayan7477@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="column">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link to="/about">About</Link>
                </li>
                <li className="mb-15">
                  <Link to="/service">Services</Link>
                </li>
                <li className="mb-15">
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30">Support</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link to="/faq">FAQS</Link>
                </li>
                <li>
                  <Link to="">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
          <div>
            <ul className="rest d-flex align-items-center">
              <li className="hover-this cursor-pointer">
                <a
                  href="https://github.com/sumayan7477"
                  target="blank"
                  className="hover-anim"
                >
                  <FaGithub className="fs-2"></FaGithub>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a
                  href="https://www.linkedin.com/in/sumaiya-akter-5b23a7317/"
                  target="blank"
                  className="hover-this"
                >
                  <FaLinkedinIn className="fs-2"></FaLinkedinIn>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a
                  href="https://www.facebook.com/profile.php?id=100091930542877"
                  target="blank"
                  className="hover-this"
                >
                  <FaFacebook className="fs-2"></FaFacebook>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a
                  href="https://www.instagram.com/sumaya_islam_747/"
                  target="blank"
                  className="hover-this"
                >
                 <FaInstagram className="fs-2"></FaInstagram>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <p className="fz-14">
              © 2024 PortFolio is Proudly Powered by{" "}
              <span className="underline main-color">
                <a
                  href="https://www.linkedin.com/in/sumaiya-akter-5b23a7317/"
                  target="_blank"
                >
                 Sumaiya islam
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
