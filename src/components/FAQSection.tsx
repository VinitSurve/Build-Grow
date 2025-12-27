"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the Build & Grow AI Hackathon?",
    answer: "Build & Grow AI Hackathon is a high-energy event designed to spark innovation, teamwork, and rapid prototyping. Whether you're competing as an individual or part of a team, this is your chance to build impactful solutions and grow your skills in a competitive and collaborative environment."
  },
  {
    question: "Who can participate in the hackathon?",
    answer: "The event is open to both early developers and professionals. Anyone passionate about technology, innovation, and AI is welcome to join. Please carry a valid Government or College ID for verification."
  },
  {
    question: "What is the team size and can I participate solo?",
    answer: "Teams can have up to 3 members. You may also participate individually. Only the team lead should register the team; one ticket covers the entire team."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, registration is completely free. However, registration is mandatory for all participants."
  },
  {
    question: "What is the event timeline?",
    answer: "The hackathon kick-off is in January 2026 (exact date to be decided). The Grand Finale will be held on January 26th, 2026. Registration closes at 12:00 AM on 16th January 2026."
  },
  {
    question: "What is the theme of the hackathon?",
    answer: "Harness the power of Google’s cutting-edge AI solutions to design impactful, practical, and innovative agentic use cases that solve real-world challenges."
  },
  {
    question: "What domains can I build solutions for?",
    answer: "You can build solutions in HealthTech, FinTech, Cybersecurity, EduTech, AgriTech, or propose an impactful AI-driven solution in the Open Problem category."
  },
  {
    question: "Is there an open category for projects?",
    answer: "Yes! If your solution doesn't fit the listed domains, you can propose and build impactful AI-driven solutions in the Open Problem category."
  },
  {
    question: "What are the key takeaways for participants?",
    answer: "You’ll forge powerful connections, get expert mentorship, win impressive prizes, shape the future of AI, and amplify your brand with exposure across our social media platforms."
  },
  {
    question: "What are the prizes and recognition?",
    answer: "Winners will receive an exciting pool of prizes of 25k and gain recognition for their innovation and hard work. Top projects will be spotlighted across our platforms."
  },
  {
    question: "What should I bring to the event?",
    answer: "A laptop is compulsory for all participants. Please bring your own device, fully charged. Also carry your valid ID and any personal belongings you need. The management is not responsible for lost items."
  },
  {
    question: "How does team registration work?",
    answer: "Only the team lead should complete the registration form. One ticket per team grants entry to all members (up to 3). Do not register individually if you are part of a team. Teammate details will be collected in the form."
  },
  {
    question: "Where will the event be held and how are teams selected for the finale?",
    answer: "Phase 1 (Pre-Hackathon) will be held locally in Mumbai and Pune (subject to seat availability). Phase 2 (Grand Finale) is in Mumbai on Jan 26th. Only the Top 20 Teams from the Pre-Hackathon will be shortlisted for the finale."
  },
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
