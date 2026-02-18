import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export const NotFound = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/home");
  };

  const messages = [
    "Umm... Page not found",
    "You're lost, bro",
    "This route doesn't exist",
    "404 — skill issue",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const particles = Array.from({ length: 30 }, (_, i) => ({ id: i }));

  return (
    <div className="min-h-screen bg-dark-primary text-white font-tektur">
      <Navbar />
      
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-zinc-950 to-gray-950">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-40"
            style={{
              left: `${(particle.id * 17) % 100}%`,
              top: `${(particle.id * 23) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + (particle.id % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </div>
      
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8" 
            src="https://res.cloudinary.com/drysfsc1b/image/upload/v1771153631/N0ctOS_ritdbv.png" 
            alt="N0ctOS"
          />
        </motion.div>
        
        <motion.h1
          className="text-[clamp(2rem,8vw,4rem)] leading-none font-black text-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            {randomMessage}
          </span>
        </motion.h1>
        
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={redirectToHome}
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            Go Back To Home
          </button>
          
          <Link 
            to="/home" 
            className="text-gray-400 hover:text-primary-400 transition-colors underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
