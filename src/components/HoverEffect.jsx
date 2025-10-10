import { cn } from "../lib/utils";
import { motion } from "motion/react";

export const HoverEffect = ({
  items,
  className
}) => {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Smoother cubic-bezier easing
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
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
          whileHover={{ 
            y: -4,
            transition: { 
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.8,
            }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 17
            }
          }}
        >
          
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
                        className="inline-block bg-neutral-900/50 text-neutral-400 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-light border border-neutral-800 hover:border-neutral-700 hover:text-neutral-300 transition-colors"
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
    <div
      className={cn(
        "rounded-lg h-full w-full p-6 overflow-hidden bg-neutral-900/30 border border-neutral-800 group-hover:border-neutral-700 relative z-20 min-h-[200px] transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50 h-full">
        {children}
      </div>
    </div>
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
