"use client";
import FAQItem from "./FAQ";
import TitleSection from "./TitleSection";
import { LazyMotion, domAnimation, m } from "framer-motion";

export const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We provide professional SolarGard® window tinting and Tuffskin® natural stone protection in Calgary, including heat-control film, privacy film, decorative film, and anti-graffiti coating.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in Calgary, Alberta, and serve surrounding communities for home and business projects.",
  },
  {
    question: "Do you install automotive or car window tint?",
    answer:
      "No. Tint It Pro specializes in architectural window film for homes and businesses, plus TuffSkin® stone protection. We do not install automotive or vehicle window tint.",
  },
  {
    question: "Which window film manufacturer do you use?",
    answer:
      "We use Solar Gard® Films by Saint-Gobain for premium residential and commercial window film solutions. Their films are backed by manufacturer warranty and are trusted for solar control, UV reduction, and safety applications.",
  },
  {
    question: "How much does an on-site estimate cost?",
    answer:
      "Use the online estimator for a quick preliminary estimate. Professional on-site consultations are $75 + GST and are fully credited toward your project if you proceed.",
  },
  {
    question: "Do your films provide privacy at night?",
    answer: "Window films offer privacy during the day. For nighttime privacy, consider combining with blinds or curtains.",
  },
  {
    question: "Can window film be installed on any type of window?",
    answer:
      "Most standard residential and commercial glass is compatible. Each window type is assessed during your consultation to recommend the right film.",
  },
  {
    question: "Is window film safe for dual-pane windows?",
    answer:
      "Yes. We use films suitable for modern double-pane and energy-efficient windows, and verify compatibility at the estimate.",
  },
  {
    question: "How much does residential tinting cost in Calgary?",
    answer:
      "Calgary home tinting starts with a personalized quote because each project differs by window count, size, and film type. Use the estimator to get a fast range and confirm details with an on-site review.",
  },
  {
    question: "Does window tinting make rooms too dark?",
    answer:
      "Tinting improves comfort and glare control but should not make rooms dark when selected correctly. Our team recommends the best visible-light transmission for each room orientation.",
  },
];

export default function FAQSection() {
  return (
    <section style={{ maxWidth: "800px", margin: "30px auto", padding: "80px" }}>
      <TitleSection title="Frequently Asked Questions" subtitle="Have a Question?" />

      <LazyMotion features={domAnimation}>
        {faqItems.map((faq, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </m.div>
        ))}
      </LazyMotion>
    </section>
  );
}
