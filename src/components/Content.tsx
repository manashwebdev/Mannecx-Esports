import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "Pro League Finals Highlights",
    thumbnail: "https://picsum.photos/seed/gaming1/1280/720",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    id: "2",
    title: "Mannecx vs. Elite Squad Montage",
    thumbnail: "https://picsum.photos/seed/gaming2/1280/720",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    id: "3",
    title: "Sniper God: Itachi Highlights",
    thumbnail: "https://picsum.photos/seed/gaming3/1280/720",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
];

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-2 italic">
            LATEST <span className="text-neon-red">HIGHLIGHTS</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple ml-auto" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-video glass-card overflow-hidden relative group neon-border-red">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={videos[currentIndex].thumbnail} 
                  alt={videos[currentIndex].title} 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-neon-red rounded-full flex items-center justify-center shadow-[0_0_30px_#ff003c] group/play"
                  >
                    <Play size={32} fill="white" className="ml-1 group-hover/play:scale-110 transition-transform" />
                  </motion.button>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black italic tracking-tight mb-2">
                    {videos[currentIndex].title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-orbitron text-neon-red tracking-widest uppercase">FREE FIRE</span>
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <span className="text-xs font-orbitron text-white/40 tracking-widest uppercase">4K ULTRA HD</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:bg-neon-red/20 transition-colors z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:bg-neon-red/20 transition-colors z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {videos.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-neon-red w-8 shadow-[0_0_10px_#ff003c]" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
