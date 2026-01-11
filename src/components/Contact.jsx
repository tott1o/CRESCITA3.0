import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, User } from 'lucide-react';

const Contact = () => {
    const contacts = [
        {
            role: "Chair, IEEE SB LBSCEK",
            name: "Akshay M R",
            phone: "+91 95443 18120",
            color: "blue"
        },
        {
            role: "Student Co-ordinator",
            name: "Hridyaprabha M",
            phone: "+91 7012229415",
            color: "purple"
        },

    ];

    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Get in <span className="text-blue-500">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Have questions? We're here to help you with queries, registrations, and updates.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8">
                    {/* Location & Community Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                    >
                        <div className="mb-4 md:mb-8">
                            <div className="flex flex-col md:flex-row items-start gap-4 mb-4 md:mb-6">
                                <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg text-blue-400 shrink-0">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="w-full">
                                    <div className="text-slate-400 leading-relaxed block mb-4 text-sm md:text-base">
                                        LBS College of Engineering,<br />
                                        Povval, Muliyar P.O,<br />
                                        Kasaragod, Kerala - 671542
                                    </div>
                                    <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/10 relative z-0">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.451423629698!2d75.07822077483304!3d12.504107887769976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4846bda0b9525%3A0x1a6965b115fbfb96!2sLBS%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1748771479707!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="grayscale hover:grayscale-0 transition-all duration-500"
                                            title="LBSCEK Location"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4 mt-6">
                                <div className="p-2 md:p-3 bg-green-500/20 rounded-lg text-green-400 shrink-0">
                                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Join Community</h3>
                                    <p className="text-slate-400 mb-2 md:mb-3 text-xs md:text-sm">
                                        Stay updated with the latest announcements and event details.
                                    </p>
                                    <a
                                        href="https://www.whatsapp.com/channel/0029Vb4SeftBVJl2ImSBW83f"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors text-sm md:text-base"
                                    >
                                        Join WhatsApp Group <MessageCircle size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Persons Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 h-fit">
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/5 hover:border-white/10 transition-all group flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4"
                            >
                                <div className={`p-2 md:p-3 bg-${contact.color}-500/20 rounded-lg md:rounded-full text-${contact.color}-400 group-hover:scale-110 transition-transform shrink-0`}>
                                    <User size={16} className="md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider text-${contact.color}-400 mb-0.5 md:mb-1 truncate`}>
                                        {contact.role}
                                    </p>
                                    <h4 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1 truncate">{contact.name}</h4>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                                        className="inline-flex items-center gap-1 md:gap-2 text-slate-400 hover:text-white transition-colors text-[10px] md:text-sm"
                                    >
                                        <Phone size={12} className="md:w-3.5 md:h-3.5" /> {contact.phone}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
