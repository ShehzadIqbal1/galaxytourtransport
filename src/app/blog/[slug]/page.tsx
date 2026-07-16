import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/sections/BlogPost";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/content/blog";
import { buildBlogPostMetadata } from "@/lib/metadata";
import {
  buildBlogPostingSchema,
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }
  return buildBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
          buildBlogPostingSchema(post),
        ]}
      />
      <BlogPostLayout post={post} breadcrumbs={breadcrumbs} />
    </>
  );
}
