import BlogSingle from "./BlogSingle";

const BlogTabs = ({ items }) => {
  return (
    <div className="md-mb80 ">
      {items.map((item) => (
        <BlogSingle key={item._id} item={item}></BlogSingle>
      ))}
    </div>
  );
};

export default BlogTabs;
