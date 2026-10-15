import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resourcePostMap, resourcePosts } from "@/lib/resources";
import styles from "../page.module.css";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = resourcePostMap[slug];

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://tintitpro.ca/resources/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Tint It Pro`,
      description: post.description,
      url: `https://tintitpro.ca/resources/${post.slug}`,
      siteName: "Tint It Pro",
      locale: "en_CA",
      type: "article",
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      authors: ["Tint It Pro"],
    },
  };
}

export default async function ResourceArticlePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const post = resourcePostMap[slug];

  if (!post) notFound();

  const articleUrl = `https://tintitpro.ca/resources/${post.slug}`;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.description,
    url: articleUrl,
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime,
    inLanguage: "en-CA",
    author: { "@id": "https://tintitpro.ca/#business" },
    publisher: { "@id": "https://tintitpro.ca/#business" },
    mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
    keywords: post.keywords,
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${articleUrl}#faq`,
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleStructuredData, faqStructuredData]).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <article className={styles.article}>
        <Link href="/resources" className={styles.backLink}>
          ← All resources
        </Link>
        <p className={styles.eyebrow}>{post.category}</p>
        <h1>{post.title}</h1>
        <p className={styles.articleMeta}>{post.readTime} · Updated October 14, 2026</p>
        <p className={styles.articleIntro}>{post.intro}</p>

        {post.sections.map((section) => (
          <section className={styles.articleSection} key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className={styles.faqSection} aria-labelledby="article-faq-heading">
          <h2 id="article-faq-heading">Common questions</h2>
          {post.faqs.map((faq) => (
            <div className={styles.faqItem} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        <div className={styles.articleCta}>
          <p>Want advice for your space?</p>
          <Link href={post.relatedHref}>{post.relatedLabel} →</Link>
          <Link href="/#estimator">Get a preliminary estimate →</Link>
        </div>
      </article>
    </main>
  );
}
