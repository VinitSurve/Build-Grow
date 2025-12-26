"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const organizers = {
  gdgCloudMumbai: [
    { name: "Abhishek Sharma", role: "Lead Cloud Engineer", company: "", image: "/abhishek_sharma_RQClIHO.webp", profile: "#" },
    { name: "Niharika Dhanik", role: "Cloud Engineer", company: "", image: "/niharika_dhanik_ivuUui4.webp", profile: "#" },
    { name: "Rushabh Mahale", role: "Cloud Engineer", company: "Searce inc", image: "/rushabh_mahale_N4nLK69.webp", profile: "#" },
    { name: "Nikunj Shah", role: "Sr. AVP- India & Mauritius", company: "Winjit Tech", image: "/nikunj_shah_3SB4kkE.webp", profile: "#" }
  ],
  gdgPune: [
    { name: "Antrixsh Gupta", role: "GDG Organizer", company: "", image: "/antrixsh_gupta_imgupscaler.ai_V1(Fast)_2K.png", profile: "#" },
    { name: "Pratik Kale", role: "Co-Organizer", company: "Impulsive Web", image: "/pratik_kale_JE4xYmT_imgupscaler.ai_V1(Fast)_2K.png", profile: "#" },
    { name: "Dnyanada Mahajan", role: "Co Organizer", company: "Gen Digital - NortonLifeLock", image: "/dnyanada_mahajan_imgupscaler.ai_V1(Fast)_2K.png", profile: "#" },
    { name: "Vatsal Jain", role: "Event Organizer", company: "vConstruct Pvt Ltd", image: "/vatsal_jain_9uuB5SU_imgupscaler.ai_V1(Fast)_2K.png", profile: "#" }
  ]
};

export default function OrganizersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const hasPlayedRef = useRef(false);
  const mumbaiRef = useRef<HTMLDivElement | null>(null);
  const puneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || hasPlayedRef.current) {
      setAnimationComplete(true);
      return;
    }

    // Play animation sequence once
    hasPlayedRef.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationComplete) {
            // Trigger card reveal immediately when section enters view
            setAnimationComplete(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // When orchestration overlay is done, reveal organizer cards sequentially
  useEffect(() => {
    if (!animationComplete) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mumbaiEl = mumbaiRef.current;
    const puneEl = puneRef.current;

    if (!mumbaiEl || !puneEl) return;

    const mumbaiCards = Array.from(mumbaiEl.querySelectorAll('.organizer-card')) as HTMLElement[];
    const puneCards = Array.from(puneEl.querySelectorAll('.organizer-card')) as HTMLElement[];

    if (prefersReducedMotion) {
      mumbaiCards.forEach((c) => { c.style.opacity = '1'; c.style.transform = 'none'; });
      puneCards.forEach((c) => { c.style.opacity = '1'; c.style.transform = 'none'; });
      return;
    }

    // Set initial state
    gsap.set([...mumbaiCards, ...puneCards], { opacity: 0, y: 30 });

    const tl = gsap.timeline();

    // Reveal Mumbai one by one
    tl.to(mumbaiCards, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12 });

    // Small pause then reveal Pune
    tl.to(puneCards, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12 }, '+=0.15');

    return () => { tl.kill(); };
  }, [animationComplete]);

  return (
    <section id="organizers" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Organizers</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-2 sm:mt-3 px-4">Meet the organizers from GDG Cloud Mumbai and GDG Pune helping run this community.</p>
        </div>

        {/* Orchestration visual removed per request — only reveal cards */}

        {/* Organizer Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-opacity duration-500 ${
          animationComplete ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
        }`}>
          <div>
            <h3 className="text-xs sm:text-sm text-blue-300 uppercase tracking-wider mb-3 sm:mb-4">GDG Cloud Mumbai</h3>
            <div ref={mumbaiRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {organizers.gdgCloudMumbai.map((p, i) => (
                <div key={`mumbai-${i}`} className="organizer-card min-h-[140px] sm:h-auto bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md border border-white/6 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:-translate-y-2 transition-transform shadow-lg hover:shadow-blue-600/20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-400/20 shadow-md">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="text-white font-medium text-sm sm:text-base">{p.name}</div>
                    <div className="text-gray-300 text-xs sm:text-sm">{p.role}{p.company ? ` · ${p.company}` : ''}</div>
                    <div className="mt-2">
                      <a href={p.profile} className="inline-block text-xs sm:text-sm bg-blue-500/10 text-blue-300 px-2.5 sm:px-3 py-1 rounded-full border border-blue-500/20 hover:bg-blue-500/20">View</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-blue-300 uppercase tracking-wider mb-3 sm:mb-4">GDG Cloud Pune</h3>
            <div ref={puneRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {organizers.gdgPune.map((p, i) => (
                <div key={`pune-${i}`} className="organizer-card min-h-[140px] sm:h-auto bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md border border-white/6 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:-translate-y-2 transition-transform shadow-lg hover:shadow-purple-600/20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-400/20 shadow-md">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="text-white font-medium text-sm sm:text-base">{p.name}</div>
                    <div className="text-gray-300 text-xs sm:text-sm">{p.role}{p.company ? ` · ${p.company}` : ''}</div>
                    <div className="mt-2">
                      <a href={p.profile} className="inline-block text-xs sm:text-sm bg-purple-500/10 text-purple-300 px-2.5 sm:px-3 py-1 rounded-full border border-purple-500/20 hover:bg-purple-500/20">View</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
