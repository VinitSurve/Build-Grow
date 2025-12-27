"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ResponsibleAISection() {
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
        <section ref={sectionRef} className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[#16171a] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-16 border border-white/5 relative overflow-hidden shadow-2xl">

                <div className="relative z-10">
                    {/* Main Card Section (Top half) */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-reveal">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                                GDG Cloud Pune <br />
                                Insights
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                                GDG Cloud Pune is a hands-on developer community focused on learning-by-doing through workshops, study jams, and collaborative hackathons.
                            </p>
                             <button className="w-full sm:w-auto bg-[#1a73e8] hover:bg-[#1967d2] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                <a href="https://linktr.ee/gdgcloudpune" target="_blank" rel="noreferrer">
                                Explore Our Community
                                </a>
                            </button>
                        </div>

                        {/* Main Visual: Learning Flow */}
                        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center animate-reveal">
                            <div className="relative w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] h-full flex items-center justify-center">
                                {/* Vertical flow - stacked glass tiles */}
                                <div className="relative flex flex-col gap-4 sm:gap-6 w-full">
                                    {[
                                        { label: 'Learn', delay: '0s', gradient: 'from-blue-500/20 to-blue-600/10' },
                                        { label: 'Practice', delay: '0.15s', gradient: 'from-cyan-500/20 to-cyan-600/10' },
                                        { label: 'Build', delay: '0.3s', gradient: 'from-blue-400/20 to-blue-500/10' },
                                        { label: 'Community', delay: '0.45s', gradient: 'from-cyan-400/20 to-cyan-500/10' },
                                    ].map((tile, i) => (
                                        <div key={i} className="relative">
                                            {/* Connecting line (except last) */}
                                            {i < 3 && (
                                                <div 
                                                    className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-blue-400/30 to-transparent z-0"
                                                    style={{
                                                        top: '100%',
                                                        height: '16px',
                                                        animationDelay: tile.delay
                                                    }}
                                                />
                                            )}
                                            
                                            {/* Glass tile */}
                                            <div
                                                className={`tile-reveal bg-gradient-to-br ${tile.gradient} border border-blue-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl relative z-10`}
                                                style={{
                                                    animationDelay: tile.delay,
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                                }}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <span className="text-white text-xl md:text-2xl font-semibold tracking-wide">{tile.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Learning Culture */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-40 h-40 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-xl" />
                                <div className="relative text-5xl">
                                    <img src="/IMG_1596.JPG" alt="Learning Culture" className="object-cover w-full h-full " />
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl font-medium text-white">Learning Culture</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Hands-on workshops, study jams, and deep-dive technical sessions.
                                </p>
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                                    <span>50+ Hands-on Sessions</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Builder Community */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start animate-reveal pointer-events-auto">
                            <div className="w-40 h-40 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-cyan-500/5 blur-xl" />
                                <div className="relative text-5xl">
                                    <img src="/IMG_1816.JPG" alt="Builder Community" className="object-cover w-full h-full " />
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl font-medium text-white">Builder Community</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    Developers building real projects through collaborative hackathons.
                                </p>
                                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                    <span>5K+ Active Developers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
