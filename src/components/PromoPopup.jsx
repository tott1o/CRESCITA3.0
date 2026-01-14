import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Volume2, VolumeX } from 'lucide-react'; // Added icons
import promoVideo from '../assets/video-realeses/crescita3.0-promo.mp4';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // State to track mute
    const videoRef = useRef(null);

    useEffect(() => {  
        if (isVisible) {  
            document.body.style.overflow = 'hidden';  
        } else {  
            document.body.style.overflow = 'unset';  
        }  
        return () => { document.body.style.overflow = 'unset'; };  
    }, [isVisible]);  

    useEffect(() => {  
        const hasSeenPromo = sessionStorage.getItem('hasSeenPromo3.0');  
        if (!hasSeenPromo) {  
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

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleRegister = () => {  
        window.open('https://bit.ly/CRESCITAEarlyBird', '_blank');  
        handleClose();  
    };  

    // ... (variants remain the same)

    return (  
        <AnimatePresence>  
            {isVisible && (  
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">  
                    <motion.div  
                        variants={backdropVariants}  
                        initial="hidden" animate="visible" exit="exit"  
                        onClick={handleClose}  
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"  
                    />  

                    <motion.div  
                        variants={modalVariants}  
                        initial="hidden" animate="visible" exit="exit"  
                        className="relative w-full max-w-[340px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"  
                    >  
                        {/* Close Button */}
                        <button  
                            onClick={handleClose}  
                            className="absolute top-3 right-3 z-50 p-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/10"  
                        >  
                            <X size={18} />  
                        </button>  

                        {/* Mute/Unmute Button */}
                        <button  
                            onClick={toggleMute}  
                            className="absolute top-3 left-3 z-50 p-2 bg-slate-900/60 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/10"  
                        >  
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}  
                        </button>  

                        {/* Video Container */}  
                        <div className="relative aspect-[9/16] w-full bg-black overflow-hidden flex items-center justify-center">  
                            <video  
                                ref={videoRef}
                                src={promoVideo}  
                                autoPlay  
                                muted // Must start muted for autoplay to work
                                loop  
                                playsInline  
                                className="w-full h-full object-cover"  
                            />  
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />  
                        </div>  

                        {/* CTA Section */}  
                        <div className="p-6 md:p-7 bg-slate-900 flex flex-col items-center gap-4">  
                            <motion.button  
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}  
                                whileTap={{ scale: 0.95 }}  
                                onClick={handleRegister}  
                                className="group w-full max-w-[240px] px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold text-base flex items-center justify-center gap-2"  
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
