
import { FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const FaqPage = () => {
  const faqs = [
    {
      question: "What web development services do you offer?",
      answer:
        "I provide full-stack web development services including React.js, Next.js, Node.js, ASP.NET Core, PHP, MongoDB, MySQL, and SQL Server solutions.",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every website I develop is fully responsive and optimized for desktop, tablet, and mobile devices.",
    },
    {
      question: "Can you convert Figma or XD designs into websites?",
      answer:
        "Absolutely. I can convert Figma, Adobe XD, PSD, or other design files into pixel-perfect, responsive websites.",
    },
    {
      question: "Do you develop e-commerce websites?",
      answer:
        "Yes. I build secure e-commerce platforms with payment gateway integrations such as Stripe and SSLCommerz.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "My primary technologies include React.js, Next.js, Node.js, Express.js, ASP.NET Core, PHP, MongoDB, MySQL, SQL Server, Tailwind CSS, and Bootstrap.",
    },
    {
      question: "Do you provide API development and integration?",
      answer:
        "Yes. I develop custom RESTful APIs and integrate third-party APIs for payment systems, authentication, and external services.",
    },
    {
      question: "Can you fix bugs in existing websites?",
      answer:
        "Yes. I offer debugging, performance optimization, security improvements, and feature enhancements for existing projects.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. I provide ongoing maintenance, updates, security monitoring, and technical support after project delivery.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on complexity. A landing page may take a few days, while a complete web application may require several weeks.",
    },
    {
      question: "How can I start a project with you?",
      answer:
        "Simply contact me with your project requirements. I'll review your needs, discuss the scope, and provide a development plan and quotation.",
    },
  ];

  return (
    <div>
      <PageHeader title="FAQ" subTitle="FAQ" />

      <section className="faqs section-padding position-re">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="sec-head md-mb80">
                <h6 className="sub-title main-color mb-15">FAQS</h6>
                <h2>
                  Frequently <br /> Asked Questions
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="list-serv">
                <div className="accordion bord">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`item mb-15 wow fadeInUp ${
                        index === 0 ? "active" : ""
                      }`}
                      data-wow-delay={`${0.1 * (index + 1)}s`}
                    >
                      <div className="title">
                        <h6>{faq.question}</h6>
                        <FaPlus className="ico" />
                      </div>

                      <div className="accordion-info">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line-overlay up opacity-7">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
