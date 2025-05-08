"use client";
import FAQItem from "./FAQ";
import TitleSection from "./TitleSection";
import { LazyMotion, domAnimation, m } from "framer-motion";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer professional SolarGard® window tinting and Tuffskin® marble protection services, decorative film, anti-graffiti films & more..",
  },
  {
    question: "Where are you located?",
    answer: "Calgary, Alberta and surroundings.",
  },
  {
    question: "Which window film manufacturer do you use?",
    answer:
      "Our customers deserve the absolute best, so we use Solar Gard Films by Saint-Gobain, backed by an eight-year warranty. Solar Gard is a global leader in patent-protected film technologies for solar control and surface protection across the residential and commercial industries as the Specialty Films Division of the worldwide glass and building technology icon Saint-Gobain. Solar Gard builds upon decades of work to offer proprietary solar control and safety film solutions. The company’s product portfolio delivers unmatched results in enhancing and protecting homes, buildings, and, most importantly, the residents and tenants inside.",
  },
  {
    question: "What is the cost for an estimate?",
    answer: "Price estimates are quick and FREE with our built-in Estimator Pro app!",
  },
  {
    question: "Do your films provide privacy at night?",
    answer: "Window films offer privacy during the day. For nighttime privacy, consider combining with blinds or curtains.",
  },
  {
    question: "Can window film be installed on any type of window?",
    answer: "Most standard residential glass types are compatible. Well assess during your estimate.",
  },
  {
    question: "Is window film safe for dual-pane windows?",
    answer: "Yes — we use films specifically rated for dual-pane and energy-efficient windows.",
  },
];

export default function FAQSection() {
  return (
    <section style={{ maxWidth: "800px", margin: "50px auto", padding: "80px" }}>
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
