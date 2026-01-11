import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Users } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Users size={32} className="text-blue-400" />,
            title: "Expert Sessions",
            description: "Gain insights from industry professionals through engaging technical talks and interactive sessions."
        },
        {
            icon: <Cpu size={32} className="text-purple-400" />,
            title: "Hands-on Workshops",
            description: "Enhance your skills with practical workshops on cutting-edge technologies led by experts."
        },
        {
            icon: <Code size={32} className="text-pink-400" />,
            title: "Competitions & Games",
            description: "Showcase your creativity and innovation in thrilling competitions and fun-filled games."
        },
        {
            icon: <Globe size={32} className="text-cyan-400" />,
            title: "Celebration & Outings",
            description: "Experience a grand music night and explore the natural beauty of Kasaragod with memorable outings."
        }
    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-blue-500">Crescita 3.0</span></h2>
                    <div className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
                        <p>
                            Crescita 3.0 is the flagship technical fest of IEEE SB LBSCEK, bringing together students and technology enthusiasts from across Kerala. As the largest technical event ever hosted at LBS College of Engineering, Kasaragod, it serves as a premier platform for innovation and learning.
                        </p>
                        <p>
                            Spanning three days on February 06,07 and 08 ,2026, the event blends technical excellence with entertainment. It is more than just an event—it is a celebration of technology, talent, and collaboration.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors group flex flex-col h-full"
                        >
                            <div className="mb-3 md:mb-6 p-2 md:p-4 bg-slate-900 rounded-lg md:rounded-xl inline-block w-fit group-hover:scale-110 transition-transform">
                                {React.cloneElement(feature.icon, { size: undefined, className: `w-5 h-5 md:w-8 md:h-8 ${feature.icon.props.className}` })}
                            </div>
                            <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-xs md:text-base text-slate-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
