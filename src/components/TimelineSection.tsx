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
        description: "Form your teams & onboard",
        stationMarathi: "ठरवायचे आहे",
        station: "TO BE DECIDED",
        daysToNext: 16
    },
    {
        title: "Workshop 1",
        date: "January 10, 2025",
        description: "Hands-on AI fundamentals",
        stationMarathi: "ठरवायचे आहे",
        station: "TO BE DECIDED",
        daysToNext: 7
    },
    {
        title: "Workshop 2",
        date: "January 17, 2025",
        description: "Deep dive into cloud & ML",
        stationMarathi: "ठरवायचे आहे",
        station: "TO BE DECIDED",
        daysToNext: 7
    },
    {
        title: "Pre-Hackathon",
        date: "January 24, 2025",
        description: "Mumbai + Pune meet-up",
        stationMarathi: "ठरवायचे आहे",
        station: "TO BE DECIDED",
        daysToNext: 2
    },
    {
        title: "Finale",
        date: "January 26, 2025",
        description: "Grand Finale at Mumbai",
        stationMarathi: "ठरवायचे आहे",
        station: "TO BE DECIDED",
        daysToNext: 0
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
            // Scroll-driven train movement (position computed relative to tracks and clamped)
            let st: any = null;
            const updateTrainByProgress = (progress: number) => {
                if (!tracksRef.current || !trainRef.current || !containerRef.current) return;

                // Use the nearest positioned ancestor (the inner relative container) as reference
                const refElement = (tracksRef.current.offsetParent as HTMLElement) || containerRef.current;
                const referenceRect = refElement.getBoundingClientRect();
                const tracksRect = tracksRef.current.getBoundingClientRect();
                const trainRect = trainRef.current.getBoundingClientRect();

                // compute vertical bounds (relative to the positioned reference)
                const minY = Math.max(0, tracksRect.top - referenceRect.top);
                const maxY = Math.max(0, tracksRect.bottom - referenceRect.top - trainRect.height);

                const clampedProgress = Math.min(Math.max(progress, 0), 1);
                const y = minY + clampedProgress * (maxY - minY || 0);

                // compute horizontal center so train remains centered on rails (relative to reference)
                const railsCenterX = tracksRect.left - referenceRect.left + tracksRect.width / 2;
                const x = railsCenterX - trainRect.width / 2;

                gsap.to(trainRef.current, {
                    x,
                    y,
                    duration: 0.25,
                    ease: "power2.out"
                });
            };

            st = ScrollTrigger.create({
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
                    updateTrainByProgress(progress);
                }
            });

            // initial positioning in case image and layout are ready
            requestAnimationFrame(() => {
                const initialProgress = st?.animation ? st.animation.progress() : 0;
                updateTrainByProgress(initialProgress || 0);
            });

            // keep train aligned on resize
            const onResize = () => {
                const currProgress = st?.animation ? st.animation.progress() : 0;
                updateTrainByProgress(currProgress || 0);
            };
            window.addEventListener('resize', onResize);

            // cleanup
            return () => {
                window.removeEventListener('resize', onResize);
                try {
                    ScrollTrigger.getAll().forEach((s) => s.kill());
                } catch (e) {}
                gsap.killTweensOf(trainRef.current);
            };

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
                        Build & Grow Express
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-light px-4">
                        Your hackathon journey from Pune to Mumbai
                    </p>
                </div>

                <div className="relative">
                    {/* Metro Rails - Futuristic sleek dual rails */}
                    <div
                        ref={tracksRef}
                        className="absolute left-1/2 top-0 bottom-0 block origin-top"
                        style={{ transform: 'translateX(-50%)' }}
                        suppressHydrationWarning
                    >
                        {/* Track container */}
                        <div className="relative w-8 sm:w-12 md:w-16 h-full">
                            {/* Left rail - Futuristic metro style */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] sm:w-[3px] md:w-[4px] bg-gradient-to-b from-cyan-400/90 via-blue-500/80 to-transparent rounded-full" 
                                style={{ boxShadow: '0 0 8px rgba(6,182,212,0.6), 0 0 16px rgba(6,182,212,0.3), inset 1px 0 0 rgba(255,255,255,0.2)' }} />
                            {/* Right rail - Futuristic metro style */}
                            <div className="absolute right-0 top-0 bottom-0 w-[2px] sm:w-[3px] md:w-[4px] bg-gradient-to-b from-cyan-400/90 via-blue-500/80 to-transparent rounded-full" 
                                style={{ boxShadow: '0 0 8px rgba(6,182,212,0.6), 0 0 16px rgba(6,182,212,0.3), inset 1px 0 0 rgba(255,255,255,0.2)' }} />
                            {/* Futuristic sleeper ties with glow */}
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-full h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent rounded-full"
                                    style={{ 
                                        top: `${i * 2.5}%`,
                                        boxShadow: '0 0 6px rgba(6,182,212,0.4)'
                                    }}
                                />
                            ))}
                            {/* Glowing energy lines */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/40 via-blue-400/30 to-transparent"
                                style={{ boxShadow: '0 0 6px rgba(6,182,212,0.5)' }} />
                        </div>
                    </div>

                    {/* Metro Train Indicator - Scroll-driven with futuristic glow */}
                    <div
                        ref={trainRef}
                        className="absolute left-0 top-0 block z-30 pointer-events-none"
                        style={{ willChange: 'transform' }}
                    >
                        <Image 
                            src="/train1.png" 
                            alt="Metro Train" 
                            width={120} 
                            height={120}
                            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 12px rgba(6,182,212,0.8)) drop-shadow(0 0 24px rgba(6,182,212,0.5)) drop-shadow(0 0 36px rgba(59,130,246,0.3)) brightness(1.2) contrast(1.1)',
                            }}
                            loading="eager"
                        />
                    </div>

                    <div className="space-y-6 sm:space-y-8 md:space-y-12 relative z-10">
                        {timelineData.map((item, index) => {
                            const isActive = activeStation === index;
                            const isPast = index < activeStation;
                            const isFuture = index > activeStation;

                            return (
                                <div key={index} className="relative">
                                    <div
                                        className={`timeline-card flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-500 ${
                                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                    >
                                        {/* Left Station Board (Mobile) / Content Side (Desktop) */}
                                        <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                            <div className="relative inline-block w-full md:w-auto">
                                                {/* Metro Station Display */}
                                                <div 
                                                    className={`relative px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-7 rounded-xl md:rounded-2xl border-2 shadow-2xl transition-all duration-500 ${
                                                        isActive 
                                                            ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 border-cyan-400/70 shadow-[0_8px_40px_rgba(6,182,212,0.5)]' 
                                                            : isPast 
                                                            ? 'bg-gradient-to-br from-slate-900/85 via-slate-800/85 to-slate-900/85 border-cyan-500/40 opacity-80 shadow-[0_4px_20px_rgba(6,182,212,0.3)]' 
                                                            : 'bg-gradient-to-br from-slate-900/70 via-slate-800/70 to-slate-900/70 border-cyan-600/30 opacity-60 shadow-[0_2px_15px_rgba(6,182,212,0.2)]'
                                                    }`}
                                                    style={{
                                                        backdropFilter: 'blur(12px)',
                                                        WebkitBackdropFilter: 'blur(12px)',
                                                        backgroundImage: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.03) 100%)',
                                                    }}
                                                >
                                                    {/* Accent line at top */}
                                                    <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-all duration-500 ${
                                                        isActive ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400' : 'bg-gradient-to-r from-cyan-600/40 via-blue-600/40 to-cyan-600/40'
                                                    }`} style={{ boxShadow: isActive ? '0 0 10px rgba(6,182,212,0.8)' : 'none' }} />
                                                    
                                                    {/* Station Names - Bilingual */}
                                                    <div className="text-center mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-cyan-500/30">
                                                        {/* Marathi (Primary) */}
                                                        <h4 className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-500 ${
                                                            isActive ? 'text-cyan-300' : 'text-cyan-400/70'
                                                        }`} style={{ textShadow: isActive ? '0 0 20px rgba(6,182,212,0.6)' : 'none' }}>
                                                            {item.stationMarathi}
                                                        </h4>
                                                        {/* English (Secondary) */}
                                                        <h5 className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-[0.15em] sm:tracking-[0.25em] transition-colors duration-500 ${
                                                            isActive ? 'text-blue-300' : 'text-blue-400/60'
                                                        }`}>
                                                            {item.station}
                                                        </h5>
                                                    </div>

                                                    {/* Event Details */}
                                                    <div className="space-y-1 sm:space-y-2">
                                                        <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-colors duration-500 ${
                                                            isActive ? 'text-white' : 'text-gray-300/80'
                                                        }`}>
                                                            {item.title}
                                                        </h3>
                                                        <div className={`text-[10px] sm:text-xs md:text-sm font-mono transition-colors duration-500 ${
                                                            isActive ? 'text-cyan-300' : 'text-cyan-400/60'
                                                        }`}>
                                                            {item.date}
                                                        </div>
                                                        <p className={`text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed transition-colors duration-500 ${
                                                            isActive ? 'text-gray-200' : 'text-gray-400/70'
                                                        }`}>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Futuristic Mounting Posts with glow - Hidden on mobile for cleaner look */}
                                                <div className={`absolute top-full left-1/4 -translate-x-1/2 w-1.5 sm:w-2 h-6 sm:h-12 md:h-16 bg-gradient-to-b from-cyan-600 to-slate-700 rounded-b hidden sm:block transition-all duration-500`}
                                                    style={{
                                                        boxShadow: isActive 
                                                            ? 'inset 1px 0 0 rgba(255,255,255,0.2), 0 0 8px rgba(6,182,212,0.6), 2px 2px 4px rgba(0,0,0,0.4)' 
                                                            : 'inset 1px 0 0 rgba(255,255,255,0.1), 0 0 4px rgba(6,182,212,0.3), 2px 2px 3px rgba(0,0,0,0.3)'
                                                    }}
                                                />
                                                <div className={`absolute top-full right-1/4 translate-x-1/2 w-1.5 sm:w-2 h-6 sm:h-12 md:h-16 bg-gradient-to-b from-cyan-600 to-slate-700 rounded-b hidden sm:block transition-all duration-500`}
                                                    style={{
                                                        boxShadow: isActive 
                                                            ? 'inset 1px 0 0 rgba(255,255,255,0.2), 0 0 8px rgba(6,182,212,0.6), 2px 2px 4px rgba(0,0,0,0.4)' 
                                                            : 'inset 1px 0 0 rgba(255,255,255,0.1), 0 0 4px rgba(6,182,212,0.3), 2px 2px 3px rgba(0,0,0,0.3)'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Center Station Dot - Metro Style */}
                                        <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 z-20">
                                            <div 
                                                className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 sm:border-3 md:border-4 border-[#0d0e10] transition-all duration-500 ${
                                                    isActive 
                                                        ? 'bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.9),0_0_40px_rgba(6,182,212,0.5)] scale-125' 
                                                        : isPast 
                                                        ? 'bg-cyan-500/60 shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                                                        : 'bg-slate-600/40'
                                                }`} 
                                            />
                                        </div>

                                        {/* Empty side for spacing */}
                                        <div className="flex-1 hidden md:block" />
                                    </div>

                                    {/* Time Duration Label (between stations) */}
                                    {index < timelineData.length - 1 && item.daysToNext > 0 && (
                                        <div className="flex absolute left-1/2 -translate-x-1/2 justify-center items-center z-15 pointer-events-none"
                                            style={{ top: 'calc(100% + 1.5rem)' }}
                                        >
                                            <div className="flex items-center gap-1 sm:gap-2 opacity-50">
                                                <div className="w-4 sm:w-6 md:w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                                                <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold font-mono text-cyan-400/90 tracking-wider drop-shadow">
                                                    {item.daysToNext} {item.daysToNext === 1 ? 'Day' : 'Days'}
                                                </span>
                                                <div className="w-4 sm:w-6 md:w-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
