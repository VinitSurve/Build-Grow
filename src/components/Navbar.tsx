"use client";

import { useState } from 'react';

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                {/* Left: Logo */}
                <div className="flex items-center mr-4 lg:mr-8">
                    <a 
                        href="#journey" 
                        onClick={(e) => handleScroll(e, '#journey')}
                        className="flex items-center gap-2 group"
                    >
                        <span className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                            Build & Grow
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
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            // Scroll to hero or open registration link
                            const target = document.querySelector('#journey');
                            if (target) {
                                const navHeight = 64;
                                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="bg-[#1a73e8] hover:bg-[#1967d2] text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                        Register Now
                    </button>
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
