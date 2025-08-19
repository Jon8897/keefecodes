import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "@/lib/sanityUtils";
import PageLayout from "@/components/PageLayout";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { PortableTextComponents, PortableTextTypeComponentProps } from "@portabletext/react";

const components: PortableTextComponents = {
  types: {
    code: ({ value }: PortableTextTypeComponentProps<{ code: string }>) => (
      <pre className="bg-muted text-sm font-mono p-4 rounded mb-4 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

type Post = {
  _id: string;
  title: string;
  content: PortableTextBlock[];
  publishedAt: string;
  tags: string[];
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        console.log("Fetched post:", data);
        setPost(data);
      });
    }
  }, [slug]);

  if (!post) return <PageLayout>Loading or post not found...</PageLayout>;

  return (
    <PageLayout>
      <div className="pt-20 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <time>
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
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
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-md prose dark:prose-invert max-w-none">
          {post.content && post.content.length > 0 ? (
            <PortableText value={post.content} components={components} />
          ) : (
            <p>No content found for this post.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostPage;