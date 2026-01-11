import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Eagerly import images from assets
const rawImages1 = import.meta.glob('../assets/crescita1.0/*.*', { eager: true });
const rawImages2 = import.meta.glob('../assets/crescita2.0/*.*', { eager: true });

// Helper to convert glob result to simple array of URLs
const getImages = (globResult) => {
    return Object.values(globResult).map(module => module.default);
};

const images1 = getImages(rawImages1);
const images2 = getImages(rawImages2);

const LegacyGallery = () => {
    const [activeTab, setActiveTab] = useState('2.0');

    return (
        <section id="LegacyGallery" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Legacy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A Journey through Innovation, Collaboration, and Excellence.
                        Relive the moments that defined us.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="bg-slate-900/50 p-1 rounded-full border border-white/10 backdrop-blur-sm relative">
                        {['2.0', '1.0'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-6 py-1.5 md:px-8 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 z-10 ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-600 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">CRESCITA {tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid - Using CSS Columns for Masonry effect */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6"
                    >
                        {(activeTab === '2.0' ? images2 : images1).map((src, index) => (
                            <motion.div
                                key={src} // Ensure generic key if URLs aren't unique, but usually they are
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="break-inside-avoid relative group rounded-xl md:rounded-2xl overflow-hidden border border-white/5 bg-slate-800"
                            >
                                <img
                                    src={src}
                                    alt={`Crescita ${activeTab} Moment`}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default LegacyGallery;
