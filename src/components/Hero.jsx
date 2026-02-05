import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[100px] md:blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm"
                >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">IEEE SB LBSCEK Flagship Event</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-3 md:mb-4 leading-[1.1]"
                >
                    INNOVATE.<br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        EVOLVE.
                    </span><br />
                    SUCCEED.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed font-light px-4"
                >
                    The flagship technical summit by IEEE SB LBSCEK. Elevate your skills through immersive learning and premium networking.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-2 md:mb-4 w-full max-w-3xl mx-auto"
                >
                    <p className="text-[9px] md:text-xs font-medium text-slate-500 uppercase tracking-[0.3em] mb-1">Countdown to Innovation</p>
                    <CountdownTimer targetDate="2026-02-06T00:00:00" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-md px-6"
                >


                    {/* <button onClick={() => window.open('https://bit.ly/CRESICTA3registration', '_blank')} className="w-full sm:w-auto group px-6 py-3 md:px-7 md:py-3.5 bg-white text-slate-950 rounded-lg font-bold text-sm md:text-base hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5">
                        Register Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button> */}


                    <button disabled className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3.5 bg-slate-800 text-slate-400 rounded-lg font-bold text-sm md:text-base cursor-not-allowed flex items-center justify-center gap-2 border border-white/10 opacity-75">
                        Registration Closed
                    </button>

                    <button onClick={() => document.getElementById('media-preview')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-3 md:px-7 md:py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-bold text-sm md:text-base hover:bg-white/10 transition-all">
                        Explore Events
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center gap-4 md:gap-8 text-slate-500 text-[11px] md:text-xs tracking-wide"
                >
                    <div className="flex items-center gap-2 justify-center">
                        <Calendar size={14} className="text-blue-500/70" />
                        <span>06 • 07 • 08 FEBRUARY 2026</span>
                    </div>
                    <div className="hidden sm:block w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-2 justify-center">
                        <MapPin size={14} className="text-purple-500/70" />
                        <span>LBS COLLEGE OF ENGINEERING</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
