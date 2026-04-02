import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import Content from "./components/Content";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";
import Join from "./components/Join";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-neon-red selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CursorGlow />
            <Navbar />
            
            <main>
              <section id="home">
                <Hero />
              </section>
              
              <section id="team">
                <Team />
              </section>
              
              <section id="stats">
                <Stats />
              </section>
              
              <section id="achievements">
                <Achievements />
              </section>
              
              <section id="content">
                <Content />
              </section>
              
              <section id="leaderboard">
                <Leaderboard />
              </section>
              
              <section id="about">
                <About />
              </section>
              
              <section id="join">
                <Join />
              </section>
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
