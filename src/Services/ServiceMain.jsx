import PageHeader from "../components/PageHeader";
import Footer from "../Footer";
import Service from "../HomeStartup/Service/Service";

const ServiceMain = () => {
    return (
        <div>
            <PageHeader title={"Services"} subTitle={"Services"}></PageHeader>
            <Service></Service>
            <Footer></Footer>

            
        </div>
    );
};

export default ServiceMain;