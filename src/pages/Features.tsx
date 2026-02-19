import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LOGO_URL = "https://res.cloudinary.com/drysfsc1b/image/upload/v1771153631/N0ctOS_ritdbv.png";

function Features() {
  const { scrollY } = useScroll();
  const featuresY = useTransform(scrollY, [0, 1000], [0, -100]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <div className=" text-white font-tektur flex flex-col">
      <main className="flex-grow">
        <section className="py-24 relative">
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
              <img 
                src={LOGO_URL} 
                alt="N0ctOS Logo" 
                className="w-[clamp(100px,100%,400px)] object-contain mx-auto mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              />
              Why Choose{" "}
              <span className="bg-gradient-to-r from-accent to-primary-500 bg-clip-text text-transparent">
                N0ctOS
              </span>
              ?
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
                  icon: "⚡",
                  title: "Quantum Speed",
                  description:
                    "Lightning-fast boot times and instant application launches with quantum-optimized kernel",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  icon: "🧠",
                  title: "AI-Powered",
                  description:
                    "Machine learning algorithms optimize system performance in real-time",
                  color: "from-purple-400 to-pink-500",
                },
                {
                  icon: "🛡️",
                  title: "Fortress Security",
                  description:
                    "Military-grade encryption with quantum-resistant cryptography",
                  color: "from-purple-400 to-purple-500",
                },
                {
                  icon: "🌐",
                  title: "Future Ready",
                  description:
                    "Built for tomorrow with cutting-edge technology stack",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: "🔧",
                  title: "Developer Tools",
                  description:
                    "Comprehensive development environment with modern tools and libraries",
                  color: "from-indigo-400 to-purple-500",
                },
                {
                  icon: "🎮",
                  title: "Gaming Optimized",
                  description:
                    "Enhanced graphics performance for gaming and creative applications",
                  color: "from-red-400 to-pink-500",
                },
                {
                  icon: "📱",
                  title: "Cross-Platform",
                  description:
                    "Seamless experience across desktop, mobile, and embedded systems",
                  color: "from-purple-400 to-purple-500",
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  className="feature-card group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    borderColor: "rgba(128, 0, 128, 0.5)",
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
                      backgroundImage: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`,
                    }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Features;
