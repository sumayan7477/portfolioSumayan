import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../Footer";
import AboutMe from "../HomeMain/AboutMe";
import Useaxios from "../Hooks/Useaxios";

const About = () => {
  const axiosPublic = Useaxios();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/skills")
      .then(function (response) {
        setSkills(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <PageHeader title={"About Me"} subTitle={"About"}></PageHeader>
      <AboutMe></AboutMe>
      <div className="my-skills2">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <h6 className="sub-title main-color mb-15">My Portfolio</h6>
          <h2>
            {" "}
            <span className="fw-200">Skills</span>
          </h2>
        </div>
        <div className="row md-marg">
          {skills.map((skill) => (
            <div key={skill._id} className="col-lg-2 col-md-4 col-6">
              <div className="item mb-30">
                <div className="box-bord main-bg">
                  {/* <div className="img">
                    <img src={skillimg} alt="" />
                  </div> */}
                  <span className="value">{skill.percentage}%</span>
                </div>
                <h6 className="fz-18">{skill.skill}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      

      <Footer></Footer>
    </div>
  );
};

export default About;
