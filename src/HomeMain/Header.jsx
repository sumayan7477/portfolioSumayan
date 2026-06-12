import img from "../assets/imgs/works/projects/4/1.jpg";
import bg from "../assets/imgs/header/bg1.jpg";

const Header = () => {
  return (
    <header
      className="main-header bg-img"
      data-background={bg}
      data-overlay-dark="8"
    >
      <div className="container pt-100">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="text mb-100">
              <h4>
              As a MERN stack and full stack web developer, I build dynamic web applications that enhance brands and provide impactful digital solutions for businesses and individuals.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ontop">
        <div className="container">
          <div className="lg-text">
            <div className="d-flex">
              <h6 >MODERN WEB APPLICATION</h6>
              <h6 className="ml-auto">CREATIVE DEVELOPMENT</h6>
            </div>
            <h1>sumaiya islam</h1>
          </div>
        </div>
        <div className="img">
          {/* <img src={img} alt="" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
