import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Team", href: "#team" },
    { name: "Stats", href: "#stats" },
    { name: "Achievements", href: "#achievements" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "Join", href: "#join" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur }}
      className="fixed top-0 left-0 w-full z-[9997] py-6 border-b border-white/5 transition-all duration-300"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black italic tracking-tighter"
        >
          MANNECX <span className="text-neon-red">ESPORTS</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs font-orbitron tracking-widest text-white/60 hover:text-neon-red transition-colors uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-neon-red text-white font-bebas text-lg tracking-widest hover:scale-105 transition-transform"
          >
            APPLY NOW
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-neon-red transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden fixed inset-0 top-[80px] bg-dark-bg/95 backdrop-blur-xl z-[9996] p-8"
        >
          <div className="flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black italic tracking-tighter hover:text-neon-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full btn-primary">APPLY NOW</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
