import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Import poster assets
import poster1 from '../assets/poster-realeses/WhatsApp Image 2026-01-06 at 9.30.16 PM.jpeg';
import poster2 from '../assets/poster-realeses/WhatsApp Image 2026-01-09 at 5.50.41 PM.jpeg';
import poster3 from '../assets/poster-realeses/WhatsApp Image 2026-01-11 at 12.52.13 PM.jpeg';

const MediaPreview = () => {
    const featuredPosters = [
        {
            id: 1,
            title: "Call for Volunteers",
            image: poster1,
            category: "Announcement"
        },
        {
            id: 2,
            title: "EventDate Announced",
            image: poster2,
            category: "Announcement"
        },
        {
            id: 3,
            title: "Early Bird",
            image: poster3,
            category: "Registration"
        }
    ];

    return (
        <section id="media-preview" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Official Releases
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                        >
                            VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">ANNOUNCEMENTS</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg leading-relaxed"
                        >
                            Explore major event announcements,
                            discover all official Crescita 3.0 promotional materials in one place.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => window.open('#', '_blank')}
                        className="group hidden md:flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl shadow-white/5 whitespace-nowrap"
                    >
                        View Full Gallery
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {featuredPosters.map((poster, index) => (
                        <motion.div
                            key={poster.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl bg-slate-900 border border-white/5 ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-500">
                                <img
                                    src={poster.image}
                                    alt={poster.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Content on Hover */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 block">
                                            {poster.category}
                                        </span>
                                        <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4">
                                            {poster.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-[10px] md:text-sm font-medium">
                                            View Details <ExternalLink size={16} className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 md:hidden flex justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-slate-300 font-medium active:bg-white/5 transition-colors">
                        Explore All Media <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MediaPreview;
