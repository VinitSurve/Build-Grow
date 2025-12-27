"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BuildSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Reveal animation
        gsap.fromTo(
            containerRef.current.querySelectorAll(".animate-reveal"),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );

        // Frame movement animation (Parallax)
        gsap.to(containerRef.current.querySelectorAll(".animate-frame"), {
            y: (i) => (i % 2 === 0 ? -40 : 40), // Opposite directions for variety
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });
    }, []);

    return (
        <section id="build" ref={containerRef} className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            {/* Complex Architectural Framing Lines from Image */}
            <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0">
                <div className="max-w-[1440px] mx-auto h-full relative">
                    {/* Top Horizontal Line shifted higher */}
                    <div className="animate-frame absolute top-[120px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                    {/* Left Frame Step shifted higher */}
                    <div className="animate-frame absolute top-[120px] left-[5%] w-px h-32 bg-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
                    <div className="animate-frame absolute top-[252px] left-[5%] w-8 h-px bg-blue-500/30" />
                    <div className="animate-frame absolute top-[252px] left-[calc(5%+32px)] w-px h-[800px] bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.2)]" />

                    {/* Right Frame Step shifted higher */}
                    <div className="animate-frame absolute top-[120px] right-[5%] w-px h-32 bg-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
                    <div className="animate-frame absolute top-[252px] right-[5%] w-8 h-px bg-blue-500/30" />
                    <div className="animate-frame absolute top-[252px] right-[calc(5%+32px)] w-px h-[800px] bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.2)]" />

                    {/* Glowing bends shifted higher */}
                    <div className="animate-frame absolute top-[120px] left-[5%] w-4 h-4 border-t border-l border-blue-400/50 rounded-tl-sm" />
                    <div className="animate-frame absolute top-[120px] right-[5%] w-4 h-4 border-t border-r border-blue-400/50 rounded-tr-sm" />
                </div>
            </div>

            <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="animate-reveal text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-4 sm:mb-6">
                    Start building
                </h2>
                <p className="animate-reveal text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light px-4">
                    Get started building with cutting-edge AI models and tools
                </p>
            </div>

            {/* Main Container Box from Image */}
            <div className="max-w-7xl mx-auto bg-[#16171a] rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-10 lg:p-16 border border-white/5 relative overflow-hidden shadow-2xl z-10">
                {/* Subtle background glow */}
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                    {/* Main Card Section (Top half of the container) */}
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-reveal">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                                Integrate Google AI models with an API key
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg">
                                Build with cutting-edge AI models, like Gemini, Imagen, and Veo, from Google DeepMind
                            </p>
                            <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-blue-500/20">
                                View Gemini API docs
                            </button>
                        </div>

                        {/* Main Visual: Stacked Code Layers */}
                        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center animate-reveal">
                            <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px] aspect-[4/3] transform translate-x-2 sm:translate-x-4">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute inset-0 bg-[#2d2e31] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                                        style={{
                                            transform: `perspective(1000px) rotateX(45deg) rotateZ(-20deg) translateZ(${i * 20}px) translateX(${i * 10}px) translateY(${-i * 10}px)`,
                                            opacity: 0.2 + (i * 0.2),
                                        }}
                                    >
                                        {/* Mock Code Content */}
                                        <div className="p-4 space-y-2 opacity-50">
                                            <div className="h-1.5 w-[30%] bg-blue-400/50 rounded" />
                                            <div className="h-1.5 w-[80%] bg-white/10 rounded" />
                                            <div className="h-1.5 w-[60%] bg-white/10 rounded" />
                                            <div className="h-1.5 w-[70%] bg-white/10 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Grid (Bottom half of the container) */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        {/* Card 1: Integrate models into apps */}
                        <div className="bg-[#202124] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start animate-reveal group">
                            {/* Icon Mockup */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 bg-black rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                {/* Database/API icon visual */}
                                <div className="relative scale-125">
                                    <div className="w-12 h-6 border-2 border-blue-500/50 rounded-full mb-1" />
                                    <div className="w-12 h-6 border-x-2 border-b-2 border-blue-500/50 rounded-full -mt-3" />
                                    <div className="w-12 h-6 border-x-2 border-b-2 border-blue-500/30 rounded-full -mt-3" />
                                    {/* Orbital points */}
                                    <div className="absolute -left-6 top-1/2 w-4 h-4 bg-blue-400 rounded-lg shadow-glow" />
                                    <div className="absolute -right-4 top-1/4 w-3 h-3 bg-blue-600 rounded-full" />
                                </div>
                            </div>

                            <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white">Integrate models into apps</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                                    Unlock AI capabilities for your apps with a simple call to the Gemini API.
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors mx-auto md:mx-0">
                                    <span className="text-blue-400">✦</span> Gemini API docs
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Explore AI models */}
                        <div className="bg-[#202124] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start animate-reveal group">
                            {/* Icon Mockup */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 bg-black rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />
                                {/* UI Prompt mockup */}
                                <div className="relative w-24 space-y-2">
                                    <div className="h-2 w-3/4 bg-blue-500/30 rounded" />
                                    <div className="h-2 w-full bg-white/10 rounded" />
                                    <div className="pt-2 flex justify-center">
                                        <div className="bg-[#1a73e8]/80 text-[10px] text-white px-3 py-1 rounded-full flex items-center gap-1">
                                            <span>✦</span> Run
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white">Explore AI models</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                                    Quickly evaluate AI models, develop prompts, and transform ideas into code.
                                </p>
                                <button className="flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors mx-auto md:mx-0">
                                    <span className="text-blue-400">✦</span> Google AI Studio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
