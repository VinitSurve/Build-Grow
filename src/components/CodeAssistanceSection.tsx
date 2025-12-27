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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/health.png" alt="Health Tech" className="w-full h-full object-cover rounded-xl" />
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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/fintech.jpg" alt="FinTech" className="w-full h-full object-cover rounded-xl" />
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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/cyber.jpg" alt="Cyber Security" className="w-full h-full object-cover rounded-xl" />
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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/edutech.jpg" alt="Edu Tech" className="w-full h-full object-cover rounded-xl" />
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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/agritech.png" alt="Agri Tech" className="w-full h-full object-cover rounded-xl" />
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
            <div className="relative bg-[#0d0e10] rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center justify-center">
              <img src="/open_innovation.png" alt="Open Innovation" className="w-full h-full object-cover rounded-xl" />
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