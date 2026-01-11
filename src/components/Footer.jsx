import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Heart, Youtube } from 'lucide-react';
import logo from '../assets/logos/1.png';
import logo2 from '../assets/logos/3.png';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <img src={logo} alt="CRESCITA Logo" className="h-8 md:h-10" />
                        <p className="text-slate-400 max-w-sm mb-6">
                            Empowering the next generation of innovators through technical excellence and creative competition.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, url: "https://instagram.com/ieeesblbscek" },
                                { Icon: Youtube, url: "https://www.youtube.com/@ieeesblbscek6815" },
                                { Icon: Linkedin, url: "https://www.linkedin.com/company/ieeesblbscek" },
                                { Icon: Facebook, url: "https://www.facebook.com/share/16kNwZsCEQ/" }

                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                            <li><a href="#legacy" className="hover:text-white transition-colors">Legacy</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Links</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="https://ieeesblbscek.pages.dev/" className="hover:text-white transition-colors">IEEE SB LBSCEK</a></li>
                            <li><a href="https://linktr.ee/ieeesblbscek" className="hover:text-white transition-colors">Linktree</a></li>
                            <li><a href="mailto:ieeesb@lbscek.ac.in" className="hover:text-white transition-colors">E-mail</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© 2026 Crescita. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        <img src={logo2} alt="CRESCITA Logo" className="h-8 md:h-10" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
