import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, X, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Eagerly import all images from the posters folder
const rawPosters = import.meta.glob('../assets/poster-realeses/*.{jpeg,jpg,png,webp}', { eager: true });

// Manual configuration for poster details and links
const POSTER_CONFIG = {
    "1": {
        title: "Call for Volunteers",
        category: "Announcement",
        link: "https://forms.gle/LAWhizB5BKzR3LyG6",
        linkText: "Apply Now"
    },
    "3": {
        title: "Early Bird Registration",
        category: "Registration",
        link: "https://bit.ly/CRESCITAEarlyBird",
        linkText: "Register Now"
    },
    "2": {
        title: "Event Date Announced",
        category: "Announcement"
    },
    "4": {
        title: "Call for Publicity Volunteers",
        category: "Announcement",
        link: "https://forms.gle/6tAhxRLw9xSYroX57",
        linkText: "Register Now"
    },
    "5": {
        title: "AI tools: everyone must know",
        category: "pre-event",
        link: "https://forms.gle/Qws5atHi3hNyrDSdA",
        linkText: "Register Now"
    },
    "6": {
        title: "Publicity Volunteers Awards",
        category: "Announcement",
        link: "https://forms.gle/Qws5atHi3hNyrDSdA",
        linkText: "Register Now"
    },
    "7": {
        title: "Early Bird Registration Closed",
        category: "Announcement",
    },
    "8": {
        title: "Introdution to UI/UX",
        category: "pre-event",
        link: "https://forms.gle/Dj5z7dgCCQc6sDG77",
        linkText: "Register Now"
    },
    "9": {
        title: "Normal Registration Open",
        category: "Registration",
        link: "https://bit.ly/CRESICTA3registration",
        linkText: "Register Now"
    },
    "10": {
        title: "AI tools: everyone must know successfully completed",
        category: "pre-event"
    },
    "11": {
        title: "Introduction to UI/UX successfully completed",
        category: "pre-event"
    },
    "12": {
        title: "3+ CERTIFICATES : worth KTU activity points",
        category: "Registration",
        link: "https://bit.ly/CRESICTA3registration",
        linkText: "Register Now"
    },
    "13": {
        title: "From Campus to Career: A Roadmap to Industry & Placements",
        category: "pre-event",
        link: "https://forms.gle/pgfXftxSWsXd3iPp8",
        linkText: "Register Now"
    },
    "14": {
        title: " CRESCITA' 3.0 – Camp Fire Night ",
        category: "event",
        link: "https://bit.ly/CRESICTA3registration",
        linkText: "Register Now"
    }
};

const PostersGallery = () => {
    const [selectedPoster, setSelectedPoster] = useState(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Disable scroll when modal is open
    useEffect(() => {
        if (selectedPoster) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedPoster]);

    const allPosters = Object.entries(rawPosters)
        .map(([path, module]) => ({
            id: path,
            image: module.default,
            filename: path.split('/').pop()
        }))
        .sort((a, b) => b.filename.localeCompare(a.filename, undefined, { numeric: true }))
        .map((poster) => {
            // Find metadata based on numeric filename
            const idMatch = poster.filename.match(/^(\d+)/);
            const id = idMatch ? idMatch[1] : null;
            const config = POSTER_CONFIG[id] || {};

            return {
                ...poster,
                title: config.title || "Visual Announcement",
                category: config.category || "Announcement",
                link: config.link || null,
                linkText: config.linkText || "Learn More"
            };
        });

    // Animation Variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 40,
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            filter: 'blur(10px)',
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 20, stiffness: 200 }
        }
    };

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
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedPoster(poster)}
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
                                    <div className="p-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/20 backdrop-blur-md border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                                        <ExternalLink size={20} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedPoster && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                            {/* Backdrop */}
                            <motion.div
                                variants={backdropVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                onClick={() => setSelectedPoster(null)}
                                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            />

                            {/* Modal - Image Centric */}
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] max-h-[90vh] flex flex-col items-center"
                                style={{ width: 'min-content' }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedPoster(null)}
                                    className="absolute top-3 right-3 z-20 p-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all active:scale-90"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>

                                {/* Image Section */}
                                <motion.div variants={itemVariants} className="relative w-full">
                                    <img
                                        src={selectedPoster.image}
                                        alt={selectedPoster.title}
                                        className="block object-contain"
                                        style={{
                                            maxHeight: 'min(55vh, 500px)',
                                            maxWidth: 'min(85vw, 500px)',
                                            width: 'auto',
                                            height: 'auto'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Content Section */}
                                <div className="p-6 md:p-8 bg-slate-900 w-full flex flex-col items-center min-w-[300px]">
                                    <motion.div variants={itemVariants} className="mb-2">
                                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                                            {selectedPoster.category}
                                        </span>
                                    </motion.div>

                                    <motion.h2
                                        variants={itemVariants}
                                        className="text-2xl md:text-3xl font-bold mb-4 text-white text-center tracking-tight leading-tight"
                                    >
                                        {selectedPoster.title}
                                    </motion.h2>

                                    <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full items-center">
                                        {selectedPoster.link ? (
                                            <a
                                                href={selectedPoster.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group w-full max-w-[240px] px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
                                            >
                                                {selectedPoster.linkText}
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => setSelectedPoster(null)}
                                                className="group w-full max-w-[240px] px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-base hover:bg-white/10 active:scale-95 transition-all"
                                            >
                                                Back to Gallery
                                            </button>
                                        )}

                                        {selectedPoster.link && (
                                            <button
                                                onClick={() => setSelectedPoster(null)}
                                                className="text-slate-500 text-sm font-medium hover:text-white transition-colors py-1"
                                            >
                                                Close
                                            </button>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PostersGallery;
