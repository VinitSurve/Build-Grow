"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  { id: "health", label: "Health Tech" },
  { id: "fintech", label: "FinTech" },
  { id: "cyber", label: "Cyber Security" },
  { id: "edu", label: "Edu Tech" },
  { id: "agri", label: "Agri Tech" },
  { id: "open", label: "Open Innovation" },
];

export default function CodeAssistanceSection() {
  const [activeTab, setActiveTab] = useState("health");
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTabIndex = tabs.findIndex((t) => t.id === activeTab);
  const sequenceNumber = (activeTabIndex + 1).toString().padStart(2, "0");

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

  // Animate content change
  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "health":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  Health Tech: Smarter healthcare and diagnostics
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Build AI solutions to improve diagnostics, patient monitoring,
                and healthcare workflows.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center text-blue-400">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center opacity-80">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full stroke-current fill-none"
                >
                  <path
                    d="M10,50 L20,50 L30,20 L45,80 L60,10 L75,50 L90,50"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
              </div>
              <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 bg-white/5 border border-white/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs">
                ✦ Real-time Patient Monitoring
              </div>
            </div>
          </div>
        );
      case "fintech":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  FinTech: Financial automation and fraud prevention
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Create tools for payment automation, risk analysis, or real-time
                fraud detection.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex flex-col justify-center items-center text-green-400">
              <div className="flex gap-2 sm:gap-3 md:gap-4 items-end h-20 sm:h-28 md:h-32">
                <div className="w-4 sm:w-5 md:w-6 bg-green-500/20 rounded-t h-1/2" />
                <div className="w-4 sm:w-5 md:w-6 bg-green-500/40 rounded-t h-3/4" />
                <div className="w-4 sm:w-5 md:w-6 bg-green-500/60 rounded-t h-full shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                <div className="w-4 sm:w-5 md:w-6 bg-green-500/40 rounded-t h-2/3" />
                <div className="w-4 sm:w-5 md:w-6 bg-green-500/80 rounded-t h-[90%]" />
              </div>
              <div className="mt-4 sm:mt-6 md:mt-8 text-[10px] sm:text-xs text-gray-500 font-mono">
                PREDICTED MARKET GROWTH +14.2%
              </div>
            </div>
          </div>
        );
      case "cyber":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  Cyber Security: AI-powered protection and threat detection
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Design systems that leverage AI to detect, prevent, and respond
                to security threats.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-red-500/40 rounded-[20%] relative flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <div className="w-8 h-10 sm:w-9 sm:h-11 md:w-10 md:h-12 bg-red-500/20 rounded-sm relative">
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 border-2 border-red-400/50 rounded-full" />
                </div>
                <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 bg-red-500 text-white text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-bold">
                  STP THREAT
                </div>
              </div>
            </div>
          </div>
        );
      case "edu":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Edu Tech: Learning accessibility and skill-building platforms
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Build platforms that personalize learning, assessment, and skill
                development at scale.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-0 shadow-2xl min-h-[400px] overflow-hidden flex items-center justify-center">
              <div className="relative w-48 h-32 border-2 border-purple-500/30 rounded-lg p-4 bg-purple-500/5">
                <div className="h-2 w-full bg-white/10 rounded mb-2" />
                <div className="h-2 w-3/4 bg-white/10 rounded mb-4" />
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square bg-purple-500/40 rounded-sm" />
                  <div className="aspect-square bg-purple-500/20 rounded-sm" />
                  <div className="aspect-square bg-purple-500/60 rounded-sm" />
                  <div className="aspect-square bg-purple-500/10 rounded-sm" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                  LEARNING PATH
                </div>
              </div>
            </div>
          </div>
        );
      case "agri":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Agri Tech: Smart farming and agricultural innovations
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Use AI and IoT to optimize crop yields, resource usage, and
                supply-chain visibility.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-8 shadow-2xl min-h-[350px] flex flex-col items-center justify-center text-teal-400">
            <img
                  src="/AI.jpg"
                  alt="Agri Tech Icon"
                  className="w-full h-58 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full" />
                {/* <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path d="M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" />
                                    <path d="M12,9L15,14H9L12,9Z" className="opacity-50" />
                                </svg> */}
              </div>
              <div className="mt-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] text-teal-500 font-mono tracking-widest uppercase">
                  Precision Analysis Active
                </span>
              </div>
            </div>
          </div>
        );
      case "open":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Open Innovation: Collaborative development and idea sharing
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Foster open-source projects and platforms that encourage
                community-driven innovation.
              </p>
            </div>
            <div className="relative bg-[#0d0e10] rounded-2xl border border-white/10 p-8 shadow-2xl min-h-[350px] flex flex-col items-center justify-center text-teal-400">
            <img
                  src="/AI.jpg"
                  alt="Agri Tech Icon"
                  className="w-full h-58 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full" />
                {/* <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path d="M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" />
                                    <path d="M12,9L15,14H9L12,9Z" className="opacity-50" />
                                </svg> */}
              </div>
              <div className="mt-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] text-teal-500 font-mono tracking-widest uppercase">
                  Precision Analysis Active
                </span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="animate-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Problem Statements
          </h2>

          {/* Tabs Navigation */}
          <div className="animate-reveal flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-4">
            {tabs.map((tab) => {
              // Google-like RGB colors for each tab
              const colorMap: Record<string, string> = {
                health: "234,67,53", // red (Google Red)
                fintech: "52,168,83", // green
                cyber: "66,133,244", // blue
                edu: "251,188,5", // yellow
                agri: "0,172,193", // teal
              };

              const rgb = colorMap[tab.id] || "59,130,246";
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "text-white"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: `rgba(${rgb}, 0.12)`,
                          borderColor: `rgba(${rgb}, 0.28)`,
                          boxShadow: `0 8px 30px rgba(${rgb}, 0.12)`,
                        }
                      : undefined
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#16171a] rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 border border-white/5 relative overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center">
          {/* Sequence Number */}
          <div className="absolute top-4 sm:top-6 md:top-8 left-6 sm:left-8 md:left-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/[0.03] select-none pointer-events-none">
            {sequenceNumber}
          </div>

          <div ref={contentRef} className="w-full h-full relative z-10">
            {renderContent()}
          </div>

          {/* Background glow specific to this section */}
          <div className="absolute inset-x-0 bottom-[-20%] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}