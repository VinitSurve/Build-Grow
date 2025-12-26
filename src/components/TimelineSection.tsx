"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        title: "Registration Starts",
        date: "December 25, 2024",
        description: "Sign up and form your teams",
    },
    {
        title: "Workshop 1",
        date: "January 10, 2025",
        description: "First workshop session",
    },
    {
        title: "Workshop 2",
        date: "January 17, 2025",
        description: "Second workshop session",
    },
    {
        title: "Pre Hackathon",
        date: "January 24, 2025",
        description: "Pre hackathon at Mumbai & Pune",
    },
    {
        title: "Finale",
        date: "January 26, 2025",
        description: "Grand finale at Mumbai",
    },
];

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll(".timeline-card");

        // Staggered reveal for cards - only animate to final state, don't set initial
        gsap.to(cards,
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animated vertical line
        if (lineRef.current) {
            gsap.to(lineRef.current,
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: true,
                    }
                }
            );
        }
    }, []);

    return (
        <section 
            id="timeline" 
            ref={containerRef} 
            className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            suppressHydrationWarning
        >
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                <div className="text-center space-y-2 sm:space-y-4 mb-10 sm:mb-16 md:mb-20 animate-reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                        Timeline
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-light px-4">
                        Mark your calendars for the journey ahead
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top hidden md:block"
                        suppressHydrationWarning
                    />

                    <div className="space-y-6 sm:space-y-8 md:space-y-12 relative z-10">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-card flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <div className="bg-[#16171a] p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/5 shadow-xl hover:border-white/10 transition-colors group">
                                        <div className="flex flex-col gap-2 mb-3 sm:mb-4">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs sm:text-sm font-mono text-blue-400/80 bg-blue-400/5 px-2.5 sm:px-3 py-1 rounded-full border border-blue-400/10 self-start">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 z-20">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-2 sm:border-4 border-[#0d0e10]" />
                                </div>

                                {/* Empty side for spacing */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
