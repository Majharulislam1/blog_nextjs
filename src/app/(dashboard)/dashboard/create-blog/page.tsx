import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center min-h-screen mx-auto ">
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default CreateBlog;
