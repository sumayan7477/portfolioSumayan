import { Link } from "react-router-dom";
import logo from "../src/assets/imgs/logo-light.png";
import { GrClose } from "react-icons/gr";
const Homenu = () => {
  return (
    <div className="hamenu">
      <div className="logo icon-img-100">
        <img src={logo} alt="" />
      </div>
      <div className="close-menu cursor-pointer"><GrClose /></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="menu-text">
              <div className="text">
                <h2>Menu</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <span className="fill-text" data-text="Home">
                       <Link to='/'>Home</Link> 
                      </span>{" "}
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <a href="home-main.html" className="sub-link">
                          
                          <Link to='/'>Main Home</Link>
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="home-startup-onepage.html"
                          className="sub-link"
                        >
                          <Link to='/startup'>Modern Startup </Link>
                          
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="home-creative-agency.html"
                          className="sub-link"
                        >
                          Creative Agency
                        </a>
                      </li>
                      <li>
                        <a href="home-modern-agency.html" className="sub-link">
                          Modern Agency
                        </a>
                      </li>
                      <li>
                        <a
                          href="home-creative-portfolio.html"
                          className="sub-link"
                        >
                          Creative Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="home-digital-agency.html" className="sub-link">
                          Digital Agency
                        </a>
                      </li>
                      <li>
                        <a href="home-freelancer.html" className="sub-link">
                          Freelancer
                        </a>
                      </li>
                      <li>
                        <a href="home-personal-vcard.html" className="sub-link">
                          Personal vCard
                        </a>
                      </li>
                      <li>
                        <a
                          href="home-minimal-portfolio.html"
                          className="sub-link"
                        >
                          Minimal Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="home-asymmetric-portfolio.html"
                          className="sub-link"
                        >
                          Asymmetric Portfolio
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <span className="fill-text" data-text="Pages">
                        Pages
                      </span>{" "}
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu no-bord">
                    <ul>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="About Us">
                             About 
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a href="page-about.html" className="sub-link">
                              <Link to='/about'>About  </Link> 
                              </a>
                            </li>
                            {/* <li>
                              <a href="page-about2.html" className="sub-link">
                                About Us v2
                              </a>
                            </li>
                            <li>
                              <a href="page-about3.html" className="sub-link">
                                About Us v3
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="Services">
                            Services
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a href="page-services.html" className="sub-link">
                              <Link to='/service'>Services v1</Link> </a>
                            </li>
                            <li>
                              <a
                                href="page-services2.html"
                                className="sub-link"
                              >
                                <Link to='/service'>Services v2</Link> 
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="Contact">
                            Contact  
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a href="page-contact.html" className="sub-link">
                              <Link to='/contact'>Contact</Link> 
                              </a>
                            </li>
                            {/* <li>
                              <a href="page-contact2.html" className="sub-link">
                                Contact v2
                              </a>
                            </li>
                            <li>
                              <a href="page-contact3.html" className="sub-link">
                                Contact v3
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="Team">
                              Team
                           
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a href="page-team.html" className="sub-link">
                              <Link to='/ourTeam' > My Team</Link> 
                              </a>
                            </li>
                            {/* <li>
                              <a
                                href="page-team-single.html"
                                className="sub-link"
                              >
                                Team Details
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="Others">
                              Others
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a href="page-FAQS.html" className="sub-link">
                              <Link to='/faq'>FAQS</Link>  
                              </a>
                            </li>
                            {/* <li>
                              <a href="page-error404.html" className="sub-link">
                                Error 404
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <span className="fill-text" data-text="Portfolio">
                      <Link to='/portfolio'>Portfolio</Link>  
                      </span>{" "}
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu no-bord">
                    <ul>
                      {/* <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span
                              className="fill-text"
                              data-text="Portfolio Type"
                            >
                              Portfolio Type
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a
                                href="portfolio-standard.html"
                                className="sub-link"
                              >
                                Standerd
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-gallery.html"
                                className="sub-link"
                              >
                                Gallery
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-metro.html"
                                className="sub-link"
                              >
                                Metro
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-masonry.html"
                                className="sub-link"
                              >
                                Masonry
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-caption-cursor.html"
                                className="sub-link"
                              >
                                Caption Cursor
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-outline.html"
                                className="sub-link"
                              >
                                Outline
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-parallax.html"
                                className="sub-link"
                              >
                                Parallax
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-sticky.html"
                                className="sub-link"
                              >
                                Sticky
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span className="fill-text" data-text="Showcases">
                              Showcases
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a
                                href="showcase-fullscreen.html"
                                className="sub-link"
                              >
                                Parallax Slider
                              </a>
                            </li>
                            <li>
                              <a
                                href="showcase-carousel.html"
                                className="sub-link"
                              >
                                Showcase Carousel
                              </a>
                            </li>
                            <li>
                              <a
                                href="showcase-half-slider.html"
                                className="sub-link"
                              >
                                Creative Slider
                              </a>
                            </li>
                            <li>
                              <a
                                href="showcase-interactive-full.html"
                                className="sub-link"
                              >
                                Interactive Full
                              </a>
                            </li>
                            <li>
                              <a
                                href="showcase-interactive-center.html"
                                className="sub-link"
                              >
                                Interactive Center
                              </a>
                            </li>
                            <li>
                              <a
                                href="showcase-interactive-vertical.html"
                                className="sub-link"
                              >
                                Interactive Vertical
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li> */}
                      <li>
                        <div className="o-hidden">
                          <div className="link cursor-pointer sub-dmenu">
                            <span
                              className="fill-text"
                              data-text="Portfolio Single"
                            >
                              Portfolio 
                            </span>{" "}
                            <i></i>
                          </div>
                        </div>
                        <div className="sub-menu2">
                          <ul>
                            <li>
                              <a  className="sub-link">
                              <Link to='/portfolio' >Portfolio</Link>    
                              </a>
                            </li>
                            

                            
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <span className="fill-text" data-text="Blogs">
                     Blogs   
                      </span>{" "}
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <a className="sub-link" href="blog-classNameic.html">
                        <Link to='/blogs'>Standard</Link> 
                        </a>
                      </li>
                      {/* <li>
                        <a className="sub-link" href="blog-list.html">
                          Blog List
                        </a>
                      </li>
                      <li>
                        <a className="sub-link" href="blog-list2.html">
                          Blog List 2
                        </a>
                      </li>
                      <li>
                        <a className="sub-link" href="blog-details.html">
                          Blog Details
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <a href="/contact" className="link">
                      <span className="fill-text" data-text="Contact Us">
                      <Link to='/contact'>Contact Us</Link>   
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="sub-title mb-15 opacity-7">Address</h6>
                <h5>
                Munshiganj Sadar  <br /> Dhaka , Bangladesh
                </h5>
              </div>
              <div className="item mb-50">
                <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                <ul className="rest social-text">
                 
                  <li className="mb-10">
                    <a href="https://github.com/sumayan7477" target="blank" className="hover-this">
                      <span className="hover-anim">Github</span>
                    </a>
                  </li>
                  <li className="mb-10">
                    <a href="https://www.linkedin.com/in/sumaiya-akter-5b23a7317/" target="blank" className="hover-this">
                      <span className="hover-anim">LinkedIn</span>
                    </a>
                  </li>
                  <li className="mb-10">
                    <a href="https://www.facebook.com/profile.php?id=100091930542877" target="blank" className="hover-this">
                      <span className="hover-anim">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sumaya_islam_747/" target="blank" className="hover-this">
                      <span className="hover-anim">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="item mb-40">
                <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                <h5>
                  <a href="mailto:sumayan7477@gmail.com">sumayan7477@gmail.com</a>
                </h5>
                <h5 className="underline mt-10">
                  <a href="tel:+880 01401446231">+880 01401446231</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homenu;
