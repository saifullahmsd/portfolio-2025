import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light dark:bg-dark text-dark dark:text-light px-6 relative overflow-hidden">
      {/* Background Blur Blobs (Decoration) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center z-10">
        {/* 1. Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-medium text-accent">
            Assalam-o-Alaikum, I'm
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Saif{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ullah
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300">
            I am a{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Expert",
                  "UI/UX Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            Converting ideas into real-world applications. I specialize in
            building fast, responsive, and accessible websites using modern
            technologies.
          </p>

          <div className="flex gap-4 pt-4">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all"
              >
                View Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary dark:text-white font-semibold rounded-lg hover:bg-primary/10 transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* 2. Right Side: Image & Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Main Image Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-primary to-accent">
            <img
              src={heroImg}
              alt="Saif Ullah"
              className="w-full h-full object-cover rounded-full border-4 border-dark dark:border-light"
            />
          </div>

          {/* Floating Tech Badges (Decorations) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 right-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl"
          >
            <span className="text-2xl">⚛️</span> {/* React Icon */}
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-0 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl"
          >
            <span className="text-2xl">🚀</span> {/* Rocket/Performance */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
