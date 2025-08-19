import { useEffect, useState } from "react";
import { getPosts } from "@/lib/sanityUtils";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

type Post = {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
  tags: string[];
};

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      console.log("Fetched posts:", data);
      setBlogPosts(data);
    });
  }, []);

  return (
    <PageLayout>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Tech Blog</h1>
            <p className="text-xl text-muted-foreground">
              Weekly reflections, technical findings, and project updates
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post._id}
                className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-muted-foreground">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })
                      : "Unknown date"}
                  </time>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-4 hover:text-primary cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:underline font-semibold"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;