import About from "./About";
import About2 from "./About2";
import Blog from "./Blog/Blog";
import Contect from "./Contect";
import Footer from "./Footer";
import Header from "./Header";
import ImageScroll from "./ImageScroll";
import Marquee from "./Marquee";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./Service/Service";

const ContentAll = () => {
  return (
    <div id="smooth-content">
      <main className="main-bg">
        <Header></Header>
        <Service></Service>
        <About></About>
        <Marquee></Marquee>
        <Portfolio></Portfolio>
        <ImageScroll></ImageScroll>
        <About2></About2>
        <Blog></Blog>
        <Contect></Contect>
        
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ContentAll;
