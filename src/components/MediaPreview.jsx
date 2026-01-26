import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Eagerly import all images from the posters folder
const rawPosters = import.meta.glob('../assets/poster-realeses/*.{jpeg,jpg,png,webp}', { eager: true });

const MediaPreview = () => {
    const scrollRef = useRef(null);

    // Transform glob result and sort by filename (descending for latest first)
    const featuredPosters = Object.entries(rawPosters)
        .map(([path, module]) => ({
            id: path,
            image: module.default,
            filename: path.split('/').pop()
        }))
        .sort((a, b) => b.filename.localeCompare(a.filename, undefined, { numeric: true }))
        .slice(0, 8); // Slightly more items for scrollable feel

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth * 0.8
                : scrollLeft + clientWidth * 0.8;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="media-preview" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-16 text-center"
                >
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight uppercase">
                        Visual <span className="text-blue-500">Announcements</span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Stay updated with our latest event posters. Swipe or use arrows to explore more.
                    </p>
                </motion.div>

                <div className="relative group">
                    {/* Navigation Arrows - Desktop only */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-blue-600"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-blue-600"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Horizontal Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>{`
                            .no-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {featuredPosters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex-none w-[70vw] sm:w-[50vw] md:w-[350px] snap-center"
                            >
                                <Link to="/posters" className="block cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl bg-slate-900 border border-white/5 ring-1 ring-white/10 hover:ring-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                                        <img
                                            src={poster.image}
                                            alt="Event Announcement"
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                                        {/* Content - Hint Icon */}
                                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                                            <div className="p-2 md:p-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/20 backdrop-blur-md border border-white/20 transform hover:scale-110 transition-transform">
                                                <ExternalLink size={16} className="text-white md:w-5 md:h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 md:mt-12 flex flex-col items-center gap-6">
                    <p className="text-slate-500 text-sm md:hidden animate-pulse">
                        ← Swipe to explore →
                    </p>
                    <Link
                        to="/posters"
                        className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-950 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                    >
                        View Full Gallery
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MediaPreview;
