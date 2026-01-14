import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import promoVideo from '../assets/video-realeses/crescita3.0-promo.mp4';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check session storage to show only once per session
        const hasSeenPromo = sessionStorage.getItem('hasSeenPromo3.0');

        if (!hasSeenPromo) {
            // Short delay before showing the popup for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenPromo3.0', 'true');
    };

    const handleRegister = () => {
        window.open('https://bit.ly/CRESCITAEarlyBird', '_blank');
        handleClose();
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20,
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
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                    {/* Dark Translucent Overlay */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
                    >
                        {/* Close Icon */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        {/* Video Container (9:16 Aspect Ratio) */}
                        <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                            <video
                                src={promoVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-contain"
                            />
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                        </div>

                        {/* CTA Section */}
                        <div className="p-6 pt-2 bg-slate-900 flex flex-col items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegister}
                                className="group w-full max-w-[240px] px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                Register Now
                                <ExternalLink size={18} />
                            </motion.button>

                            <p className="text-slate-500 text-xs font-medium tracking-wider uppercase">
                                CRESCITA 3.0
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PromoPopup;
