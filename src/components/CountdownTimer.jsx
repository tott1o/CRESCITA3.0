import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Digit = ({ value }) => (
    <div className="relative h-[1.2em] w-[0.55em] sm:w-[0.6em] md:w-[0.65em] flex justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
            <motion.span
                key={value}
                initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 35,
                    mass: 0.7
                }}
                className="absolute inset-0 flex items-center justify-center font-mono"
            >
                {value}
            </motion.span>
        </AnimatePresence>
    </div>
);

const StepUnit = ({ label, value, index }) => {
    const digits = String(value).padStart(2, '0').split('');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative flex flex-col items-center"
        >
            {/* Glossy Card - More Compact */}
            <div className="relative flex items-center justify-center p-3 md:p-4 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl shadow-xl overflow-hidden group-hover:border-cyan-500/30 transition-all duration-500">
                {/* Subtle Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Digits Container - Smaller font */}
                <div className="flex text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                    {digits.map((digit, i) => (
                        <Digit key={i} value={digit} />
                    ))}
                </div>
            </div>

            {/* Label - More Minimal */}
            <div className="mt-2 md:mt-3 flex flex-col items-center">
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                    {label}
                </span>
                <motion.div
                    className="h-[1.5px] w-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-1 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-out"
                />
            </div>
        </motion.div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className="relative py-8 md:py-12">
            {/* Background Decorative Glow - Reduced opacity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-3xl mx-auto px-4 relative z-10">
                {timeUnits.map((item, index) => (
                    <StepUnit
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
