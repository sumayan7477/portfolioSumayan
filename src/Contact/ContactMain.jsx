import PageHeader from "../components/PageHeader";
import Footer from "../Footer";
import Contect from "../HomeStartup/Contect";

const ContactMain = () => {
  return (
    <div>
      <PageHeader title={"Contect Us"} subTitle={"Contect"}></PageHeader>
      <Contect></Contect>
      <Footer></Footer>
    </div>
  );
};

export default ContactMain;
