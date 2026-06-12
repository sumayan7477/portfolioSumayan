// import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BlogSideBar from "./BlogSideBar";
import { useState } from "react";
import UseBlogs from "../Hooks/UseBlogs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BlogTabs from "./BlogTabs";

const BlogStanderd = () => {
  // const catagories = [
  //   "Web Development",
  //   "Full Stack Development",
  //   "Front-End Development",
  //   "Web Design",
  //   "Business Websites",
  // ];
  // const { category } = useParams();
  // const initialIndex = catagories.indexOf(category);
  const [tavIndex, setTabIndex] = useState(0);
  const [blogs] = UseBlogs();
  // console.log(blogs);

  

  const web_development = blogs.filter(
    (blog) => blog.category === "Web Development"
  );
  const Front_End_Development = blogs.filter((blog) => blog.category === "Front-End Development");
  const Full_Stack_Development = blogs.filter((blog) => blog.category === "Full Stack Development");
  const Web_Design = blogs.filter((blog) => blog.category === "Web Design");
  const Business_Websites = blogs.filter((blog) => blog.category === "Business Websites");

  console.log(web_development, Front_End_Development , Full_Stack_Development, Web_Design, Business_Websites)

  return (
    <>
      <PageHeader title={"Blogs"} subTitle={"Blogs"}></PageHeader>
      <section className="blog-main section-padding">
        <div className="container">
          <Tabs
            defaultIndex={tavIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="row lg-marg justify-content-around">
              <div className="col-lg-7">
                <TabList className={"d-none"}>
                  <Tab>tab 1</Tab>
                  <Tab>tab 2</Tab>
                  <Tab>tab 2</Tab>
                  <Tab>tab 2</Tab>
                  <Tab>tab 2</Tab>
                </TabList>

                <TabPanel>
                  <BlogTabs items={web_development}></BlogTabs>
                </TabPanel>
                <TabPanel>
                  <BlogTabs items={Front_End_Development}></BlogTabs>
                </TabPanel>
                <TabPanel>
                  <BlogTabs items={Full_Stack_Development}></BlogTabs>
                </TabPanel>
                <TabPanel>
                  <BlogTabs items={Web_Design}></BlogTabs>
                </TabPanel>
                <TabPanel>
                  <BlogTabs items={Business_Websites}></BlogTabs>
                </TabPanel>
              </div>

              <BlogSideBar></BlogSideBar>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default BlogStanderd;
