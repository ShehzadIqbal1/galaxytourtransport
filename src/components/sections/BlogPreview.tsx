import { BlogCard } from "@/components/sections/BlogCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BlogPost } from "@/lib/types";

export interface BlogPreviewProps {
  eyebrow: string;
  title: string;
  description: string;
  posts: BlogPost[];
  viewAllLabel: string;
  viewAllHref: string;
}

export function BlogPreview({
  eyebrow,
  title,
  description,
  posts,
  viewAllLabel,
  viewAllHref,
}: BlogPreviewProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      className="section-padding bg-charcoal"
      aria-labelledby="blog-preview-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="blog-preview-heading"
          description={description}
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <CtaButton href={viewAllHref} variant="secondary" size="md">
            {viewAllLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
