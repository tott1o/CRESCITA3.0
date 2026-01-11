import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, ArrowRight, Zap } from 'lucide-react';

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

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Gradient Accent */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Zap size={24} className="text-blue-400 animate-pulse" />
                                </div>
                                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                                    Limited Time Offer
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                EARLY BIRD <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                    REGISTRATION
                                </span> IS OPEN
                            </h2>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Secure your spot at Crescita 3.0 today and enjoy exclusive early access benefits and discounted registration fees.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleRegister}
                                    className="flex-1 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
                                >
                                    Register Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={handleDismiss}
                                    className="px-8 py-4 text-slate-400 font-medium hover:text-white transition-colors"
                                >
                                    Maybe later
                                </button>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="px-8 md:px-10 py-4 bg-white/5 border-t border-white/5 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs text-slate-500 font-medium">Slots are filling up fast — act now</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EarlyBirdPopup;
