import UpvoteBtn from "@/app/components/UpvoteBtn";
import { PostType } from "@/types/PostTypes";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-3xl md:text-5-xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <UpvoteBtn />
    </main>
  );
}
