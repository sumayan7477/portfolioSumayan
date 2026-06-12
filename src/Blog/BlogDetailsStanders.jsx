import { FaComment, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import reviewimage from "../assets/imgs/serv-icons/6.png";
import authorimg from "../assets/imgs/intro/sumaiya_islam.png";

import { useLoaderData } from "react-router-dom";
const BlogDetailsStanders = () => {
  const { title, date, tags, details, reference, author, category, comments } =
    useLoaderData();
  return (
    <>
      <header className="blog-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="caption">
                <div className="sub-title fz-12">
                  {tags.map((tag, index) => (
                    <a key={index}>
                      <span className="me-1">{tag}</span>
                    </a>
                  ))}
                </div>
                <h1 className="fz-55 mt-30">{title}</h1>
              </div>
              <div className="info d-flex mt-40 align-items-center">
                <div className="left-info">
                  <div className="d-flex align-items-center">
                    <div className="author-info">
                      <div className="d-flex align-items-center">
                        <a href="#0" className="circle-60">
                          <img src={authorimg} alt="" className="circle-img" />
                        </a>
                        <a href="#0" className="ml-20">
                          <span className="opacity-7">Author</span>
                          <h6 className="fz-16">{author}</h6>
                        </a>
                      </div>
                    </div>
                    <div className="date ml-50">
                      <a href="#0">
                        <span className="opacity-7">Published</span>
                        <h6 className="fz-16">{date}</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-info ml-auto">
                  <div>
                    <span className=" fz-18 mr-10">
                      <FaComment></FaComment>
                    </span>
                    <span className="opacity-7">
                      {comments.length} Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ==================== Start Blog ==================== --> */}

      <section className="blog section-padding">
        <div className="container">
          <div className="row xlg-marg">
            <div className="col-lg-8">
              <div className="main-post">
                <div className="item pb-60">
                  <article>
                    <div className="text">
                      <p>
                        <span className="spec-letter">Q</span> {details[0]}
                      </p>
                    </div>
                    <div className="text">
                      <p>{details[1]}</p>
                    </div>
                    <div className="title mt-30">
                      <h4>{title}</h4>
                    </div>
                    <div className="text mt-20">
                      <p>{details[2]}</p>
                    </div>
                  </article>

                  <div className="post-qoute mt-50">
                    <h6 className="fz-20">
                      <span className="l-block">{reference}</span>
                      <span className="sub-title mt-20 mb-0"> Reference</span>
                    </h6>
                  </div>

                  <div className="text mb-20">
                    <p>{details[3]}</p>
                  </div>

                  <div className="text">
                    <p>{details[4]}</p>
                  </div>
                </div>
                <div className="info-area flex pt-50 bord-thin-top">
                  <div className="ml-auto">
                    <div className="share-icon flex">
                      <div className="valign">
                        <span>Share :</span>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/" target="blank">
                          <FaFacebook></FaFacebook>
                        </a>
                        <a href="https://www.twitter.com/" target="blank">
                          <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.youtube.com/" target="blank">
                          <FaLinkedin></FaLinkedin>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {comments.map((comment, index) => (
                    <div key={index} className="author-area mt-50 bord-thin-bottom">
                    <div  className="flex">
                          <div className="author-img mr-30">
                            <div className="img">
                              <img src={reviewimage} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="cont valign">
                            <div className="full-width">
                              <h6 className="fw-600 mb-10">{comment.user}</h6>
                              <p>
                               {comment.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  ))}
                
              </div>
              <div className="comments-from mt-80">
                <div className="mb-60">
                  <h3>Leave a comment</h3>
                </div>
                <form
                  id="contact-form"
                  method="post"
                  action="https://ui-themez.smartinnovates.net/items/infolio/Infolio/contact.php"
                >
                  <div className="messages"></div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <div className="mt-30">
                          <button type="submit">
                            <span className="text">Post Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search"></span>
                </div>
                <div className="widget catogry">
                  <h6 className="title-widget">Category</h6>
                  <ul className="rest">
                    <li>
                      <span>
                        <a>{category}</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="widget tags">
                  <h6 className="title-widget">Tags</h6>
                  <div>
                    {tags.map((tag, index) => (
                      <a key={index}>
                        <span>{tag}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==================== End Blog ==================== --> */}
    </>
  );
};

export default BlogDetailsStanders;
