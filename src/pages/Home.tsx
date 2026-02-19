import { motion } from "framer-motion";

// dont add Navbar and Footer on indivisual pages bro

const Tagline = "Linux, Made Simple & Beautiful";
const Description = "Experience quantum-level performance with our Arch-based linux distribution. Built for developers, designed for humans, optimized for 2026.";

function Home() {
  return (
    <div className=" text-white font-tektur flex flex-col w-dvw">
      <main className="flex-grow py-4">
        <section className=" h-auto flex items-center px-4 relative ">
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
                  className="object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                />
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl text-primary-400 font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {Tagline}
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {Description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-between"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.a
                  href="#download"
                  className="btn btn-primary flex-grow justify-center relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl">🚧</span>
                    Join Development
                  </span>
                </motion.a>

                <motion.a
                  href="#features"
                  className="btn btn-secondary flex-grow justify-center border-2 border-primary-500/50 hover:border-primary-400"
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
                  <div className="text-3xl font-bold text-primary-400">ARCH</div>
                  <div className="text-sm text-gray-500">But easy-peasy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">Linux</div>
                  <div className="text-sm text-gray-500">But like windows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">
                    Made Easy
                  </div>
                  <div className="text-sm text-gray-500">For You !!</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual flex justify-center lg:justify-end mb-20"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, damping: 25 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 2, -2, 0],
                  y: [0, -15, 0],
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
                      n0ctos@n1tro-installer
                    </div>
                  </div>
                  <div className="terminal-body bg-dark-secondary/90 backdrop-blur">
                    <motion.div
                      className="terminal-line text-primary-400 overflow-hidden text-nowrap"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      $ sudo install N0ctOS
                    </motion.div>
                    <motion.div
                      className="terminal-line text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 0.5 }}
                    >
                      🚀 Initializing ARCH core...
                    </motion.div>
                    <motion.div
                      className="terminal-line text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4, duration: 0.5 }}
                    >
                      ⚡ Optimizing Your Workflow
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
    </div>
  );
}

export default Home;
