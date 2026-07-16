import type { Metadata } from "next";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogCta, blogIndexCopy, blogPosts } from "@/content/blog";
import { buildBlogIndexMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildBlogIndexMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow={blogIndexCopy.eyebrow}
        titleBefore={blogIndexCopy.titleBefore}
        titleHighlight={blogIndexCopy.titleHighlight}
        description={blogIndexCopy.description}
        breadcrumbs={breadcrumbs}
        whatsappMessage={blogIndexCopy.whatsappMessage}
      />
      <section className="bg-onyx section-padding" aria-label="Blog posts">
        <div className="container-content">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTABand content={blogCta} />
    </>
  );
}
