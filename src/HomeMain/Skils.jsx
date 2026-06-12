import { useEffect, useState } from "react";
// import skillimg from "../assets/imgs/resume/s2.png";
import Useaxios from "../Hooks/Useaxios";
const Skils = () => {
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
    <section
        className="about-crev section-padding sub-bg position-re ontop"
        data-scroll-index="4"
      >
        <div className="container">
          <div className="row lg-marg">
            <div className=" valign">
              <div className="content full-width">
                <div className="sec-head mb-30">
                  <h6 className="sub-title mb-15 main-color">The ultmiate Solution of web development. </h6>
                  <h2>Skills</h2>
                </div>
                <div className="row justify-content-end">
                  <div >
                    <div className="mt-50">
                      <div className=" row skills-box">
                        {
                          skills.map(skill=>(<div key={skill._id} className="col-lg-6 skill-item mb-40">
                            <h5 className="sub-title mb-15">{skill.skill}</h5>
                            <div className="skill-progress">
                              <div className="progres" data-value={`${skill.percentage}%`}></div>
                            </div>
                          </div>))
                        }
                        
                        
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skils;
