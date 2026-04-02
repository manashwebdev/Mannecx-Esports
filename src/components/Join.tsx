import { motion } from "motion/react";
import { Send, Instagram, Disc as Discord, Twitter } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Join() {
  const [formData, setFormData] = useState({ name: "", uid: "", role: "Rusher" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
              JOIN THE <span className="text-neon-red">SQUAD</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-md">
              Think you have what it takes to dominate with Mannecx? 
              Apply now and prove your worth on the battlegrounds.
            </p>

            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="#" className="w-14 h-14 glass-card flex items-center justify-center text-neon-purple hover:text-white hover:bg-neon-purple transition-all duration-300"
              >
                <Discord size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="#" className="w-14 h-14 glass-card flex items-center justify-center text-neon-red hover:text-white hover:bg-neon-red transition-all duration-300"
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                href="#" className="w-14 h-14 glass-card flex items-center justify-center text-neon-purple hover:text-white hover:bg-neon-purple transition-all duration-300"
              >
                <Twitter size={28} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 neon-border-purple relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-orbitron tracking-widest text-white/40 uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-red transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs font-orbitron tracking-widest text-white/40 uppercase mb-2">Free Fire UID</label>
                <input 
                  type="text" 
                  required
                  value={formData.uid}
                  onChange={(e) => setFormData({ ...formData, uid: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                  placeholder="123456789"
                />
              </div>
              <div>
                <label className="block text-xs font-orbitron tracking-widest text-white/40 uppercase mb-2">Preferred Role</label>
                <select 
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-red transition-colors appearance-none"
                >
                  <option className="bg-dark-bg">Rusher</option>
                  <option className="bg-dark-bg">Sniper</option>
                  <option className="bg-dark-bg">Support</option>
                  <option className="bg-dark-bg">IGL</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={status !== "idle"}
                className={`w-full btn-primary flex items-center justify-center gap-3 ${status !== "idle" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {status === "idle" && (
                  <>
                    <span>SUBMIT APPLICATION</span>
                    <Send size={20} />
                  </>
                )}
                {status === "sending" && <span>SENDING...</span>}
                {status === "sent" && <span>APPLICATION SENT!</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
