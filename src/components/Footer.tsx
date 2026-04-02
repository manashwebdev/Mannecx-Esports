import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-bg border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black italic mb-2 tracking-tighter">
              MANNECX <span className="text-neon-red">ESPORTS</span>
            </h2>
            <p className="text-xs font-orbitron text-white/30 tracking-[0.5em] uppercase">Built for domination.</p>
          </div>

          <div className="flex gap-8 text-xs font-orbitron tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-neon-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neon-red transition-colors">Contact Us</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-orbitron text-white/20 tracking-widest uppercase">
              © 2026 MANNECX ESPORTS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-red/20 to-transparent blur-sm" />
    </footer>
  );
}
