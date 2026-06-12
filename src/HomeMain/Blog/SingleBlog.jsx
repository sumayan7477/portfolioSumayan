import blog2 from "../../assets/imgs/works/1/q4.jpg";
import autherimg from "../../assets/imgs/intro/sumaiya_islam.png";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="col-lg-6">
      <div className="item main-bg">
        <div className="row rest">
          {/* IMAGE */}
          <div className="col-lg-6 col-md-5 img rest">
            <img src={blog2} alt="" className="img-post" />

            <div className="author d-flex align-items-center">
              <div className="fit-img icon-img-50 circle">
                <img src={autherimg} alt="" />
              </div>

              <div className="ml-15 fz-14">
                <span className="opacity-7">Posted by</span>
                <br />
                {blog?.author}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6 col-md-7 cont valign">
            <div className="full-width">
              
              {/* TAGS SAFE */}
              <div className="tags mb-15">
                {blog?.tags?.length > 0
                  ? blog.tags.map((tag, index) => (
                      <a key={index}>{tag}</a>
                    ))
                  : null}
              </div>

              <h5>
                <Link to="/blogs">{blog?.title}</Link>
              </h5>

              <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                {blog?.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;