import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Chip } from "@/components/ui/Chip";
import { blogCta } from "@/content/blog";
import { getRouteBySlug } from "@/content/routes";
import type { BlogPost, BreadcrumbItem } from "@/lib/types";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match = regex.exec(text);
  let key = 0;

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(
        <strong key={key} className="font-semibold text-ivory">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const label = match[2];
      const href = match[3];
      if (label && href) {
        nodes.push(
          <Link
            key={key}
            href={href}
            className="text-gold transition-default hover:text-gold-bright"
          >
            {label}
          </Link>,
        );
      }
    }

    key += 1;
    lastIndex = match.index + token.length;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export interface BlogPostProps {
  post: BlogPost;
  breadcrumbs: BreadcrumbItem[];
}

export function BlogPostLayout({ post, breadcrumbs }: BlogPostProps) {
  const date = new Intl.DateTimeFormat("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.publishedAt));

  const blocks = post.body.trim().split(/\n\n+/);
  const relatedRoutes = (post.relatedRouteSlugs ?? [])
    .map((slug) => getRouteBySlug(slug))
    .filter((route): route is NonNullable<typeof route> => Boolean(route));

  return (
    <>
      <div className="relative h-56 w-full md:h-72 lg:h-80">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/20" />
      </div>

      <article className="bg-onyx pb-4 text-ivory">
        <div className="container-content relative -mt-16 md:-mt-20">
          <div className="rounded-lg border border-gold/20 bg-gradient-to-br from-charcoal via-charcoal2 to-onyx p-6 shadow-card md:p-8 lg:p-10">
            <Breadcrumbs
              items={breadcrumbs}
              className="mb-6 text-ivory/55 [&_a:hover]:text-gold-bright [&_span[aria-current]]:text-ivory"
            />

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Travel notes · {post.readingTimeMinutes} min read
                </p>
                <h1 className="mt-3 font-display text-3xl leading-tight text-ivory md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-2 text-sm text-ivory/55">{date}</p>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/75">
                  {post.description}
                </p>

                <div className="mt-10 space-y-5 border-t border-ivory/10 pt-8 text-base leading-relaxed text-ivory/80 md:text-lg">
                  {blocks.map((block, index) => {
                    if (block.startsWith("## ")) {
                      return (
                        <h2
                          key={index}
                          className="pt-4 font-display text-2xl text-ivory"
                        >
                          {block.replace(/^##\s+/, "")}
                        </h2>
                      );
                    }
                    if (block.startsWith("- ")) {
                      const items = block.split("\n").filter(Boolean);
                      return (
                        <ul key={index} className="list-disc space-y-2 pl-5">
                          {items.map((item) => (
                            <li key={item}>
                              {renderInline(item.replace(/^-\s*/, ""))}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index}>{renderInline(block)}</p>;
                  })}
                </div>

                <p className="mt-10 text-sm text-ivory/50">
                  <Link
                    href="/blog"
                    className="font-medium text-gold transition-default hover:text-gold-bright"
                  >
                    ← All travel notes
                  </Link>
                </p>
              </div>

              <aside className="space-y-5 lg:sticky lg:top-28">
                {post.keywords.length > 0 ? (
                  <div className="rounded-md border border-gold/20 bg-onyx/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Topics
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {post.keywords.map((keyword) => (
                        <li key={keyword}>
                          <Chip>{keyword}</Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {relatedRoutes.length > 0 ? (
                  <div className="rounded-md border border-gold/25 bg-onyx/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Related corridors
                    </p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {relatedRoutes.map((route) => (
                        <li key={route.slug}>
                          <Link
                            href={`/routes/${route.slug}`}
                            className="block rounded-md border border-ivory/15 bg-charcoal2 px-3 py-2.5 text-sm text-ivory/85 transition-default hover:border-gold/40 hover:text-gold-bright"
                          >
                            {route.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </div>
      </article>

      <CTABand content={blogCta} />
    </>
  );
}
