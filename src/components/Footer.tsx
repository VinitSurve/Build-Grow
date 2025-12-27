import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-6">
                    <Link href="#home" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <span className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                           <img src="/GDG.png" alt="Build and Grow Logo" className="w-17 h-19 inline-block mb-1" /> GDG Cloud मुंबई
                        </span>
                    </Link>
                    <div className="hidden md:block w-px h-5 bg-white/10" />

                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href='https://gdg.community.dev/gdg-cloud-mumbai/' target='_blank' rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">About Us</a>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Terms</Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>English</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
