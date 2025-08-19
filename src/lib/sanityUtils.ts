import { sanityClient } from './sanityClient'

// Fetch a single post by slug
export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    "tags": categories[]->title,
    "content": body
  }`;

  try {
    const result = await sanityClient.fetch(query, { slug });
    if (!result) throw new Error(`No post found for slug: ${slug}`);
    return result;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// Fetch all blog posts
export async function getPosts() {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "excerpt": body[0].children[0].text,
    "tags": categories[]->title
  }`;

  return await sanityClient.fetch(query);
}