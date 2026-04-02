import { motion } from "motion/react";
import { Trophy, Medal, Award } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Manash", kills: "12,450", wins: "452", accuracy: "42%", icon: <Trophy className="text-yellow-400" size={20} /> },
  { rank: 2, name: "Itachi", kills: "11,980", wins: "380", accuracy: "51%", icon: <Medal className="text-gray-400" size={20} /> },
  { rank: 3, name: "Sasuke", kills: "10,520", wins: "320", accuracy: "38%", icon: <Award className="text-amber-600" size={20} /> },
  { rank: 4, name: "Ishaan", kills: "8,900", wins: "410", accuracy: "35%", icon: null },
  { rank: 5, name: "Viper", kills: "7,450", wins: "290", accuracy: "31%", icon: null },
];

export default function Leaderboard() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-2 italic">
            SQUAD <span className="text-neon-purple">LEADERBOARD</span>
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card overflow-hidden neon-border-purple">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 font-orbitron text-xs tracking-widest text-white/50 uppercase">Rank</th>
                  <th className="p-6 font-orbitron text-xs tracking-widest text-white/50 uppercase">Player</th>
                  <th className="p-6 font-orbitron text-xs tracking-widest text-white/50 uppercase">Kills</th>
                  <th className="p-6 font-orbitron text-xs tracking-widest text-white/50 uppercase">Wins</th>
                  <th className="p-6 font-orbitron text-xs tracking-widest text-white/50 uppercase">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((player, index) => (
                  <motion.tr
                    key={player.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <span className={`font-black italic text-xl ${index < 3 ? "text-neon-red" : "text-white/30"}`}>
                          #{player.rank}
                        </span>
                        {player.icon}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="font-black italic text-lg tracking-tight group-hover:text-neon-red transition-colors duration-300">
                        {player.name}
                      </span>
                    </td>
                    <td className="p-6 font-bebas text-xl tracking-widest">{player.kills}</td>
                    <td className="p-6 font-bebas text-xl tracking-widest text-neon-purple">{player.wins}</td>
                    <td className="p-6 font-bebas text-xl tracking-widest text-white/50">{player.accuracy}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
