import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import promoVideo from '../assets/video-realeses/crescita3.0-promo.mp4';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        // Use a global registry to track active popups and manage scroll lock
        if (!window.__activePopups) window.__activePopups = new Set();

        if (isVisible) {
            window.__activePopups.add('PromoPopup');
        } else {
            window.__activePopups.delete('PromoPopup');
        }

        // Apply scroll lock only if there are active popups
        if (window.__activePopups.size > 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.__activePopups?.delete('PromoPopup');
            if (window.__activePopups?.size === 0) {
                document.body.style.overflow = 'unset';
            }
        };
    }, [isVisible]);


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
                stiffness: 300
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

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
                    {/* Dark Translucent Overlay */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-[340px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
                    >
                        {/* Close Icon - Adjusted to match EarlyBird style */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-50 p-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition-all active:scale-95 border border-white/10"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        {/* Video Container (9:16 Aspect Ratio) */}
                        <div
                            className="relative aspect-[9/16] w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer group/video"
                            onClick={() => setIsMuted(!isMuted)}
                        >
                            <video
                                src={promoVideo}
                                loop
                                autoPlay
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover"
                            />

                            {/* Modern Mute Toggle Indicator (Reels Style) */}
                            <div className="absolute inset-x-0 bottom-4 right-4 flex justify-end pointer-events-none">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: 1
                                    }}
                                    key={isMuted ? 'muted' : 'unmuted'}
                                    className="p-2.5 bg-slate-950/40 backdrop-blur-md rounded-full border border-white/10 text-white/90"
                                >
                                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                </motion.div>
                            </div>

                            {/* Center Splash Animation on Toggle */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isMuted ? 'muted-splash' : 'unmuted-splash'}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-full">
                                        {isMuted ? <VolumeX size={40} className="text-white" /> : <Volume2 size={40} className="text-white" />}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* CTA Section */}
                        <div className="p-6 md:p-7 bg-slate-900 flex flex-col items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegister}
                                className="group w-full max-w-[240px] px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold text-base hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                Register Now
                                <ExternalLink size={18} />
                            </motion.button>

                            <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
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
