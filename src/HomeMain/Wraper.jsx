import Footer from "../Footer";
import Main from "./Main";

const Wraper = () => {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
            <Main></Main>
            <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Wraper;
