"use client";

import { useEffect, useRef } from "react";
import { TypewriterCode } from "./TypewriterCode";
import gsap from "gsap";


export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);

    // The text to be typed out
    const fullText = "Create an app that analyzes customer feedback and generates a report that follows the attached style guidelines.";

    // 1. Handle Entrance Animation - Responsive
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Responsive transform values
        const getTransform = () => {
            if (window.innerWidth < 640) return { x: -20, finalX: 0 }; // Mobile
            if (window.innerWidth < 1024) return { x: -40, finalX: 0 }; // Tablet
            return { x: -60, finalX: -130 }; // Desktop
        };

        const { x, finalX } = getTransform();

        // Start state
        gsap.set(card, { opacity: 0, scale: 0.9, x, y: 30 });

        // Animate to
        gsap.to(card, {
            opacity: 1,
            scale: 1,
            x: finalX,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: 0.3
        });

        // Update on resize
        const handleResize = () => {
            const { finalX: newX } = getTransform();
            gsap.to(card, { x: newX, duration: 0.3 });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="home" className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
            {/* Using global ContinuousBackground */}

            <div className="relative z-10 max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                    {/* Announcement Badge */}

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-white leading-[1.1]" data-speed="1.1">
                        Build & Grow <br/> AI Hackathon 2.0
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-[#9aa0a6] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed" data-speed="1.05">
                        Join India's premier developer hackathon. Build innovative solutions with Google technologies, connect with mentors, and compete for amazing prizes.
                    </p>

                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                        <a
                            href="https://gdg.community.dev/events/details/google-gdg-cloud-mumbai-presents-build-and-grow-ai-hackathon-20/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 rounded-full bg-[#1a73e8] hover:bg-[#1967d2] text-white font-medium text-lg sm:text-xl transition-all shadow-[0_0_28px_rgba(26,115,232,0.35)] hover:shadow-[0_0_40px_rgba(26,115,232,0.55)] flex items-center justify-center"
                        >
                            Register Now
                        </a>
                    </div>
                </div>

                {/* Right Column: Code Editor - Now visible on all screens */}
                <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[480px] xl:max-w-[580px]">
                        <TypewriterCode />
                    </div>
                </div>
            </div>
         

            {/* Removed the line division for better blending */}
        </section>
    );
}
