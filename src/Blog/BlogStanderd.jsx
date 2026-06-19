import PageHeader from "../components/PageHeader";
import BlogSideBar from "./BlogSideBar";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BlogTabs from "./BlogTabs";
import blogsData from "../data/blogsData";


const BlogStanderd = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // ✅ STATIC BLOG DATA
  const blogs =blogsData;

  // ✅ FILTERING BY CATEGORY
  const web_development = blogs.filter(
    (b) => b.category === "Web Development"
  );

  const front_end = blogs.filter(
    (b) => b.category === "Front-End Development"
  );

  const full_stack = blogs.filter(
    (b) => b.category === "Full Stack Development"
  );

  const web_design = blogs.filter(
    (b) => b.category === "Web Design"
  );

  const business = blogs.filter(
    (b) => b.category === "Business Websites"
  );

  return (
    <>
      <PageHeader title={"Blogs"} subTitle={"Blogs"} />

      <section className="blog-main section-padding">
        <div className="container">
          <Tabs defaultIndex={tabIndex} onSelect={(i) => setTabIndex(i)}>
            <div className="row lg-marg justify-content-around">
              <div className="col-lg-7">
                <TabList className="d-none">
                  <Tab>Web</Tab>
                  <Tab>Front</Tab>
                  <Tab>Full</Tab>
                  <Tab>Design</Tab>
                  <Tab>Business</Tab>
                </TabList>

                <TabPanel>
                  <BlogTabs items={web_development} />
                </TabPanel>

                <TabPanel>
                  <BlogTabs items={front_end} />
                </TabPanel>

                <TabPanel>
                  <BlogTabs items={full_stack} />
                </TabPanel>

                <TabPanel>
                  <BlogTabs items={web_design} />
                </TabPanel>

                <TabPanel>
                  <BlogTabs items={business} />
                </TabPanel>
              </div>

              <BlogSideBar />
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default BlogStanderd;