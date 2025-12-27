import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-8 px-2 sm:px-4 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-6 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full md:w-auto">
                    <Link href="#home" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <span className="text-lg sm:text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                           <img src="/GDG.png" alt="Build and Grow Logo" className="w-10 h-10 sm:w-14 sm:h-14 inline-block mb-1" /> GDG Cloud मुंबई
                        </span>
                    </Link>
                    <div className="hidden md:block w-px h-5 bg-white/10" />
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 w-full md:w-auto">
                      <a href='https://gdg.community.dev/gdg-cloud-mumbai/' target='_blank' rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">About Us</a>
                      <Link href="#" className="hover:text-blue-400 transition-colors">Privacy</Link>
                      <Link href="#" className="hover:text-blue-400 transition-colors">Terms</Link>
                      <span className="hidden sm:inline">|</span>
                      <a href="https://www.linkedin.com/company/gdg-cloud-mumbai/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                      <a href="https://www.instagram.com/gdgcloudmumbai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
                      <a href="https://x.com/GDGCloudMumbai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter/X</a>
                      <a href="https://www.youtube.com/@GDGCloudMumbai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">YouTube</a>
                      <a href="https://www.facebook.com/gdgcloudmumbai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Facebook</a>
                      <a href="mailto:gcdc.mumbai@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
                    </div>
                </div>
                {/* Language selector remains aligned right */}
                <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-6 w-full md:w-auto mt-4 sm:mt-0">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>English</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
