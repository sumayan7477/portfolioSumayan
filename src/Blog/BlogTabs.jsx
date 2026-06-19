import BlogSingle from "./BlogSingle";

const BlogTabs = ({ items }) => {
  return (
    <div className="md-mb80">
      {items.map((item) => (
        <BlogSingle
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default BlogTabs;