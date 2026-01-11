import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-blue-300 tracking-wide uppercase">IEEE SB LBSCEK Flagship Event</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6"
                >
                    INNOVATE.<br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        EVOLVE.
                    </span><br />
                    SUCCEED.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2"
                >
                    The flagship technical summit by IEEE SB LBSCEK. Elevate your skills through immersive learning, premium networking, and limitless opportunities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-6 md:mt-8 w-full max-w-4xl mx-auto"
                >
                    <p className="text-[10px] md:text-sm font-medium text-slate-500 uppercase tracking-widest mb-3 md:mb-4">The countdown to innovation begins</p>
                    <CountdownTimer targetDate="2026-02-06T00:00:00" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full px-4"
                >
                    <button className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-950 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold text-base md:text-lg hover:bg-white/10 transition-all">
                        Explore Events
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-slate-400 text-sm md:text-base"
                >
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-500" />
                        <span> 06,07,08 February 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-purple-500" />
                        <span>LBS collage of engineering</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
