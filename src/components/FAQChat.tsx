"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../app/page.module.css";
import TitleSection from "./TitleSection";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export default function FAQChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    if (openIndex === idx) {
      // close it
      setOpenIndex(null);
      setTypingIndex(null);
    } else {
      // show typing first
      setOpenIndex(null);
      setTypingIndex(idx);
      setTimeout(() => {
        setTypingIndex(null);
        setOpenIndex(idx);
      }, 1000); // 1 second typing delay
    }
  };

  return (
    <div className={styles.chatWrapper}>
            <TitleSection title="Frequently Asked Questions" subtitle="Have a Question?" />

      <div className={styles.chatWindow}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.chatGroup}>
            {/* Question bubble */}
            <div
              className={`${styles.messageRow} ${styles.userRow}`}
              onClick={() => handleClick(idx)}
            >
              <div className={styles.avatarUser}>You</div>
              <div className={`${styles.bubble} ${styles.question}`}>
                {faq.question}
              </div>
            </div>

            {/* Typing bubble */}
            <AnimatePresence>
              {typingIndex === idx && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`${styles.messageRow} ${styles.botRow}`}
                >
                  <div className={styles.avatarBot}>
                    <Image
                      src="/images/hero/tinterguy.png"
                      alt="Tinter Guy"
                      width={32}
                      height={32}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={`${styles.bubble} ${styles.answer}`}>
                    <div className={styles.typingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Answer bubble */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`${styles.messageRow} ${styles.botRow}`}
                >
                  <div className={styles.avatarBot}>
                    <Image
                      src="/images/hero/tinterguy.png"
                      alt="Tinter Guy"
                      width={32}
                      height={32}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={`${styles.bubble} ${styles.answer}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
