import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
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
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 py-8 w-full max-w-3xl mx-auto">
            {timeUnits.map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center p-3 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent font-mono overflow-hidden h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={item.value}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                                className="inline-block"
                            >
                                {String(item.value).padStart(2, '0')}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-slate-400 mt-1 md:mt-2 font-medium">
                        {item.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default CountdownTimer;
