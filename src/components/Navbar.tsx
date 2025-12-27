"use client";

import { useState, useEffect, useRef } from 'react';

const navLinks = [
    { label: 'Collaboration', href: '#collaboration' },
    { label: 'Insights', href: '#insights' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Problem Statements', href: '#problems' },
    { label: 'Our Journey', href: '#our-journey' },
    { label: 'Organizers', href: '#organizers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Community', href: '#community' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = 64; // h-16 = 64px
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] overflow-hidden">
            {/* Glass shine overlay */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                {/* Left: Logo */}
                <div className="flex items-center mr-4 lg:mr-8">
                    <a 
                        href="#journey" 
                        onClick={(e) => handleScroll(e, '#home')}
                        className="flex items-center gap-2 group"
                    >
                       <span className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                           <img src="/GDG.png" alt="Build and Grow Logo" className="w-17 h-19 inline-block mb-1" /> GDG Cloud मुंबई
                        </span>
                    </a>
                </div>

                {/* Center: Nav (visible on extra-large screens, centered) */}
                <div className="hidden xl:flex flex-1 justify-center">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.label} 
                                href={link.href} 
                                label={link.label}
                                onClick={handleScroll}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Register CTA (visible on extra-large screens) */}
                <div className="hidden xl:flex items-center gap-4">
                    <a
                        href="https://gdg.community.dev/events/details/google-gdg-cloud-mumbai-presents-build-and-grow-ai-hackathon-20/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                    >
                        Register Now
                    </a>
                </div>

                {/* Mobile Menu Button (tablet + mobile) — positioned top-right */}
                <button
                    className="xl:hidden absolute right-4 top-3 text-gray-300 p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-[#0b0c10] border-b border-white/10">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <MobileNavLink 
                                key={link.label}
                                href={link.href} 
                                label={link.label}
                                onClick={handleScroll}
                            />
                        ))}
                        <div className="pt-4 border-t border-white/10">
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#journey');
                                    if (target) {
                                        const navHeight = 64;
                                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                                        setIsMobileMenuOpen(false);
                                    }
                                }}
                                className="block w-full text-center bg-[#1a73e8] hover:bg-[#1967d2] text-white rounded-full py-2.5 font-medium"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Futuristic blue progress indicator at bottom */}
            <NavbarProgressBar />
        </nav>
    );
}

function NavLink({ 
    href, 
    label, 
    onClick 
}: { 
    href: string; 
    label: string; 
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    return (
        <a 
            href={href} 
            onClick={(e) => onClick(e, href)}
            className="text-sm font-medium text-[#c4c7c5] hover:text-white transition-colors"
        >
            {label}
        </a>
    );
}

function MobileNavLink({ 
    href, 
    label, 
    onClick 
}: { 
    href: string; 
    label: string; 
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    return (
        <a 
            href={href} 
            onClick={(e) => onClick(e, href)}
            className="block text-base font-medium text-[#c4c7c5] hover:text-white py-2 transition-colors"
        >
            {label}
        </a>
    );
}

// Progress bar at bottom of navbar reflecting scroll progress
function NavbarProgressBar() {
    const [scroll, setScroll] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
            setScroll(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="absolute left-0 bottom-0 w-full h-1 z-20">
            <div
                ref={barRef}
                className="h-full origin-left rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 shadow-[0_0_8px_2px_rgba(30,144,255,0.5)] transition-transform duration-200"
                style={{ transform: `scaleX(${scroll})`, width: '100%' }}
            />
        </div>
    );
}
