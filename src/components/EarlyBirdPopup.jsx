import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import poster7 from '../assets/poster-realeses/7.jpeg';

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

    // Prevent body scroll when popup is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
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

                        {/* Image Section */}
                        <motion.div variants={itemVariants} className="relative w-full">
                            <img
                                src={poster7}
                                alt="Early Bird Registration Closed"
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
                        <div className="p-6 md:p-8 bg-slate-900 w-full flex flex-col items-center">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold mb-2 text-white text-center tracking-tight"
                            >
                                Early Bird is <span className="text-red-400">Closed</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-400 text-sm md:text-base text-center mb-6 max-w-[280px]"
                            >
                                All early bird slots have been filled. Stay tuned for regular registration!
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full items-center">
                                <button
                                    onClick={handleDismiss}
                                    className="group w-full max-w-[240px] px-8 py-3.5 bg-slate-800 text-white/50 rounded-xl font-bold text-base cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                >
                                    Registration Closed
                                    <X size={18} />
                                </button>
                                <button
                                    onClick={handleDismiss}
                                    className="text-slate-500 text-sm font-medium hover:text-white transition-colors py-1"
                                >
                                    Maybe later
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EarlyBirdPopup;
