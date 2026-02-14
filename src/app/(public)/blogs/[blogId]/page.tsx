/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";


// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts')  

//   return posts.map((post) => ({

//   }))
// }

// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/post`);
//     const blogs = await res.json();

//     return blogs?.posts?.data.map((blog: any) => {
//         blogId: String(blog.id);
//     })
// }


export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const blogId = (await params).blogId;
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/post/${blogId}`);
    const blogs = await res.json();

   return {
     title:blogs.data.title
   }
}




const BlogDetailsPage = async ({ params, }: { params: Promise<{ blogId: string }> }) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/post/${(await params).blogId}`);
    const blogs = await res.json();


    return (
        <div>
            <BlogDetailsCard key={blogs?.data?.id} blog={blogs?.data} />
        </div>
    );
};

export default BlogDetailsPage;