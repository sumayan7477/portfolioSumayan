import { Link } from "react-router-dom";
import logo from "../src/assets/imgs/logo-light.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container">
        <a className="logo icon-img-100" >
        <Link to='/'><img src={logo} alt="logo" /></Link> 
        </a>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text"><Link to='/'>Home</Link></span>
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" >
                  Main Home
                </a>

                <NavLink className="dropdown-item" to="/startup">
                  Modern Startup
                </NavLink>

                <a className="dropdown-item" >
                  Creative Agency
                </a>
                <a className="dropdown-item" >
                  Modern Agency
                </a>
                <a
                  className="dropdown-item"
                  "
                >
                  Creative Portfolio
                </a>
                <a className="dropdown-item" >
                  Digital Agency
                </a>
                <a className="dropdown-item" >
                  Freelancer
                </a>
                <a className="dropdown-item" >
                  Personal vCard
                </a>
                <a className="dropdown-item" >
                  Minimal Portfolio
                </a>
                <a
                  className="dropdown-item"
                  "
                >
                  Asymmetric Portfolio
                </a>
              </div> */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text"><Link className="link" to='/portfolio'>Portfolio</Link></span>
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="clumn mb-80">
                        <div className="title">
                          <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                            Portfolio Type
                          </h6>
                        </div>
                        <div className="links row">
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Standerd
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Gallery
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Metro
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Masonry
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Caption Cursor
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Outline
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Parallax
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Sticky
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                            Showcases
                          </h6>
                        </div>
                        <div className="links row">
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Parallax Slider
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Showcase Carousel
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Creative Slider
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Interactive Full
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a
                              className="dropdown-item"
                              "
                            >
                              Interactive Center
                            </a>
                            <a
                              className="dropdown-item"
                              "
                            >
                              Interactive Vertical
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                            Portfolio Single
                          </h6>
                        </div>
                        <div className="links row">
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                              <Link to='https://bistro-boss-badcf.web.app/' target="blank">Restaurant</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://bistro-boss-badcf.web.app/' target="blank">Business</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                           <Link to='https://webfxfirm.com' target="blank">webfxfirm</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://shafiqeduhub.com/' target="blank">Portfolio</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/mailarWeb/' target="blank">mailar</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/pinwheel/' target="blank">Pinwheel</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/SaaSLandingPage/' target="blank">SaaS Landing Page</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/personal-cv-websit' target="blank">Personal Cv</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/OnlineShop/' target="blank">Online Shop</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/daycare-website' target="blank">Daycare</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/EducationalPlatform/' target="blank">Educational Platform</Link> 
                            </a>
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/CryptoCoin/' target="blank">CryptoCoin</Link> 
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a className="dropdown-item" >
                            <Link to='https://sumayan7477.github.io/Photozone/' target="blank">Photozone</Link> 
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Pages</span>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a >
                   <Link  to='/about'>About</Link> 
                     {/* <i className="fas fa-angle-right icon-arrow"></i> */}
                  </a>
                  {/* <ul className="dropdown-side">
                    <li>
                      <a className="dropdown-item" >
                        About Us 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        About Us 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        About Us 3
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="dropdown-item">
                  <a >
                   <Link to='/service'>Services</Link>  
                    {/* <i className="fas fa-angle-right icon-arrow"></i> */}
                  </a>
                  {/* <ul className="dropdown-side">
                    <li>
                      <a className="dropdown-item" >
                        Services 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Services 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        "
                      >
                        Services Details
                      </a>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="dropdown-item">
                  <a >
                    Contact Us <i className="fas fa-angle-right icon-arrow"></i>
                  </a>
                  <ul className="dropdown-side">
                    <li>
                      <a className="dropdown-item" >
                        Contact Us 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Contact Us 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" >
                        Contact Us 3
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <a className="dropdown-item" >
                   <Link to='/ourTeam'>My Team</Link> 
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" >
                    Team Details
                  </a>
                </li> */}
                <li>
                  <a className="dropdown-item" >
                  <Link to='/faq'>FAQS</Link> 
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" >
                    Error 404
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text"><Link to='/blogs'></Link> Blogs</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" >
                <Link to='/blogs'>Blog Standerd</Link> 
                </a>
                {/* <a className="dropdown-item" >
                  Blog List
                </a>
                <a className="dropdown-item" >
                  Blog List 2
                </a> */}
                {/* <a className="dropdown-item" >
                <Link to='/blogsDetails'>Blog Details</Link> 
                </a> */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <span className="rolling-text"> <Link to='/contact'>Contact Us</Link></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />

            <button>
             
              <IoSearchOutline />
            </button>
          </div>
          <div className="search-icon">
            
            <IoSearchOutline className=" open-search" />
            <MdOutlineClose className="close-search" />
            <span className=" close-search"><MdOutlineClose></MdOutlineClose></span>
          </div>
        </div>
        <div className="topnav">
          <div className="menu-icon cursor-pointer">
            <span className="icon "><TiThMenu /></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
