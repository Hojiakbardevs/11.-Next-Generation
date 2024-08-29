import Blog1 from "@/assets/Blog1.png";
import Blog2 from "@/assets/blog2.png";
import Blog3 from "@/assets/Blog3.png";

const Blogs = [
    Blog1,
    Blog2,
    Blog3,
]

export const BlogPage = () => {
  return (
    <div className="container">
        <h1 className="text-3xl mt-16 mb-4">Blog 🎓 <span className="text-neutral-400">What’s new?</span></h1>
        <div className="flex gap-10 justify-center items-center flex-wrap">
            {Blogs.map((blog, index) => (
                <img src={blog} alt={`Blog ${index + 1}`} />
            ))}
        </div>
    </div>
  )
}
