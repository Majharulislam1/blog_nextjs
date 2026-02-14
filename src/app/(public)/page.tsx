/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/post`);
  const blogs = await res.json();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>


      <div className="grid grid-cols-3 max-w-6xl mx-auto gap-4 py-10">
        {
          blogs?.posts?.data.slice(0, 3).map((post: any) => (<BlogCard key={post.id} post={post} />))
        }
      </div>

    </div>
  );
}
