"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const apps = [
    {
        id: "tldraw",
        title: "Tldraw",
        description: "Prototyping a new natural language computing experience on an infinite canvas with Gemini 2.0",
        logo: "tldraw",
        gradient: "from-[#0f172a] via-[#1e293b] to-[#334155]",
    },
    {
        id: "rooms",
        title: "Rooms",
        description: "Unlocking richer avatar interactions with Gemini 2.0 text and audio capabilities",
        logo: "Rooms",
        gradient: "from-[#1a1c1e] via-[#3d3030] to-[#2c2e30]",
    },
    {
        id: "toonsutra",
        title: "Toonsutra",
        description: "Leveraging contextual multilingual translation abilities of Gemini 2.0 to make comics and webtoons accessible to audiences in India across regional languages.",
        logo: "toonsutra",
        gradient: "from-[#1a1c1e] via-[#4d3a2e] to-[#1a1c1e]",
    },
    {
        id: "viggle",
        title: "Viggle",
        description: "Experimenting with Gemini 2.0 to create virtual characters and audio narration for their AI powered video platform",
        logo: "VIGGLE",
        gradient: "from-[#062016] via-[#2d4a3e] to-[#062016]",
    },
    {
        id: "sublayer",
        title: "Sublayer",
        description: "See how the Ruby-based AI agent framework empowers developer teams to be more productive with the power of Gemini models.",
        logo: "SUBLAYER",
        gradient: "from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]",
    },
    {
        id: "sourcegraph",
        title: "Sourcegraph",
        description: "Learn how Cody AI saw big quality gains using Gemini's massive context window.",
        logo: "Sourcegraph",
        gradient: "from-[#1e1431] via-[#3a2a5d] to-[#1e1431]",
    },
    {
        id: "agentops",
        title: "AgentOps",
        description: "Explore how AgentOps provides cost-effective and powerful LLM-powered agent observability for enterprises using Gemini API.",
        logo: "AgentOps",
        gradient: "from-[#1a1c1e] via-[#2d2e31] to-[#1a1c1e]",
    }
];

const pastMedia = [
    { title: "Community Gathering", description: "Participants networking and sharing ideas", image: "/20250503_114742_imgupscaler.ai_V1(Fast)_4K.png" },
    { title: "Workshop Snapshot", description: "Hands-on session during the event", image: "/IMG_0758.JPG" },
    { title: "Demo Highlights", description: "Projects showcased on demo day", image: "/IMG_0678_imgupscaler.ai_V1(Fast)_4K.png" },
    { title: "Stage Moments", description: "Awards and closing highlights", image: "/IMG_0684_imgupscaler.ai_V1(Fast)_4K.png" }
];

export default function AppShowcaseSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
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

        // Pause marquee animation on hover/focus for accessibility
        const track = scrollContainerRef.current;
        if (track) {
            const pause = () => { (track.style as any).animationPlayState = "paused"; };
            const resume = () => { (track.style as any).animationPlayState = "running"; };
            track.addEventListener("mouseenter", pause);
            track.addEventListener("mouseleave", resume);
            track.addEventListener("focusin", pause);
            track.addEventListener("focusout", resume);

            return () => {
                track.removeEventListener("mouseenter", pause);
                track.removeEventListener("mouseleave", resume);
                track.removeEventListener("focusin", pause);
                track.removeEventListener("focusout", resume);
            };
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 400;
        scrollContainerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section id="journey" ref={sectionRef} className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
            <div id="our-journey" className="sr-only" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 md:space-y-12">
                <h2 className="animate-reveal text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">Our Journey</h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg text-center text-white px-4">Highlights from our previous events and community activities</p>

                {/* Infinite photos marquee using duplicated list for seamless loop */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-[#0f1113] py-4 sm:py-6 md:py-8">
                    <div className="marquee" role="region" aria-label="Event highlights carousel">
                        <div className="marquee-track" ref={scrollContainerRef}>
                            {/** render two copies for seamless loop */}
                            {[0, 1].map((copyIdx) => (
                                <div key={copyIdx} className="marquee-group flex gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8">
                                    {pastMedia.map((m, i) => {
                                        const titleId = `pastmedia-title-${copyIdx}-${i}`;
                                        return (
                                            <figure
                                                key={`${copyIdx}-${i}`}
                                                className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[420px] flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#0b0c0d] shadow-md"
                                                role="group"
                                                aria-labelledby={titleId}
                                            >
                                                <div className="h-56 md:h-64 relative">
                                                    <img src={m.image} alt={m.title} className="w-full h-full object-cover block" />
                                                </div>
                                                <figcaption className="p-4 bg-[#070708]">
                                                    <h3 id={titleId} className="text-sm md:text-base text-white font-medium">{m.title}</h3>
                                                    <p className="text-xs text-gray-400 mt-1">{m.description}</p>
                                                </figcaption>
                                            </figure>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}

