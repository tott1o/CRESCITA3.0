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
        <section id="media-preview" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden text-center">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight uppercase">
                        Visual <span className="text-blue-500">Announcements</span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Stay updated with our latest event posters and announcements. Explore the highlights and key information at a glance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {featuredPosters.map((poster, index) => (
                        <motion.div
                            key={poster.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg md:rounded-2xl bg-slate-900 border border-white/5 ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-500">
                                <img
                                    src={poster.image}
                                    alt={poster.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                                {/* Content on Hover - Icon only */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                                        <ExternalLink size={20} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => window.open('https://www.instagram.com/ieeesblbscek/', '_blank')}
                        className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-950 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                    >
                        View Full Gallery
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MediaPreview;
