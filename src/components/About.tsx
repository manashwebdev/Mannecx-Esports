import { motion } from "motion/react";

export default function About() {
  return (
    <section className="relative py-32 bg-dark-bg overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/esports-bg/1920/1080?blur=10" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">
              BUILT FOR <br />
              <span className="text-neon-red">DOMINATION</span>
            </h2>
            
            <div className="w-24 h-1 bg-neon-purple mx-auto mb-12" />

            <p className="text-xl md:text-2xl font-poppins font-light leading-relaxed text-white/70 mb-12">
              A rising esports squad built on dominance, discipline, and destruction. 
              Mannecx isn't just a team; it's a statement. We don't play for participation; 
              we play for the throne. Every match is a mission, every kill is a message.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 border-neon-red/20">
                <h4 className="text-3xl font-black italic mb-2 text-neon-red">DOMINANCE</h4>
                <p className="text-xs font-orbitron text-white/40 tracking-widest uppercase">Our Only Standard</p>
              </div>
              <div className="glass-card p-6 border-neon-purple/20">
                <h4 className="text-3xl font-black italic mb-2 text-neon-purple">DISCIPLINE</h4>
                <p className="text-xs font-orbitron text-white/40 tracking-widest uppercase">Our Core Foundation</p>
              </div>
              <div className="glass-card p-6 border-neon-red/20">
                <h4 className="text-3xl font-black italic mb-2 text-neon-red">DESTRUCTION</h4>
                <p className="text-xs font-orbitron text-white/40 tracking-widest uppercase">Our Final Result</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
