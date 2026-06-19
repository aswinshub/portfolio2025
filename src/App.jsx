import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SplashCursor from "../src/blocks/TailwindAnimations/SplashCursor/SplashCursor";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "motion/react";

const App = () => {
  return (
    <motion.div 
      className="overflow-x-hidden text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: 'opacity' }}
    >
      <SplashCursor />
      <motion.div 
        className="fixed top-0 -z-10 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: 'opacity' }}
      >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
      >
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects/>
        <Tech/>
       
       
        <Footer />
      </motion.div>
      <ScrollToTop />
    </motion.div>
  );
};

export default App;
