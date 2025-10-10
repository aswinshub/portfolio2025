import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  // Page transition variants for the entire section
  const pageVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Individual card entrance animations - removed for static display

  // Image entrance animations - removed for static display

  // Content entrance animations - removed for static display

  // Technology tags staggered entrance - removed for static display

  // Hover background animation
  const hoverVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className={cn("grid grid-cols-1 md:grid-cols-2 py-6 md:py-10 gap-4 md:gap-6", className)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2, margin: "-100px" }}
      variants={pageVariants}
    >
      {items.map((item, idx) => (
        <motion.a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 md:p-3 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ 
            scale: 1.03,
            y: -8,
            transition: { 
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }
          }}
          whileTap={{ 
            scale: 0.97,
            transition: { duration: 0.1 }
          }}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-neutral-200/20 to-slate-800/80 backdrop-blur-sm block rounded-3xl"
                layoutId="hoverBackground"
                variants={hoverVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            )}
          </AnimatePresence>
          
          <Card>
            <div className="flex flex-col sm:flex-row items-start h-full gap-4 md:gap-6">
              {item.image && (
                <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full sm:h-32 sm:w-32 rounded-xl object-cover shadow-lg"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0 w-full">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-neutral-800 text-green-500 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-medium border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-lg h-full w-full p-6 overflow-hidden bg-neutral-900/30 border border-neutral-800 group-hover:border-neutral-700 group-hover:bg-neutral-800/50 relative z-20 min-h-[200px] transition-colors",
        className
      )}
      whileHover={{ 
        y: -4,
        transition: { 
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }
      }}
    >
      <div className="relative z-50 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h3 
      className={cn("text-neutral-100 font-normal text-lg mb-2", className)}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("text-neutral-400 font-light leading-relaxed text-sm", className)}
    >
      {children}
    </p>
  );
};
