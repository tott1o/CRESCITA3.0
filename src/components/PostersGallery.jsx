import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Eagerly import all images from the posters folder
const rawPosters = import.meta.glob('../assets/poster-realeses/*.{jpeg,jpg,png,webp}', { eager: true });

const PostersGallery = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allPosters = Object.entries(rawPosters)
        .map(([path, module]) => ({
            id: path,
            image: module.default,
            filename: path.split('/').pop()
        }))
        .sort((a, b) => b.filename.localeCompare(a.filename))
        .map((poster) => {
            let title = "Visual Announcement";
            let category = "Announcement";

            if (poster.filename.includes("2026-01-06")) title = "Call for Volunteers";
            else if (poster.filename.includes("2026-01-09")) title = "EventDate Announced";
            else if (poster.filename.includes("2026-01-11")) title = "Early Bird", category = "Registration";
            else if (poster.filename.includes("2026-01-13")) title = "Latest Update";

            return {
                id: poster.id,
                title,
                image: poster.image,
                category
            };
        });

    return (
        <section className="min-h-screen py-12 md:py-24 bg-slate-950 relative overflow-hidden text-center pt-24 md:pt-32">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 md:mb-16"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tight uppercase">
                        Full <span className="text-blue-500">Gallery</span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Explore our complete collection of event posters and visual announcements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {allPosters.map((poster, index) => (
                        <motion.div
                            key={poster.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 6) * 0.1 }}
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
            </div>
        </section>
    );
};

export default PostersGallery;
