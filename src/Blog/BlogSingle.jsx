import { IoArrowRedo } from "react-icons/io5";
import blogbg from "../assets/imgs/blog/pattern2.png";
import { Link } from "react-router-dom";

const BlogSingle = ({ item }) => {
  return (
    <div className="item mb-50">
      <div className="img">
        <img src={blogbg} alt="" />
      </div>

      <div className="content main-bg border">
        <div className="d-flex align-items-center mb-15">
          <div className="post-date">{item.date}</div>

          <div className="commt opacity-7 fz-13">
            <span className="ti-comment-alt mr-10"></span>
            4 Comments
          </div>
        </div>

        <h4 className="mb-15">
          <Link to={`/blogsDetails/${item.id}`}>
            {item.title}
          </Link>
        </h4>

        <p>{item.details[0]}</p>

        <div className="d-flex align-items-center mt-40">
          <span className="text mr-15">
            <Link to={`/blogsDetails/${item.id}`}>
              Read More
            </Link>
          </span>

          <span>
            <IoArrowRedo />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;