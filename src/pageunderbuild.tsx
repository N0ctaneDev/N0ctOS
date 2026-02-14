import logo from "./assets/N0ctOS.png";
import { motion } from "framer-motion";

export const Pageunderbuild = () => {
    // Optimized particles
    const particles = Array.from({ length: 200 }, (_, i) => ({ id: i }));

    return (
        <div className="min-h-screen max-h-screen flex flex-col flex-grow justify-around content-around pb-14">
            <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-zinc-950 to-gray-950">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60 gpu-accelerated -z-500"
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
                            duration: Math.random() * 6 + 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-grow items-center justify-around flex-col bg-transparent font-tektur font-black text-center text-8xl text">
                <img src={logo} />
                <h1 className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Page Under Build..</h1>
            </div>
            <div>
                <span>Meanwhile, Checkout our </span>
                <a href="https://github.com/n0ctaneteam/N0ctOS" className="text-xl text-cyan-300 underline underline-offset-4">Github</a>
            </div>
        </div>
    );
};
