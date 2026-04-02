import { motion } from "motion/react";
import { Award, Star, ShieldCheck, Zap } from "lucide-react";

const achievements = [
  {
    title: "Pro League S12",
    rank: "Champions",
    icon: <Award size={40} className="text-neon-red" />,
    year: "2025",
  },
  {
    title: "Global Finals",
    rank: "Top 3",
    icon: <Star size={40} className="text-neon-purple" />,
    year: "2025",
  },
  {
    title: "Regional Masters",
    rank: "Winners",
    icon: <ShieldCheck size={40} className="text-neon-red" />,
    year: "2024",
  },
  {
    title: "Elite Invitational",
    rank: "MVP Squad",
    icon: <Zap size={40} className="text-neon-purple" />,
    year: "2024",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 italic tracking-tighter">
            HALL OF <span className="text-neon-red">DOMINANCE</span>
          </h2>
          <p className="text-white/40 font-bebas tracking-[0.3em] uppercase">Our Legacy in the Battlegrounds</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-red/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card p-8 text-center border-neon-red/20 hover:border-neon-red transition-all duration-300">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-20 h-20 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center border border-white/10"
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-xl font-black mb-1 italic tracking-tight group-hover:text-neon-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-neon-purple font-bebas text-lg tracking-widest mb-4">{item.rank}</p>
                
                <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10">
                  <span className="text-xs font-orbitron text-white/40 tracking-widest">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
