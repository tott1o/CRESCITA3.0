import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import poster12 from '../assets/poster-realeses/12.jpeg';
import poster14 from '../assets/poster-realeses/14.jpeg';
import poster15 from '../assets/poster-realeses/15.jpg';
import poster17 from '../assets/poster-realeses/17.jpg';
import poster19 from '../assets/poster-realeses/19.jpeg';


const posters = [poster19, poster12, poster14, poster15, poster17];

const RegistrationClosed = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % posters.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isVisible]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % posters.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + posters.length) % posters.length);
    };

    useEffect(() => {
        // Trigger 1: Time Delay (5 seconds)
        const timer = setTimeout(() => {
            if (!hasBeenDismissed) {
                setIsVisible(true);
            }
        }, 3000);

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

    // Prevent body scroll when popup is visible
    useEffect(() => {
        // Use a global registry to track active popups and manage scroll lock
        if (!window.__activePopups) window.__activePopups = new Set();

        if (isVisible) {
            window.__activePopups.add('NormalRegistrationPopup');
        } else {
            window.__activePopups.delete('NormalRegistrationPopup');
        }

        // Apply scroll lock only if there are active popups
        if (window.__activePopups.size > 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.__activePopups?.delete('NormalRegistrationPopup');
            if (window.__activePopups?.size === 0) {
                document.body.style.overflow = 'unset';
            }
        };
    }, [isVisible]);


    const handleDismiss = () => {
        setIsVisible(false);
        setHasBeenDismissed(true);
    };

    const handleRegister = () => {
        handleDismiss();
    };

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
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={handleDismiss}
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
                            onClick={handleDismiss}
                            className="absolute top-3 right-3 z-20 p-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all active:scale-90"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        {/* Image Slider Section */}
                        <motion.div variants={itemVariants} className="relative w-full group">
                            {/* Slider Container */}
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentSlide}
                                        src={posters[currentSlide]}
                                        alt={`Registration Poster ${currentSlide + 1}`}
                                        className="block object-contain"
                                        style={{
                                            maxHeight: 'min(55vh, 500px)',
                                            maxWidth: 'min(85vw, 500px)',
                                            width: 'auto',
                                            height: 'auto'
                                        }}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900/70 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100 z-10"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900/70 backdrop-blur-sm rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100 z-10"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {posters.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                                            ? 'bg-white w-4'
                                            : 'bg-white/40 hover:bg-white/60'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 bg-slate-900 w-full flex flex-col items-center">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold mb-2 text-white text-center tracking-tight"
                            >
                                Registration is <span className="text-red-400">CLOSED</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-400 text-sm md:text-base text-center mb-6 max-w-[280px]"
                            >
                                Registration for CRESCITA 3.0 has officially ended. Thank you for the overwhelming response!
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full items-center">
                                <button
                                    onClick={handleDismiss}
                                    className="w-full sm:w-auto px-10 py-3 bg-slate-800 text-white rounded-lg font-bold text-sm md:text-base hover:bg-slate-700 transition-all flex items-center justify-center shadow-lg"
                                >
                                    Dismiss
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationClosed;
