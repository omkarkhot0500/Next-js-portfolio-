import Link from "next/link";
import Image from "next/legacy/image";
import { postsQuery } from "@/lib/sanity.query";
import type { PostType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";

export default async function FeaturedPosts({ params }: { params?: string }) {
  const featuredPosts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`mb-4 ${
              post.slug === params ? "hidden" : "flex lg:flex-row flex-col"
            }`}
          >
            
          </article>
        )
      )}
    </>
  );
}
