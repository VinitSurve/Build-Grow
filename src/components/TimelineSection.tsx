"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        title: "Registration Starts",
        date: "December 25, 2024",
        description: "Sign up and form your teams",
        station: "Pune Central"
    },
    {
        title: "Workshop 1",
        date: "January 10, 2025",
        description: "First workshop session",
        station: "Shivajinagar"
    },
    {
        title: "Workshop 2",
        date: "January 17, 2025",
        description: "Second workshop session",
        station: "Dadar"
    },
    {
        title: "Pre Hackathon",
        date: "January 24, 2025",
        description: "Pre hackathon at Mumbai & Pune",
        station: "Andheri"
    },
    {
        title: "Finale",
        date: "January 26, 2025",
        description: "Grand finale at Mumbai",
        station: "Mumbai CST"
    },
];

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tracksRef = useRef<HTMLDivElement>(null);
    const trainRef = useRef<HTMLDivElement>(null);
    const [activeStation, setActiveStation] = useState(0);

    useEffect(() => {
        if (!containerRef.current || !trainRef.current) return;

        const cards = containerRef.current.querySelectorAll(".timeline-card");

        // Railway tracks grow animation
        if (tracksRef.current) {
            gsap.fromTo(tracksRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );
        }

        // Scroll-driven train movement
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const totalStations = timelineData.length;
                const stationIndex = Math.min(
                    Math.floor(progress * totalStations),
                    totalStations - 1
                );
                setActiveStation(stationIndex);

                // Move train smoothly based on scroll
                if (trainRef.current) {
                    const trackHeight = tracksRef.current?.offsetHeight || 0;
                    const trainPosition = progress * trackHeight;
                    gsap.to(trainRef.current, {
                        y: trainPosition,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            }
        });

        // Station highlight animation
        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveStation(index),
                onEnterBack: () => setActiveStation(index),
            });
        });

    }, []);

    return (
        <section 
            id="timeline" 
            ref={containerRef} 
            className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            suppressHydrationWarning
        >
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
                <div className="text-center space-y-2 sm:space-y-4 mb-10 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                        Journey Timeline
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-light px-4">
                        Your hackathon journey from Pune to Mumbai
                    </p>
                </div>

                <div className="relative">
                    {/* Railway Tracks - Realistic dual rails with sleepers */}
                    <div
                        ref={tracksRef}
                        className="absolute left-1/2 top-0 bottom-0 hidden md:block origin-top"
                        style={{ transform: 'translateX(-50%)' }}
                        suppressHydrationWarning
                    >
                        {/* Track container */}
                        <div className="relative w-12 h-full">
                            {/* Left rail */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-400/80 via-gray-500/70 to-transparent" 
                                style={{ boxShadow: '0 0 8px rgba(156,163,175,0.4), inset 1px 0 0 rgba(255,255,255,0.1)' }} />
                            {/* Right rail */}
                            <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-400/80 via-gray-500/70 to-transparent" 
                                style={{ boxShadow: '0 0 8px rgba(156,163,175,0.4), inset 1px 0 0 rgba(255,255,255,0.1)' }} />
                            {/* Sleeper ties */}
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"
                                    style={{ top: `${i * 2.5}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Train Indicator - Scroll-driven */}
                    <div
                        ref={trainRef}
                        className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block z-30 pointer-events-none"
                        style={{ willChange: 'transform' }}
                    >
                        <Image 
                            src="/train1.png" 
                            alt="Train" 
                            width={120} 
                            height={120}
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                        />
                    </div>

                    <div className="space-y-6 sm:space-y-8 md:space-y-12 relative z-10">
                        {timelineData.map((item, index) => {
                            const isActive = activeStation === index;
                            const isPast = index < activeStation;
                            const isFuture = index > activeStation;

                            return (
                                <div
                                    key={index}
                                    className={`timeline-card flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-500 ${
                                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Content Side - Station Card */}
                                    <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        <div 
                                            className={`bg-[#16171a] p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border shadow-xl transition-all duration-500 ${
                                                isActive 
                                                    ? 'border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.2)] scale-105' 
                                                    : isPast 
                                                    ? 'border-white/5 opacity-60' 
                                                    : 'border-white/5 opacity-40'
                                            }`}
                                        >
                                            <div className="flex flex-col gap-2 mb-3 sm:mb-4">
                                                <h3 className={`text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-500 ${
                                                    isActive ? 'text-cyan-400' : 'text-white'
                                                }`}>
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className={`text-xs sm:text-sm font-mono px-2.5 sm:px-3 py-1 rounded-full border transition-all duration-500 ${
                                                        isActive 
                                                            ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' 
                                                            : 'text-blue-400/80 bg-blue-400/5 border-blue-400/10'
                                                    }`}>
                                                        {item.date}
                                                    </span>
                                                    {/* Station label */}
                                                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                                                        {item.station}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Station Dot */}
                                    <div className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 z-20">
                                        <div 
                                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-[#0d0e10] transition-all duration-500 ${
                                                isActive 
                                                    ? 'bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-125' 
                                                    : isPast 
                                                    ? 'bg-blue-500/60 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                                                    : 'bg-gray-600/40'
                                            }`} 
                                        />
                                    </div>

                                    {/* Empty side for spacing */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
