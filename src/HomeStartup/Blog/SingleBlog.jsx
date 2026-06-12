import blog2 from '../../assets/imgs/blog/b/3.jpg';
import auther from '../../assets/imgs/blog/author.png';

const SingleBlog = () => {
    return (
        <div className="col-lg-6">
                                <div className="item main-bg">
                                    <div className="row rest">
                                        <div className="col-lg-6 col-md-5 img rest">
                                            <img src={blog2} alt="" className="img-post"/>
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
                                                    <a href="blog-list.html">Design</a>
                                                </div>
                                                <h5>
                                                    <a href="blog-details.html">Business meeting 2023 in San
                                                        Francisco.</a>
                                                </h5>
                                                <span className="date fz-12 ls1 text-u opacity-7 mt-80">August 6,
                                                    2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default SingleBlog;