import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SplashCursor from "../src/blocks/TailwindAnimations/SplashCursor/SplashCursor";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <SplashCursor />
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <Navbar />

      <div className="container mx-auto px-8">
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects/>
        <Tech/>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
