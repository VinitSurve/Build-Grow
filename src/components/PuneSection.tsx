"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PuneSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".animate-reveal"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#16171a] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">

        {/* CONTENT LAYER */}
        <div className="relative z-20">
            

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* LEFT CONTENT */}
            <div className="space-y-8 animate-reveal relative z-50 pointer-events-auto">
              <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                GDG Cloud Pune <br /> Insights
              </h2>

              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                GDG Cloud Pune focuses on hands-on learning, deep technical sessions,
                and community-driven initiatives—nurturing developers through
                workshops, study jams, and hackathons.
              </p>

              {/* CTA — FIXED */}
              <a
  href="#"
  onClick={() => {
    console.log("CLICKED");
    window.open("https://linktr.ee/gdgcloudpune", "_blank");
  }}
  className="relative z-[9999] pointer-events-auto bg-red-500 text-white px-6 py-3"
>
  DEBUG LINK
</a>


            </div>

            {/* RIGHT VISUAL — NON INTERACTIVE */}
            <div className="relative h-[450px] flex items-center justify-center animate-reveal pointer-events-none">
              <div className="relative w-full max-w-[420px] aspect-square">

                {/* CENTER HUB */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-56 h-56 bg-gradient-to-br from-[#0a1628] via-[#0f1a2e] to-[#1a2942]
                    border border-blue-400/40 rounded-full shadow-2xl
                    flex items-center justify-center backdrop-blur-xl z-10"
                  style={{
                    boxShadow:
                      "0 0 80px rgba(59,130,246,0.3), inset 0 0 60px rgba(59,130,246,0.1)",
                  }}
                >
                  <div className="text-center">
                    <span className="text-white text-xl md:text-2xl font-bold block">
                      GDG Cloud
                    </span>
                    <span className="text-white text-xl md:text-2xl font-bold block">
                      Pune
                    </span>
                  </div>
                </div>

                {/* ORBIT NODES */}
                {[
                  { label: "Learning", x: 1, y: 0 },
                  { label: "Workshops", x: 0, y: 1 },
                  { label: "Hackathons", x: -1, y: 0 },
                  { label: "Community", x: 0, y: -1 },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="absolute bg-gradient-to-br from-[#0f1419]/90 via-[#1a1f2e]/90 to-[#0f1419]/90
                      border border-blue-400/20 rounded-xl p-4 backdrop-blur-xl shadow-xl z-20"
                    style={{
                      left: `calc(50% + ${node.x * 175}px)`,
                      top: `calc(50% + ${node.y * 175}px)`,
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <span className="text-white text-sm font-medium">
                      {node.label}
                    </span>
                  </div>
                ))}

                {/* ORBIT RING */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[350px] h-[350px] border border-blue-400/10 rounded-full z-0"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 1: Community Impact */}
            <div className="bg-[#202124] rounded-[2.5rem] p-8 flex gap-8 animate-reveal pointer-events-auto">
              <div className="w-48 h-48 bg-black rounded-3xl flex items-center justify-center overflow-hidden">
                <img src="/IMG_2046.JPG" alt="Community Impact" className="object-cover w-full h-full rounded-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">Community Impact</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Over 10,000 developers and tech enthusiasts connected through innovative workshops, hackathons, and collaborative learning experiences.
                </p>
                <span className="text-blue-400 text-sm font-medium mt-3 block">
                  10,000+ Active Members
                </span>
              </div>
            </div>

            {/* CARD 2: Events & Reach */}
            <div className="bg-[#202124] rounded-[2.5rem] p-8 flex gap-8 animate-reveal pointer-events-auto">
              <div className="w-48 h-48 bg-black rounded-3xl flex items-center justify-center overflow-hidden">
                <img src="/IMG_1674.JPG" alt="Events & Reach" className="object-cover w-full h-full rounded-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">Events & Reach</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Delivering 100+ events annually with an impressive 1M+ reach, creating opportunities for learning, networking, and growth.
                </p>
                <span className="text-cyan-400 text-sm font-medium mt-3 block">
                  1M+ Annual Reach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
