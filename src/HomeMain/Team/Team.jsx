import { IoArrowRedoSharp } from "react-icons/io5";
import t1 from "../../assets/imgs/intro/sumaiya_islam.png";
import t2 from "../../assets/imgs/intro/rohan_islam.jpg";
// import TeamMember from './TeamMember';
import { Link } from "react-router-dom";
import { FaBehance, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Team = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Team</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Meet the <span className="fw-200">Team</span>
              </span>
            </h2>
            <div className="ml-auto">
              <Link to="/contact" className="go-more">
                <span className="text">Join to us</span>
                <IoArrowRedoSharp className="icon " />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="img">
                <img src={t1} alt="" />
                <div className="info">
                  <span className="fz-12">Web Developer</span>
                  <h6 className="fz-18">Sumaiya Islam</h6>
                </div>
              </div>
              <div className="social">
                <div className="links">
                  <a
                    href="https://github.com/sumayan7477"
                    target="blank"
                    className="hover-anim "
                  ><FiGithub className="fab "/>
                    
                  </a>
                  <a
                  href="https://www.linkedin.com/in/sumaiya-akter-5b23a7317/"
                  target="blank"
                  className="hover-this"
                >
                  <FaLinkedinIn className="fab"></FaLinkedinIn>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091930542877"
                  target="blank"
                  className="hover-this"
                >
                  <FaFacebook className="fab"></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/sumaya_islam_747/"
                  target="blank"
                  className="hover-this"
                >
                 <FaInstagram className="fab"></FaInstagram>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="img">
                <img src={t2} alt="" />
                <div className="info">
                  <span className="fz-12">Graphics Designer</span>
                  <h6 className="fz-18">Rohan Islam</h6>
                </div>
              </div>
              <div className="social">
                <div className="links">
                  <a
                    href="https://www.behance.net/rohanislam9"
                    target="blank"
                    className="hover-anim "
                  ><FaBehance className="fab "/>
                    
                  </a>
                  <a
                  href="ahasanahmmed-rohan"
                  target="blank"
                  className="hover-this"
                >
                  <FaLinkedinIn className="fab"></FaLinkedinIn>
                </a>
                <a
                  href="https://www.facebook.com/ahasanahmmed.rohan"
                  target="blank"
                  className="hover-this"
                >
                  <FaFacebook className="fab"></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/ahasanahmmed.rohan?fbclid=IwY2xjawGAanBleHRuA2FlbQIxMAABHd-sfUJwDJRLGCMUm9n4pLaiEeLnFLDfnYf_Li6YWJ_Baas8JEZae3AjmQ_aem_Lr3piaEt9iOa7ckox62g5w"
                  target="blank"
                  className="hover-this"
                >
                 <FaInstagram className="fab"></FaInstagram>
                </a>
                </div>
              </div>
            </div>
          </div>
          {/* <TeamMember></TeamMember> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
