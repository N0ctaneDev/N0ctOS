import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

function Features() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const featuresY = useTransform(scrollY, [0, 1000], [0, -100])
  
  // Optimized particles
  const particles = Array.from({ length: 20 }, (_, i) => ({ id: i }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-hidden relative font-tektur">
      {/* Optimized particle background */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-30 gpu-accelerated"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.header 
        className="fixed top-0 w-full bg-dark-primary/80 backdrop-blur-xl border-b border-primary-500/20 z-50 gpu-accelerated"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="py-6">
          <div className="container flex justify-between items-center">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <a href="/" className="text-4xl font-black bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse">
                N0ctOS
              </a>
              <div className="text-xs text-primary-400 font-mono mt-1">v2026.1</div>
            </motion.div>

            <ul className="hidden lg:flex list-none gap-8">
              {['Home', 'Features', 'Download', 'Team'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <a 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="text-gray-400 font-medium transition-all duration-300 hover:text-primary-400 hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] relative group"
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>

            <button 
              className="lg:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.span 
                className="w-8 h-1 bg-white block origin-left"
                animate={isMenuOpen ? { rotate: 45, x: 10 } : { rotate: 0, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-8 h-1 bg-white block"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-8 h-1 bg-white block origin-left"
                animate={isMenuOpen ? { rotate: -45, x: 10 } : { rotate: 0, x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul 
                  className="lg:hidden absolute top-full left-0 w-full bg-dark-secondary/95 backdrop-blur-xl border-t border-primary-500/20 flex flex-col p-6 gap-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {['Home', 'Features', 'Download', 'Team'].map((item) => (
                    <motion.li
                      key={item}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                        className="text-gray-400 font-medium transition-all duration-300 hover:text-primary-400 text-lg block py-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>

      <main>
        <section className="py-24 bg-gradient-to-b from-dark-secondary to-dark-primary relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-radial opacity-30"
            style={{ y: featuresY }}
          />
          
          <div className="container relative z-10">
            <motion.h2 
              className="section-title text-5xl md:text-6xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose <span className="bg-gradient-to-r from-accent to-primary-500 bg-clip-text text-transparent">N0ctOS</span>?
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: '⚡', 
                  title: 'Quantum Speed', 
                  description: 'Lightning-fast boot times and instant application launches with quantum-optimized kernel',
                  color: 'from-yellow-400 to-orange-500'
                },
                { 
                  icon: '🧠', 
                  title: 'AI-Powered', 
                  description: 'Machine learning algorithms optimize system performance in real-time',
                  color: 'from-purple-400 to-pink-500'
                },
                { 
                  icon: '🛡️', 
                  title: 'Fortress Security', 
                  description: 'Military-grade encryption with quantum-resistant cryptography',
                  color: 'from-blue-400 to-cyan-500'
                },
                { 
                  icon: '🌐', 
                  title: 'Future Ready', 
                  description: 'Built for tomorrow with cutting-edge technology stack',
                  color: 'from-green-400 to-emerald-500'
                },
                { 
                  icon: '🔧', 
                  title: 'Developer Tools', 
                  description: 'Comprehensive development environment with modern tools and libraries',
                  color: 'from-indigo-400 to-purple-500'
                },
                { 
                  icon: '🎮', 
                  title: 'Gaming Optimized', 
                  description: 'Enhanced graphics performance for gaming and creative applications',
                  color: 'from-red-400 to-pink-500'
                },
                { 
                  icon: '📱', 
                  title: 'Cross-Platform', 
                  description: 'Seamless experience across desktop, mobile, and embedded systems',
                  color: 'from-cyan-400 to-blue-500'
                },
              ].map((feature) => (
                <motion.div 
                  key={feature.title}
                  className="feature-card group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 30px 60px rgba(0, 212, 255, 0.4)"
                  }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div 
                    className="text-6xl mb-6 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white relative z-10 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed relative z-10 text-sm">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                    }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Features
