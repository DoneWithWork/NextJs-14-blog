import Link from "next/link";
import React, { Suspense } from "react";
import { PostType } from "../../types/PostTypes";
import PostsList from "../components/PostsList";
import Form from "../components/Form";

export default async function PostPage() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </main>
  );
}
