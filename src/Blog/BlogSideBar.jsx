import { FaSearch } from "react-icons/fa";
import { Tab, TabList } from "react-tabs";

const BlogSideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="search-box">
          <input type="text" name="search-post" placeholder="Search" />
          <span className="icon"><FaSearch></FaSearch></span>
        </div>
        <div className="widget catogry">
          <h6 className="title-widget">Categories</h6>
          

          <TabList>
              <Tab>Web Development</Tab>
              <Tab>Front-End Development</Tab>
              <Tab>Full Stack Development</Tab>
              <Tab>Web Design</Tab>
              <Tab>Business Websites</Tab>
            </TabList>
        </div>

        <div className="widget tags">
          <h6 className="title-widget">Tags</h6>
          <div>
            <a href="blog-list.html">Web Development</a>
            <a href="blog-list.html">App Development</a>
            <a href="blog-list.html">React</a>
            <a href="blog-list.html">JavaScript</a>
            <a href="blog-list.html">Jsx</a>
            <a href="blog-list.html">Next js</a>
            <a href="blog-list.html">Express js</a>
            <a href="blog-list.html">Sql NoSql</a>
            <a href="blog-list.html">FireBase</a>
            <a href="blog-list.html">MongoDb</a>
            <a href="blog-list.html">HTML CSS</a>
            <a href="blog-list.html">SASS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
