import { useEffect, useState } from "react";
// import skillimg from "../assets/imgs/resume/s2.png";
import Useaxios from "../Hooks/Useaxios";
const Skils = () => {
  // const axiosPublic = Useaxios();
  // const [skills, setSkills] = useState([]);
  // useEffect(() => {
  //   axiosPublic
  //     .get("/skills")
  //     .then(function (response) {
  //       setSkills(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  const skills = [
    { _id: 1, skill: "React.js", percentage: 95 },
    { _id: 2, skill: "ASP.NET Core", percentage: 95 },
    // { _id: 3, skill: "HTML5", percentage: 98 },
    // { _id: 4, skill: "CSS3 / SCSS", percentage: 95 },
    { _id: 5, skill: "JavaScript (ES6+)", percentage: 95 },
    { _id: 6, skill: "Bootstrap 5", percentage: 95 },
    // { _id: 7, skill: "Node.js", percentage: 85 },
    { _id: 8, skill: "Express.js", percentage: 85 },
    { _id: 9, skill: "Tailwind CSS", percentage: 80 },
    { _id: 10, skill: "C#", percentage: 80 },
    { _id: 11, skill: "MongoDB", percentage: 85 },
    { _id: 12, skill: "SQL Server", percentage: 80 },
    { _id: 13, skill: "MySQL", percentage: 85 },
    { _id: 14, skill: "REST API Development", percentage: 90 },
    { _id: 15, skill: "JWT Authentication", percentage: 85 },
    { _id: 16, skill: "Git & GitHub", percentage: 90 },
    { _id: 17, skill: "Firebase", percentage: 85 },
    { _id: 18, skill: "Stripe Integration", percentage: 80 },
    { _id: 19, skill: "SSLCommerz Integration", percentage: 85 },
    { _id: 20, skill: "Responsive Web Design", percentage: 95 },
  ];

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
