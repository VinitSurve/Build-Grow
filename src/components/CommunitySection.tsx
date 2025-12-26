"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CommunitySection() {
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

        // Frame movement animation (Parallax)
        gsap.to(sectionRef.current.querySelectorAll(".animate-frame"), {
            y: (i) => (i % 2 === 0 ? -30 : 30),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });
    }, []);

    return (
        <section id="community" ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Architectural Framing Lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="max-w-[1440px] mx-auto h-full relative">
                    {/* Top Right Corner */}
                    <div className="animate-frame absolute top-0 right-[10%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] border-t border-r border-blue-500/20 rounded-tr-[50px] sm:rounded-tr-[100px]" />
                    <div className="animate-frame absolute top-10 sm:top-20 right-[5%] w-px h-32 sm:h-64 bg-gradient-to-b from-blue-500/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.1)]" />

                    {/* Bottom Left Corner */}
                    <div className="animate-frame absolute bottom-0 left-[10%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] border-b border-l border-blue-500/20 rounded-bl-[50px] sm:rounded-bl-[100px]" />
                    <div className="animate-frame absolute bottom-10 sm:bottom-20 left-[5%] w-8 sm:w-12 h-px bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]" />
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="animate-reveal text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
                        Join the community
                    </h2>
                    <p className="animate-reveal text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
                        Tap into the power of our community forum. Get answers, build together, and be part of the conversation.
                    </p>
                </div>

                <div className="animate-reveal pt-2 sm:pt-4">
                    <button className="w-full sm:w-auto bg-[#1c1d20] hover:bg-[#2c2d30] text-white border border-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-medium transition-all shadow-2xl hover:shadow-blue-500/10 active:scale-95">
                        Google AI Forum
                    </button>
                </div>
            </div>
        </section>
    );
}
