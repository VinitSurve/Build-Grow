"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EdgeSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [orbitalRadius, setOrbitalRadius] = useState(100);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Update orbital radius based on viewport width
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                setOrbitalRadius(90);
            } else if (window.innerWidth < 768) {
                setOrbitalRadius(130);
            } else {
                setOrbitalRadius(190);
            }
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);

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

        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <section id="insights" ref={sectionRef} className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[#16171a] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-16 border border-white/5 relative overflow-hidden shadow-2xl">

                <div className="relative z-10">
                    {/* Main Card Section (Top half) */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-reveal">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                                GDG Cloud Mumbai <br />
                                Insights
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                                Empowering developers, startups, and tech leaders through
                                collaborative events, workshops, and hackathons—building a
                                thriving ecosystem for cloud and AI innovation.
                            </p>
                            <button className="w-full sm:w-auto bg-[#1a73e8] hover:bg-[#1967d2] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                Explore Our Community
                            </button>
                        </div>

                        {/* Main Visual: Stats representation */}
                        <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] flex items-center justify-center animate-reveal mb-8 sm:mb-12">
                            <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-square">
                                {/* Central hub - GDG Cloud Mumbai */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-br from-[#0a1628] via-[#0f1a2e] to-[#1a2942] border border-blue-400/40 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl z-10"
                                    style={{
                                        boxShadow: '0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(59, 130, 246, 0.1)'
                                    }}
                                >
                                    <div className="text-center">
                                        <span className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight block">GDG Cloud</span>
                                        <span className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight block">Mumbai</span>
                                    </div>
                                </div>

                                {/* Floating stat cards - arranged on an orbital ring with deterministic positions */}
                                {[
                                    { label: '5+', desc: 'Years', angle: -45, delay: '0s', x: 0.707, y: -0.999 },      // top-right
                                    { label: '10K+', desc: 'Members', angle: 45, delay: '0.25s', x: 0.707, y: 0.707 }, // bottom-right
                                    { label: '100+', desc: 'Events', angle: 135, delay: '0.5s', x: -0.999, y: 0.77, }, // bottom-left
                                    { label: '1M+', desc: 'Reach', angle: 425, delay: '0.75s', x: -1.509, y: -0.707 }, // top-left
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="absolute bg-gradient-to-br from-[#0f1419]/95 via-[#1a1f2e]/95 to-[#0f1419]/95 border border-blue-400/30 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 backdrop-blur-xl shadow-2xl animate-float z-30"
                                        style={{
                                            left: `calc(50% + ${stat.x * orbitalRadius}px)`,
                                            top: `calc(50% + ${stat.y * orbitalRadius}px)`,
                                            transform: 'translate(-50%,-50%)',
                                            animationDelay: stat.delay,
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 50px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[115px]">
                                            <span className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.label}</span>
                                            <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1.5 font-medium tracking-wide">{stat.desc}</span>
                                        </div>
                                    </div>
                                ))}  
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Community Impact */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start animate-reveal pointer-events-auto max-w-3xl mx-auto w-full">
                            <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-48 md:h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                <div className="relative text-4xl sm:text-5xl md:text-6xl">
                                    🚀
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl sm:text-2xl font-medium text-white">Community Impact</h3>
                                <p className="text-gray-400 font-light text-sm sm:text-sm leading-relaxed">
                                    Over 10,000 developers and tech enthusiasts connected through innovative workshops, hackathons, and collaborative learning experiences.
                                </p>
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                                    <span>10,000+ Active Members</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Events & Reach */}
                        <div className="bg-[#202124] rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start animate-reveal pointer-events-auto max-w-3xl mx-auto w-full">
                            <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-48 md:h-48 flex-shrink-0 bg-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-cyan-500/5 blur-2xl" />
                                <div className="relative text-4xl sm:text-5xl md:text-6xl">
                                    🎯
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <h3 className="text-xl sm:text-2xl font-medium text-white">Events & Reach</h3>
                                <p className="text-gray-400 font-light text-sm sm:text-sm leading-relaxed">
                                    Delivering 100+ events annually with an impressive 1M+ reach, creating opportunities for learning, networking, and growth.
                                </p>
                                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                    <span>1M+ Annual Reach</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
