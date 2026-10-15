import type { Metadata } from "next";
import Link from "next/link";
import { resourcePosts } from "@/lib/resources";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Calgary Window Film & Stone Protection Resources",
  description:
    "Helpful guides from Tint It Pro about Calgary residential window tinting, commercial window film, privacy glass, heat control, and TuffSkin® stone protection.",
  keywords: [
    "Calgary window tinting guide",
    "residential window film Calgary",
    "commercial window film Calgary",
    "TuffSkin Calgary",
  ],
  alternates: {
    canonical: "https://tintitpro.ca/resources",
  },
};

const resourcesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://tintitpro.ca/resources#webpage",
  url: "https://tintitpro.ca/resources",
  name: "Calgary Window Film & Stone Protection Resources",
  description: metadata.description,
  isPartOf: { "@id": "https://tintitpro.ca/#website" },
  about: { "@id": "https://tintitpro.ca/#business" },
  hasPart: resourcePosts.map((post, index) => ({
    "@type": "Article",
    "@id": `https://tintitpro.ca/resources/${post.slug}#article`,
    headline: post.title,
    url: `https://tintitpro.ca/resources/${post.slug}`,
    position: index + 1,
  })),
};

export default function ResourcesPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resourcesStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className={styles.hero}>
        <p className={styles.eyebrow}>Tint It Pro resources</p>
        <h1>Clear answers for better glass and stone protection.</h1>
        <p className={styles.lede}>
          Practical Calgary guides for choosing window film, improving comfort,
          protecting interiors, and caring for natural stone surfaces.
        </p>
      </header>

      <section className={styles.grid} aria-label="Tint It Pro guides">
        {resourcePosts.map((post) => (
          <article className={styles.card} key={post.slug}>
            <div className={styles.cardMeta}>
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/resources/${post.slug}`} className={styles.cardLink}>
              Read the guide <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>

      <section className={styles.cta} aria-label="Get a project estimate">
        <div>
          <p className={styles.eyebrow}>Ready to plan your project?</p>
          <h2>Get a preliminary estimate for your space.</h2>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/#estimator" className={styles.primaryAction}>
            Open Estimator Pro
          </Link>
          <Link href="/windowfilm" className={styles.secondaryAction}>
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
