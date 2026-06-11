import { blogs } from "../../../../data/blog"

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { category, slug } = await params;

  const blog = blogs.find(
    (blog) =>
      blog.category === category &&
      blog.slug === slug
  );

  if (!blog) {
    return <h1>Blog not found!</h1>;
  }

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold">
        {blog.title}
      </h1>

      <p className="mt-4 text-gray-700">
        {blog.content}
      </p>
    </div>
  );
}