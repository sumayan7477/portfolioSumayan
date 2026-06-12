import { Link } from "react-router-dom";
import { IoArrowRedoOutline } from "react-icons/io5";
import SingleBlog from "./SingleBlog";

const blogs = [
  {
    id: 1,
    title: "MathGuru.Academy: Building a Modern Mathematics Learning Platform",
    author: "Sumaiya [mayan]",
    role: "Full-Stack Web Developer | React.js & ASP.NET Core Developer | B.Sc. Mathematics Student | Future AI & Data Science Engineer",
    date: "June 12, 2026",
    description:
      "MathGuru Academy is a comprehensive mathematics learning platform designed to support students, teachers, and academic organizations through interactive learning, assessments, progress tracking, and Olympiad management. Built with modern full-stack architecture and scalable backend systems.",
  },
  {
    id: 2,
    title: "Micro-Frontend Architecture – Scaling Frontend Development!",
    author: "Sumaiya [mayan]",
    role: "Full-Stack Web Developer | React.js & ASP.NET Core Developer | B.Sc. Mathematics Student | Future AI & Data Science Engineer",
    date: "April 20, 2025",
    description:
      "Micro-frontend architecture breaks large frontend applications into smaller independent modules, improving scalability, team productivity, and deployment flexibility. It enables parallel development and better maintainability in large systems.",
  },
];

const Blog = () => {
  const blog2 = [blogs[0], blogs[1]];

  return (
    <section className="blog-list-half section-padding sub-bg">
      <div className="container">
        {/* HEADER */}
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Blog</h6>

          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Read Latest <span className="fw-200">News</span>
              </span>
            </h2>

            <div className="ml-auto">
              <Link to="/blogs" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon">
                  <IoArrowRedoOutline />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BLOG LIST */}
        <div className="row">
          {blog2?.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
