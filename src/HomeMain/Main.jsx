import AboutMe from "./AboutMe";
import Blog from "./Blog/Blog";
// import Clients from "./Clients";
import Header from "./Header";
// import Intro from "./Intro";
import Marquee from "./Marquee";
import Portfolio from "./Portfolio";
// import Service from "./Service";
import Services from "./Services/Services";
import Skils from "./Skils";
import Team from "./Team/Team";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main className="main-bg o-hidden">
      <Header></Header>
      {/* <Intro></Intro> */}
      <AboutMe></AboutMe>
      {/* <Service></Service> */}
      <Skils></Skils>
      <Services></Services>
      <Marquee></Marquee>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Team></Team>
      <Blog></Blog>
      {/* <Clients></Clients> */}
    </main>
  );
};

export default Main;
//git add .
//git commit -m "second commit"
//git push origin main