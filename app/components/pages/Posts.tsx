import Image from "next/legacy/image";
import Link from "next/link";
import { postsQuery } from "@/lib/sanity.query";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiSolidTime, BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import { HiCalendar } from "react-icons/hi";
import { sanityFetch } from "@/lib/sanity.client";
import { readTime } from "@/app/utils/readTime";
import { toPlainText } from "@portabletext/react";

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1692608339/victoreke/blog.png";

export default async function Posts() {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });

  return (
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post._id}>
                asdf
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
