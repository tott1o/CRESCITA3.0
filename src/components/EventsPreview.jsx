import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import img1 from '../assets/event-preview/1.jpeg';
import img2 from '../assets/event-preview/1.webp'; // Using 1.webp as 2.webp was missing
import img3 from '../assets/event-preview/3.jpg';
import img4 from '../assets/event-preview/4.jpg';
import img5 from '../assets/event-preview/5.jpg';

const EventsPreview = () => {
    const events = [
        {
            title: "Inspiring Talks",
            description: "Visionary insights from industry leaders.",
            image: img1,
            color: "blue"
        },
        {
            title: "Workshops",
            description: "Hands-on learning with cutting-edge tech.",
            image: img2,
            color: "purple"
        },
        {
            title: "Cultural Events",
            description: "A vibrant showcase of art and talent.",
            image: img3,
            color: "pink"
        },
        {
            title: "Musical Night",
            description: "Electrifying performances to end the night.",
            image: img4,
            color: "green"
        },
        {
            title: "Fun, Games & More",
            description: "Unwind with thrilling games and activities.",
            image: img5,
            color: "orange"
        }
    ];

    return (
        <section id="events" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">EVENTS <span className="text-blue-500">3.0</span></h2>
                        <p className="text-slate-400 max-w-md text-lg">
                            From technical brilliance to artistic expression, explore the diversity of Crescita 3.0.
                        </p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-bold flex items-center gap-2 hover:text-blue-300 transition-colors"
                    >
                        View Full Schedule <ArrowUpRight size={20} />
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-slate-800 rounded-xl md:rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer h-40 sm:h-56 md:h-64 flex flex-col"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                            </div>

                            <div className="relative z-10 p-3 md:p-6 mt-auto">
                                <span className={`inline-block py-0.5 px-2 rounded-full bg-${event.color}-500/20 text-${event.color}-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2 backdrop-blur-sm`}>
                                    {event.title.split(' ')[0]}
                                </span>
                                <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                                    {event.title}
                                </h3>
                                <p className="text-slate-300 text-[10px] md:text-sm line-clamp-2 md:line-clamp-none leading-tight md:leading-normal opacity-90">
                                    {event.description}
                                </p>
                            </div>

                            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-slate-950/50 backdrop-blur-md p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 hidden md:block">
                                <ArrowUpRight size={20} className="text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsPreview;
