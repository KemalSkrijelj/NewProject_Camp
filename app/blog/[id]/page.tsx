import { GetSinglePostResponse } from "@/app/lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";

async function GetBlogPostById(
  id: string
): Promise<GetSinglePostResponse | undefined> {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    return undefined;
  }

  return response.json();
}

async function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const post = await GetBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="h-full overflow-hidden w-screen">
      <h1 className="text-4xl text-center my-5">{post.title}</h1>
      <div className="flex items-center justify-center">
        <Image
          src={`https://picsum.photos/seed/${post.id}/1000/500`}
          alt="Cover Page"
          width={1000}
          height={500}
        />
      </div>
      <p className="text-lg font-light text-center px-4 my-3">{post.body}</p>
      <div className="text-center">
        <p className="text-gray-800">User ID: {post.userId}</p>
        <p className="text-gray-800">Views: {post.views ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default PostPage;
