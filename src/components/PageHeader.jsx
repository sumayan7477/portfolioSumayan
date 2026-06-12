import { Link } from "react-router-dom";
import bg from '../assets/imgs/header/bg1.jpg';

const PageHeader = ({title , subTitle}) => {
  return (
    <header
      className="page-header bg-img section-padding p-5"
      data-background={bg}
      data-overlay-dark="9"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1>{title}</h1>
          <div className="mt-15">
            <Link to='/'>Home</Link>
            <span className="padding-rl-20">|</span>
            <span className="main-color">{subTitle}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
