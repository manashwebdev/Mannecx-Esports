import { motion } from "motion/react";
import { User, Target, Zap, Shield } from "lucide-react";

const players = [
  {
    name: "Manash",
    role: "Leader / Strategist",
    icon: <Shield className="text-neon-red" />,
    stats: { kd: "4.2", matches: "1,240", winRate: "38%" },
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manash&backgroundColor=0a0a0a&skinColor=f8d25c&top=shortHair&accessories=eyepatch",
  },
  {
    name: "Itachi",
    role: "Sniper",
    icon: <Target className="text-neon-purple" />,
    stats: { kd: "5.1", matches: "980", winRate: "32%" },
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Itachi&backgroundColor=0a0a0a&skinColor=f8d25c&top=longHair&accessories=sunglasses",
  },
  {
    name: "Sasuke",
    role: "Rusher",
    icon: <Zap className="text-neon-red" />,
    stats: { kd: "3.8", matches: "1,520", winRate: "29%" },
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sasuke&backgroundColor=0a0a0a&skinColor=f8d25c&top=shaggy&accessories=none",
  },
  {
    name: "Ishaan",
    role: "Support",
    icon: <User className="text-neon-purple" />,
    stats: { kd: "2.9", matches: "1,100", winRate: "41%" },
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishaan&backgroundColor=0a0a0a&skinColor=f8d25c&top=shortHair&accessories=none",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-2 italic">
            THE <span className="text-neon-red">ELITE</span> SQUAD
          </h2>
          <div className="w-24 h-1 bg-neon-purple" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group relative overflow-hidden neon-border-red"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-red/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-full aspect-square mb-6 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  {player.icon}
                  <span className="text-xs font-orbitron tracking-widest text-white/50 uppercase">
                    {player.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 tracking-tighter italic group-hover:text-neon-red transition-colors duration-300">
                  {player.name}
                </h3>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-[10px] text-white/40 uppercase font-orbitron">K/D</p>
                    <p className="text-sm font-bold text-neon-red">{player.stats.kd}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-white/40 uppercase font-orbitron">Matches</p>
                    <p className="text-sm font-bold text-white">{player.stats.matches}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-white/40 uppercase font-orbitron">Win Rate</p>
                    <p className="text-sm font-bold text-neon-purple">{player.stats.winRate}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
