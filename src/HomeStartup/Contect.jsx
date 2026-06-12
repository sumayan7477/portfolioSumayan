import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Contect = () => {
  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+880 01401446231">+880 01401446231</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Dhaka , Bangladesh</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <a href="mailto:sumayan7477@gmail.com">sumayan7477@gmail.com</a>
              </div>

              <div className="social-icon-circle mt-50">
                <a
                  href="https://github.com/sumayan7477"
                  target="blank"
                  className="hover-anim"
                >
                  <FiGithub className="fs-4"></FiGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/sumaiya-akter-5b23a7317/"
                  target="blank"
                  className="hover-this"
                >
                  <FaLinkedinIn className="fs-4"></FaLinkedinIn>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091930542877"
                  target="blank"
                  className="hover-this"
                >
                  <FaFacebook className="fs-4"></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/sumaya_islam_747/"
                  target="blank"
                  className="hover-this"
                >
                  <FaInstagram className="fs-4"></FaInstagram>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offse4-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="https://ui-themez.smartinnovates.net/items/infolio/Infolio/contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&apos;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
