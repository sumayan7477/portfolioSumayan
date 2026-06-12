import PageHeader from "../components/PageHeader";
import Footer from "../Footer";
import Team from "../HomeMain/Team/Team";

const OurTeam = () => {
    return (
        <div>
            <PageHeader title={" Our Team"} subTitle={"Team"}></PageHeader>
            <Team></Team>
            <Footer></Footer>
            
        </div>
    );
};

export default OurTeam;