export default async function BlogPostPage({ params }) {
  // ✅ params is a Promise in Next.js 14+ (App Router)
  const { slug } = await params;

  // You can now safely use slug
  return (
    <article>
      <h1>Blog Post:</h1>
      <p>{slug}</p>
    </article>
  );
}
