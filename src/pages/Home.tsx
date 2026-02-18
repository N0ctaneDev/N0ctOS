import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Optimized particles - reduced count for better performance
  const particles = Array.from({ length: 20 }, (_, i) => ({ id: i }));

  return (
    <div className="min-h-screen bg-dark-primary text-white font-tektur flex flex-col">
      <Navbar />
      
      {/* Optimized particle background */}
      <div className="fixed inset-0 pointer-events-none -z-10  bg-dark-primary">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-20"
            style={{
              left: `${(particle.id * 17) % 100}%`,
              top: `${(particle.id * 23) % 100}%`,
              willChange: "transform",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 5 + (particle.id % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </div>
      <main className="pt-28 pb-20 flex-grow">
        <section className="min-h-screen flex items-center px-4 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-radial opacity-50"
            style={{ y: heroY }}
          />

          <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-20">
            <motion.div
              className="hero-content"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, damping: 25 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-medium">
                  Work in Progress
                </span>
              </motion.div>

              <motion.div
                className="mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <img 
                  src="https://res.cloudinary.com/drysfsc1b/image/upload/v1771153631/N0ctOS_ritdbv.png" 
                  alt="N0ctOS" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                />
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl text-primary-400 font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                The Future of Linux is Here
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Experience quantum-level performance with our revolutionary
                Arch-based distribution. Built for developers, designed for
                humans, optimized for 2026.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.a
                  href="#download"
                  className="btn btn-primary relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl">🚧</span>
                    Join Development
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#features"
                  className="btn btn-secondary border-2 border-primary-500/50 hover:border-primary-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    Explore Features
                  </span>
                </motion.a>
              </motion.div>

              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">10x</div>
                  <div className="text-sm text-gray-500">Faster Boot</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">50%</div>
                  <div className="text-sm text-gray-500">Less Memory</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual flex justify-center lg:justify-end"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, damping: 25 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 2, -2, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="terminal relative z-10"
                  style={{
                    boxShadow:
                      "0 30px 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(139, 92, 246, 0.1)",
                  }}
                >
                  <div className="terminal-header bg-gradient-to-r from-dark-tertiary to-dark-secondary">
                    <div className="terminal-buttons">
                      <span className="btn-close shadow-lg shadow-red-500/50"></span>
                      <span className="btn-minimize shadow-lg shadow-yellow-500/50"></span>
                      <span className="btn-maximize shadow-lg shadow-green-500/50"></span>
                    </div>
                    <div className="terminal-title text-primary-400 font-mono">
                      n0ctos@quantum-installer
                    </div>
                  </div>
                  <div className="terminal-body bg-dark-secondary/90 backdrop-blur">
                    <motion.div
                      className="terminal-line text-primary-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      $ sudo ./quantum-install.sh --2026
                    </motion.div>
                    <motion.div
                      className="terminal-line text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 0.5 }}
                    >
                      🚀 Initializing quantum core...
                    </motion.div>
                    <motion.div
                      className="terminal-line text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4, duration: 0.5 }}
                    >
                      ⚡ Optimizing neural pathways...
                    </motion.div>
                    <motion.div
                      className="terminal-line success text-green-400 font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5, duration: 0.5 }}
                    >
                      ✓ N0ctOS 2026 installed successfully!
                    </motion.div>
                    <motion.div
                      className="terminal-line text-primary-400 animate-pulse"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 6, duration: 0.5 }}
                    >
                      🌟 Ready to launch into future...
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
