const Marquee = () => {
  const services = [
    { id: 1, title: "Frontend Development" },
    { id: 2, title: "Full Stack Development" },
    { id: 3, title: "API Development" },
    { id: 4, title: "E-Commerce Solutions" },
    { id: 5, title: "Database Design" },
    { id: 6, title: "Website Maintenance" },
  ];

  return (
    <section>
      <div className="main-marq lrg o-hidden">
        <div className="slide-har st1">
          <div className="box">
            {services.map((service) => (
              <div key={service.id} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{service.title}</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;