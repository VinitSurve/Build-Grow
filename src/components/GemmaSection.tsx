"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GemmaSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !cardRef.current || hasPlayedRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasPlayedRef.current = true;
      return;
    }

    const card = cardRef.current;
    const leftNode = card.querySelector(".collab-left");
    const centerNode = card.querySelector(".collab-center");
    const rightNode = card.querySelector(".collab-right");
    const connectorLeft = card.querySelector(".connector-left");
    const connectorRight = card.querySelector(".connector-right");

    // Set initial states
    gsap.set([leftNode, centerNode, rightNode, connectorLeft, connectorRight], { opacity: 0 });
    gsap.set([leftNode, centerNode, rightNode], { scale: 0.8 });

    // Play-once intro animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        hasPlayedRef.current = true;
      },
    });

    tl.to([connectorLeft, connectorRight], {
      opacity: 0.2,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        leftNode,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      )
      .to(
        centerNode,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .to(
        rightNode,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      );
  }, [mounted]);

  return (
    <section id="collaboration" className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-[#0a0b0d] via-[#0f1113] to-[#0a0b0d] rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 60px -15px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            {/* Left: Text content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 text-left">
                GDG Cloud Mumbai
              </h2>
              <div className="w-full flex justify-start">
                <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-400 font-semibold px-3 py-1 mx-0 my-2">
                  in collaboration with
                </span>
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-2 mb-4 text-left">
                GDG Cloud Pune
              </h2>
              <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left">
                GDG Cloud Mumbai and GDG Cloud Pune collaborate to deliver a
                unified AI-first hackathon experience driven by community and
                innovation.
              </p>
            </div>

            {/* Right: Static Collaboration Visual */}
            <div className="relative h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] flex items-center justify-center">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Left connector line */}
                <line 
                  className="connector-left"
                  x1="80" 
                  y1="100" 
                  x2="160" 
                  y2="100" 
                  stroke="url(#lineGradientLeft)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Right connector line */}
                <line 
                  className="connector-right"
                  x1="240" 
                  y1="100" 
                  x2="320" 
                  y2="100" 
                  stroke="url(#lineGradientRight)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient id="lineGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Visual Elements Container */}
              <div className="relative w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12">
                {/* Left: Gateway of India (Mumbai) */}
                <div className="collab-left flex flex-col items-center justify-end" style={{flex: 1, minWidth: 0}}>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center overflow-hidden" style={{boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)'}}>
                    <img
                      src="/Gateway.png"
                      alt="Gateway of India - Mumbai"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="block text-[11px] sm:text-xs text-gray-400 font-medium text-center mt-2">Mumbai</span>
                </div>

                {/* Center: Google Developer Groups Logo */}
                <div className="collab-center flex flex-col items-center justify-end" style={{flex: 1.15, minWidth: 0}}>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/40 flex items-center justify-center overflow-hidden" style={{boxShadow: '0 4px 24px 0 rgba(59,130,246,0.13)'}}>
                    <img
                      src="/GDG.png"
                      alt="Google Developer Groups"
                      className="w-16 h-10 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain"
                      style={{ filter: 'grayscale(0.05) brightness(1.10)' }}
                    />
                  </div>
                </div>

                {/* Right: Shaniwar Wada (Pune) */}
                <div className="collab-right flex flex-col items-center justify-end" style={{flex: 1, minWidth: 0}}>
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center overflow-hidden" style={{boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)'}}>
                    <img
                      src="/Shaniwaar_Wada-removebg-preview.png"
                      alt="Shaniwar Wada - Pune"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="block text-[11px] sm:text-xs text-gray-400 font-medium text-center mt-2">Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}