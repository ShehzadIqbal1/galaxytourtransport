import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/lib/types";

export interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Intl.DateTimeFormat("en-AE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <Card className="h-full overflow-hidden border-gold/20 bg-charcoal2 transition-default hover:border-gold/45 hover:shadow-card-hover">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/15">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-default group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ivory/50">
            {date} · {post.readingTimeMinutes} min read
          </p>
          <h2 className="mt-3 font-display text-xl leading-snug text-ivory transition-default group-hover:text-gold-bright md:text-2xl">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ivory/65 md:text-base">
            {post.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
            Read guide
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </Card>
  );
}
