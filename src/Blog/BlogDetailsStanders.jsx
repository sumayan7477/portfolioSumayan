import {
  FaComment,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import reviewimage from "../assets/imgs/serv-icons/6.png";
import authorimg from "../assets/imgs/intro/sumaiya_islam.png";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import blogsData from "../data/blogsData";


const BlogDetailsStanders = () => {
  const { id } = useParams();

  // ✅ STATIC DATA (same as BlogStanderd.jsx)
  const blogs = blogsData;

  // ✅ FIND BLOG
  const blog = blogs.find((item) => item.id === id);

  // ⚠️ SAFE CHECK (IMPORTANT FIX)
  if (!blog) {
    return (
      <div className="container py-5">
        <h2>Blog not found</h2>
        <p>Please check the URL or go back to blogs page.</p>
      </div>
    );
  }

  const {
    title,
    date,
    tags,
    details,
    reference,
    author,
    category,
    comments,
  } = blog;

  return (
    <>
      <PageHeader title={title} subTitle={"Blog Details"} />

      {/* HEADER */}
      <header className="blog-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="caption">
                <div className="sub-title fz-12">
                  {tags.map((tag, index) => (
                    <span key={index} className="me-2">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="fz-55 mt-30">{title}</h1>
              </div>

              <div className="info d-flex mt-40 align-items-center">
                <div className="left-info">
                  <div className="d-flex align-items-center">
                    <div className="author-info">
                      <div className="d-flex align-items-center">
                        <img
                          src={authorimg}
                          alt=""
                          className="circle-60 circle-img"
                        />

                        <div className="ml-20">
                          <span className="opacity-7">Author</span>
                          <h6 className="fz-16">{author}</h6>
                        </div>
                      </div>
                    </div>

                    <div className="date ml-50">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">{date}</h6>
                    </div>
                  </div>
                </div>

                <div className="right-info ml-auto">
                  <FaComment />
                  <span className="opacity-7 ml-10">
                    {comments.length} Comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="blog section-padding">
        <div className="container">
          <div className="row xlg-marg">
            <div className="col-lg-8">
              <article className="main-post pb-60">
                <p>
                  <span className="spec-letter">Q</span> {details[0]}
                </p>

                <p>{details[1]}</p>

                <h4 className="mt-30">{title}</h4>

                <p className="mt-20">{details[2]}</p>

                <div className="post-qoute mt-50">
                  <h6 className="fz-20">{reference}</h6>
                  <span className="sub-title">Reference</span>
                </div>

                <p className="mt-20">{details[3]}</p>
                <p>{details[4]}</p>
              </article>

              {/* COMMENTS */}
              {/* {comments.map((c, i) => (
                <div key={i} className="author-area mt-50 bord-thin-bottom">
                  <div className="flex">
                    <img
                      src={reviewimage}
                      className="circle-img mr-30"
                      alt=""
                    />
                    <div>
                      <h6>{c.user}</h6>
                      <p>{c.comment}</p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget catogry">
                  <h6>Category</h6>
                  <span>{category}</span>
                </div>

                <div className="widget tags">
                  <h6>Tags</h6>
                  <div>
                    {tags.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsStanders;