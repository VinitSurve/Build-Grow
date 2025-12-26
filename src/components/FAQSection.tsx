"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "Who can participate in Build & Grow AI Hackathon?", answer: "Anyone with a passion for technology can participate! Whether you're a student, professional developer, or tech enthusiast, you're welcome to join. Teams can have 2-4 members." },
  { question: "What is the team size?", answer: "Teams should consist of 2-4 members. You can form your team before registration or find teammates at the event. Solo participation is also allowed for the Open Innovation track." },
  { question: "Is this hackathon beginner-friendly?", answer: "We have tracks for all skill levels. Our mentors and workshops will help beginners get started, while advanced tracks challenge experienced developers." },
  { question: "Is there any registration fee?", answer: "No, Build & Grow AI Hackathon is completely free to attend. We provide food, beverages, swag, and all necessary resources during the event." },
  { question: "What should I bring to the hackathon?", answer: "Bring your laptop, charger, valid ID, and enthusiasm! We'll provide internet, power outlets, food, and a great atmosphere for coding." },
  { question: "What are the prizes?", answer: "We have a total prize pool of ₹5 lakhs distributed across different tracks. Winners also get Google Cloud credits, exclusive swag, and mentorship opportunities." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4 sm:mb-6">Frequently Asked Questions</h3>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((f, i) => (
            <motion.div key={i} className="bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md border border-white/6 rounded-xl sm:rounded-2xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4"
              >
                <span className="text-sm sm:text-base text-white font-medium pr-4">{f.question}</span>
                <span className={`text-gray-300 transform transition-transform text-xl flex-shrink-0 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>+</span>
              </button>
              <motion.div initial={{ height: 0, opacity: 0 }} animate={openIndex === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="px-4 sm:px-5 overflow-hidden">
                {openIndex === i && <p className="py-3 text-sm sm:text-base text-gray-300">{f.answer}</p>}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
