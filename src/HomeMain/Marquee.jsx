import { useEffect, useState } from "react";
import Useaxios from "../Hooks/Useaxios";

const Marquee = () => {
    const axiosPublic = Useaxios();
    const [services, setServices] = useState([]);
    useEffect(() => {
      axiosPublic
        .get("/services")
        .then(function (response) {
          // console.log(response.data);
          setServices(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    return (
        <section>
                    <div className="main-marq lrg o-hidden">
                        <div className="slide-har st1">
                            <div className="box">
                                {
                                    services.map(service=><div key={service._id} className="item">
                                        <h4 className="d-flex align-items-center"><span>{service.title}</span>
                                            <span className="fz-50 ml-50 stroke icon">*</span>
                                        </h4>
                                    </div>)
                                }
                                
                                
                            </div>
                            
                        </div>
                    </div>
                </section>
    );
};

export default Marquee;