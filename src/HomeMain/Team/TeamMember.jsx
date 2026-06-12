import t3 from '../../assets/imgs/team/3.jpg';

const TeamMember = () => {
  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="img">
          <img src={t3} alt="" />
          <div className="info">
            <span className="fz-12">Web Designer</span>
            <h6 className="fz-18">Brendan Fraser</h6>
          </div>
        </div>
        <div className="social">
          <div className="links">
            <a href="#0">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#0">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#0">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
