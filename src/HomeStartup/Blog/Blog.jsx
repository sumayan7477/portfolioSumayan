import blog1 from '../../assets/imgs/blog/b/2.jpg';
import auther from '../../assets/imgs/blog/author.png';
import SingleBlog from './SingleBlog';


const Blog = () => {
    return (
        <section className="blog-list-half section-padding sub-bg">
                    <div className="container">
                        <div className="sec-head mb-80">
                            <h6 className="sub-title main-color mb-25">Our Blog</h6>
                            <div className="bord pt-25 bord-thin-top d-flex align-items-center">
                                <h2 className="fw-600 d-rotate wow">
                                    <span className="rotate-text">Read Latest <span className="fw-200">News</span></span>
                                </h2>
                                <div className="ml-auto">
                                    <a href="blog-list2.html" className="go-more">
                                        <span className="text">View all posts</span>
                                        <span className="icon ti-arrow-top-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="item main-bg md-mb50">
                                    <div className="row rest">
                                        <div className="col-lg-6 col-md-5 img rest">
                                            <img src={blog1} alt="" className="img-post"/>
                                            <div className="author d-flex align-items-center">
                                                <div>
                                                    <div className="fit-img icon-img-50 circle">
                                                        <img src={auther} alt=""/>
                                                    </div>
                                                </div>
                                                <div className="ml-15 fz-14">
                                                    <div><span className="opacity-7">Posted by</span><br/>UI-ThemeZ</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7 cont valign">
                                            <div className="full-width">
                                                <div className="tags mb-15">
                                                    <a href="blog-list.html">Marketing</a>
                                                </div>
                                                <h5>
                                                    <a href="blog-details.html">Free advertising for your online
                                                        business.</a>
                                                </h5>
                                                <span className="date fz-12 ls1 text-u opacity-7 mt-80">August 6,
                                                    2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SingleBlog></SingleBlog>
                        </div>
                    </div>
                </section>
    );
};

export default Blog;