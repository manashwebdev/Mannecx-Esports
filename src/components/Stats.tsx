import { motion, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
import { Trophy, Gamepad2, Target, Zap } from "lucide-react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const spring = useSpring(rounded, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [value, count, duration]);

  return <motion.span>{spring}</motion.span>;
}

export default function Stats() {
  const [liveStats, setLiveStats] = useState({
    wins: 452,
    matches: 1240,
    rank: "Grandmaster",
    recent: ["WIN", "WIN", "LOSS", "WIN", "WIN"],
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        wins: prev.wins + (Math.random() > 0.9 ? 1 : 0),
        matches: prev.matches + (Math.random() > 0.95 ? 1 : 0),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center neon-border-purple relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-red rounded-full animate-pulse shadow-[0_0_10px_#ff003c]" />
              <span className="text-[10px] font-orbitron text-neon-red tracking-widest uppercase">LIVE</span>
            </div>
            <Trophy className="mx-auto mb-4 text-neon-purple group-hover:scale-110 transition-transform duration-300" size={48} />
            <h3 className="text-4xl font-black italic mb-2">
              <Counter value={liveStats.wins} />
            </h3>
            <p className="text-white/50 font-bebas tracking-widest uppercase">Total Wins</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 text-center neon-border-red group"
          >
            <Gamepad2 className="mx-auto mb-4 text-neon-red group-hover:scale-110 transition-transform duration-300" size={48} />
            <h3 className="text-4xl font-black italic mb-2">
              <Counter value={liveStats.matches} />
            </h3>
            <p className="text-white/50 font-bebas tracking-widest uppercase">Matches Played</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center neon-border-purple group"
          >
            <Target className="mx-auto mb-4 text-neon-purple group-hover:scale-110 transition-transform duration-300" size={48} />
            <h3 className="text-3xl font-black italic mb-2 text-neon-purple">
              {liveStats.rank}
            </h3>
            <p className="text-white/50 font-bebas tracking-widest uppercase">Current Rank</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 text-center neon-border-red group"
          >
            <Zap className="mx-auto mb-4 text-neon-red group-hover:scale-110 transition-transform duration-300" size={48} />
            <div className="flex justify-center gap-2 mb-2">
              {liveStats.recent.map((res, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-sm ${res === "WIN" ? "bg-neon-red shadow-[0_0_10px_#ff003c]" : "bg-white/20"}`}
                />
              ))}
            </div>
            <p className="text-white/50 font-bebas tracking-widest uppercase">Recent Form</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
