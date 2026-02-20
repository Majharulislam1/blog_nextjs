'use server'

import { redirect } from "next/navigation";



export const create = async (data: FormData) => {


    const blogInfo = Object.fromEntries(data.entries());

    const modifiedData = {
        title: blogInfo.title,
        content: blogInfo.content,
        thumbnail: blogInfo.thumbnail,
        isFeatured: blogInfo.isFeatured === "true",
        authorId: 1,
        tags: blogInfo.tags.toString().split(',').map((tag) => tag.trim())

    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/post/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
    });

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    const result = await res.json();

    if (result) {
        redirect('/blogs')
    }

    return result



}