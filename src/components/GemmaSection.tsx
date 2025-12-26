"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GemmaSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [orbitalRadius, setOrbitalRadius] = useState(140);

  useEffect(() => {
    setMounted(true);
    
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setOrbitalRadius(85);  // Mobile: smaller radius for h-[240px]
      } else if (window.innerWidth < 768) {
        setOrbitalRadius(105); // Tablet: for h-[280px]
      } else if (window.innerWidth < 1024) {
        setOrbitalRadius(130); // MD: for h-[350px]
      } else {
        setOrbitalRadius(150); // Desktop: for h-[400px]
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    if (!mounted || !cardRef.current || hasPlayedRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasPlayedRef.current = true;
      return;
    }

    const card = cardRef.current;
    const orbit = card.querySelector(".collaboration-orbit");
    const nodesContainer = card.querySelector(".nodes-container");
    const nodes = card.querySelectorAll(".collaboration-node");
    const nodeLabels = card.querySelectorAll(".node-label");
    const centerLabel = card.querySelector(".collaboration-center-label");

    // Set initial states
    gsap.set([orbit, nodes, centerLabel], { opacity: 0 });
    gsap.set(nodes, { scale: 0.8 });

    // Play-once intro animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        hasPlayedRef.current = true;
        // Start continuous rotation after intro
        gsap.to(nodesContainer, {
          rotation: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
        // Counter-rotate labels to keep them upright
        gsap.to(nodeLabels, {
          rotation: -360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      },
    });

    tl.to(orbit, {
      opacity: 0.15,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        nodes,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
        },
        "-=0.6"
      )
      .to(
        centerLabel,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
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
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                GDG Cloud Mumbai
                <br />
                <span className="text-blue-400">✕</span>
                <br />
                GDG Cloud Pune
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                GDG Cloud Mumbai and GDG Cloud Pune collaborate to deliver a
                unified AI-first hackathon experience driven by community and
                innovation.
              </p>
            </div>

            {/* Right: Orbital visual system */}
            <div className="relative h-[240px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-visible">
              {/* Circular orbit */}
              <svg
                className="collaboration-orbit absolute inset-0 w-full h-full"
                viewBox={`0 0 ${(orbitalRadius * 2) + 50} ${(orbitalRadius * 2) + 50}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={(orbitalRadius + 25)}
                  cy={(orbitalRadius + 25)}
                  r={orbitalRadius}
                  stroke="url(#orbitGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="orbitGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Nodes container for rotation */}
              <div className="nodes-container absolute inset-0">
                {/* Node 1: GDG Cloud Mumbai (top-left on orbit) */}
                <div
                  className="collaboration-node absolute flex flex-col items-center"
                  style={{
                    top: `calc(50% - ${orbitalRadius}px * 0.707)`,
                    left: `calc(50% - ${orbitalRadius}px * 0.707)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg"
                    style={{
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                    }}
                  />
                  <span className="node-label mt-1 sm:mt-2 text-[10px] sm:text-xs text-blue-300 font-medium whitespace-nowrap">
                    GDG Cloud Mumbai
                  </span>
                </div>

                {/* Node 2: GDG Cloud Pune (bottom-right on orbit) */}
                <div
                  className="collaboration-node absolute flex flex-col items-center"
                  style={{
                    top: `calc(50% + ${orbitalRadius}px * 0.707)`,
                    left: `calc(50% + ${orbitalRadius}px * 0.707)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg"
                    style={{
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)",
                    }}
                  />
                  <span className="node-label mt-1 sm:mt-2 text-[10px] sm:text-xs text-cyan-300 font-medium whitespace-nowrap">
                    GDG Cloud Pune
                  </span>
                </div>
              </div>

              {/* Center label */}
              <div className="collaboration-center-label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div
                  className="text-[10px] sm:text-xs md:text-sm font-semibold text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-sm"
                  style={{
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  Build & Grow AI<br className="sm:hidden" /> Hackathon
                </div>
              </div>
            </div>
          </div>

          {/* Ambient glow (background decoration) */}
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: "translate(50%, -50%)" }}
          />
        </div>
      </div>
    </section>
  );
}
