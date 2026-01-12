import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import posterImage from '../assets/poster-realeses/WhatsApp Image 2026-01-11 at 12.52.13 PM.jpeg';

const EarlyBirdPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

    useEffect(() => {
        // Trigger 1: Time Delay (5 seconds)
        const timer = setTimeout(() => {
            if (!hasBeenDismissed) {
                setIsVisible(true);
            }
        }, 5000);

        // Trigger 2: Exit Intent
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasBeenDismissed) {
                setIsVisible(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasBeenDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setHasBeenDismissed(true);
    };

    const handleRegister = () => {
        window.open('https://bit.ly/CRESCITAEarlyBird', '_blank');
        handleDismiss();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    />

                    {/* Modal - Image Centric: sized by image, not viewport */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                        style={{ width: 'auto' }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 z-20 p-2 bg-slate-900/40 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all opacity-80 hover:opacity-100"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section - Dominant Visual, drives the modal width */}
                        <div className="relative">
                            <img
                                src={posterImage}
                                alt="Early Bird Registration"
                                className="block max-h-[65vh] w-auto h-auto object-contain"
                                style={{ maxWidth: 'min(90vw, 600px)' }}
                            />
                            {/* Subtle overlay for text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Content Section - Minimal Text */}
                        <div className="p-5 bg-slate-900">
                            {/* Headline */}
                            <h2 className="text-xl md:text-2xl font-bold mb-1.5 text-white text-center">
                                Early Bird Registrations Open
                            </h2>

                            {/* Supporting Line - Optional Urgency */}
                            <p className="text-slate-400 text-sm text-center mb-4">
                                Limited seats available
                            </p>

                            {/* CTA Button */}
                            <div className="flex flex-col gap-3 items-center">
                                <button
                                    onClick={handleRegister}
                                    className="group px-6 py-3 bg-white text-slate-950 rounded-lg font-bold text-base hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                                >
                                    Register Now
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={handleDismiss}
                                    className="text-slate-400 text-sm font-medium hover:text-white transition-colors"
                                >
                                    Not now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EarlyBirdPopup;
