
import { Link } from 'react-router-dom';
import UseBlogs from '../../Hooks/UseBlogs';
import SingleBlog from './SingleBlog';
import { IoArrowRedoOutline } from 'react-icons/io5';


const Blog = () => {
    const [blogs] = UseBlogs();
    const blog2 = [blogs[0],blogs[2]];
    // console.log(blog2);
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
                                    <Link to='/blogs' className="go-more">
                                        <span className="text">View all posts</span>
                                        <span className="icon "><IoArrowRedoOutline /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                blog2.map((blog,index)=><SingleBlog key={index} blog={blog}></SingleBlog>)
                            }
                           
                        </div>
                    </div>
                </section>
    );
};

export default Blog;