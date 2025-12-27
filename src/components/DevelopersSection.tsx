"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const developers = [
  {
    name: "Vinit Surve",
    title: "Full Stack Developer",
    affiliation: "GDG OC Organizer • GDG Cloud Mumbai Member",
    image: "/Vinit Surve.jpg",
    github: "https://github.com/VinitSurve",
    linkedin: "https://www.linkedin.com/in/surve-vinit/",
    email: "survevinit56@gmail.com",
  },
  {
    name: "Abdullah Shaikh",
    title: "UI UX Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Abdullah Shaikh.jpeg",
    github: "https://github.com/elite24shaikh",
    linkedin: "https://www.linkedin.com/in/abdullahs24",
    email: "hello.abdullabdev@gmail.com",
  },
  {
    name: "Yash Agrawal",
    title: "Developer & Data Scientist",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/yash-agrawal.jpg",
    github: "https://github.com/agrawal-yash",
    linkedin: "https://www.linkedin.com/in/yash-agrawal04",
    email: "agrawal.yash.g@gmail.com",
  },
  {
    name: "Durgesh Keshri",
    title: "GDG Cloud Mumbai Member, Call me for swags",
    affiliation: "",
    image: "/Durgesh Keshri.jpg",
    github: "https://github.com/Durgeshkeshri",
    linkedin: "https://www.linkedin.com/in/durgesh-keshri-89712b201/",
    email: "durgeshkeshri7@gmail.com",
  },
  {
    name: "Nupur Bhoir",
    title: "UI UX & Graphics Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Nupur Bhoir.jpg",
    github: "https://github.com/Nupurbhoir",
    linkedin: "https://www.linkedin.com/in/nupur-bhoir-ab1499329/",
    email: "nupurbhoir21@gmail.com",
  },
  {
    name: "Grishma Thakare",
    title: "Full Stack Dev",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Grishma Thakur.jpeg",
    github: "https://github.com/grishma-blip",
    linkedin: "https://www.linkedin.com/in/grishma-thakare-793732285/",
    email: "grishmathakare21@gmail.com",
  },
  {
    name: "Siddharth Reddy",
    title: "Full Stack Dev & Editor",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Siddharth Reddy.jpg",
    github: "https://github.com/SidReddy-24",
    linkedin: "https://www.linkedin.com/in/the-siddharth-reddy",
    email: "sidreddy.onwork@gmail.com",
  },
];

export default function DevelopersSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || hasPlayedRef.current) {
      setAnimationComplete(true);
      return;
    }

    // Play animation: reveal photos one-by-one when section scrolls into view
    hasPlayedRef.current = true;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const cardsContainer = cardsRef.current;
        const photos = cardsContainer ? Array.from(cardsContainer.querySelectorAll('.dev-photo')) as HTMLElement[] : [];

        if (prefersReducedMotion || photos.length === 0) {
          // show photos immediately
          photos.forEach((p) => { p.style.opacity = '1'; p.style.transform = 'none'; });
        } else {
          gsap.set(photos, { opacity: 0, scale: 0.98 });
          gsap.to(photos, { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out', stagger: 0.08 });
        }

        setAnimationComplete(true);
        observer.disconnect();
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // typing function removed (terminal UI disabled)

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Volunteers</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto mt-2 px-4">Meet the volunteers and contributors behind this project.</p>
        </div>

        {/* Volunteer Cards */}
        <div ref={cardsRef} className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6`}>
          {developers.map((d, i) => (
            <div key={i} className="developer-card bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md border border-white/6 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:-translate-y-2 transition-transform shadow-xl hover:shadow-indigo-600/20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 ring-2 ring-indigo-400/20 shadow-md">
                {d.image ? (
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover dev-photo opacity-0 scale-95" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white text-xl font-bold dev-photo opacity-0 scale-95">{d.name[0]}</div>
                )}
              </div>
              <div className="flex-1 w-full">
                <div className="text-white font-semibold text-sm sm:text-base md:text-lg">{d.name}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{d.title}{d.affiliation ? ` · ${d.affiliation}` : ""}</div>
                <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2">
                  <a href={d.github} aria-label="github" className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-[#24292e] text-white px-2.5 sm:px-3 py-1 rounded-full border border-white/6 hover:brightness-90">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98.01 1.97.13 2.9.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.42.37.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.57C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                    <span className="hidden xs:inline">GitHub</span>
                  </a>
                  <a href={d.linkedin} aria-label="linkedin" className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-[#0A66C2] text-white px-2.5 sm:px-3 py-1 rounded-full border border-white/6 hover:brightness-95">LinkedIn</a>
                  <a href={`mailto:${d.email}`} className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-[#D44638] text-white px-2.5 sm:px-3 py-1 rounded-full border border-white/6 hover:brightness-95">Email</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
