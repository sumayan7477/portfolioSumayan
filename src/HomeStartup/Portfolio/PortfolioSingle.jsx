import work1 from '../../assets/imgs/works/1/1.jpg';

const PortfolioSingle = () => {
  return (
    <div className="cluom mb-30 current" data-tab="tab-1">
      <div className="info">
        <h6 className="sub-title opacity-7">UI-UX Design</h6>
        <h4>Iridescent Wallpapers</h4>
      </div>
      <div className="img">
        <img src={work1} alt="" />
      </div>
      <div className="more text-u ls1 fz-12">
        <a href="project6.html">
          View Project <i className="ml-15 ti-arrow-top-right"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioSingle;
