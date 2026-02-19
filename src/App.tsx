import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";
// Import pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Team from "./pages/Team";
import Docs from "./pages/Docs";

import { NotFound } from "./pages/not-found";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// routing...
export const App = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({ id: i }));
  return (
    <div className="w-dvw min-h-dvh flex flex-col content-between justify-between gap-0">
      
      {/* the radial gradient bg */}
      <motion.div className="fixed top-0 bottom-0 left-0 right-0 inset-0 bg-gradient-radial opacity-50 -z-40" />
      {/* Optimized particle background */}
      <div className="fixed inset-0 pointer-events-none -z-50  bg-dark-primary">
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
      <Navbar />
      <div className="px-1 py-5 flex-grow">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/team" element={<Team />} />
        
        <Route path="*" element={<Navigate to="/notfound" replace/>} />
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};
