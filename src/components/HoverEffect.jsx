import { useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const LABEL_STYLES = {
  Design: "border-fuchsia-500/50 bg-fuchsia-950 text-fuchsia-200",
  Development: "border-indigo-500/50 bg-indigo-950 text-indigo-200",
};

const ProjectCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const showToggle = item.description.length > 100;

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/40 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-900/55"
      whileHover={{
        y: -3,
        transition: { type: "spring", stiffness: 300, damping: 24 },
      }}
    >
      {item.image && (
        <div className="overflow-hidden border-b border-neutral-800/60">
          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-[700/390] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-medium text-neutral-100 leading-snug">
          {item.title}
        </h3>

        {item.labels?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.labels.map((label) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-medium",
                  LABEL_STYLES[label]
                )}
              >
                {label}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2.5 flex-1">
          <div className="relative">
            <p
              className={cn(
                "text-sm font-light leading-relaxed text-neutral-400 transition-all duration-300",
                !expanded && "line-clamp-2"
              )}
            >
              {item.description}
            </p>
            {!expanded && showToggle && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-neutral-900 via-neutral-900/90 to-transparent" />
            )}
          </div>

          {showToggle && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-light text-neutral-500 transition-colors hover:text-indigo-300"
              aria-expanded={expanded}
              aria-label={expanded ? "Show less description" : "Show more description"}
            >
              {expanded ? (
                <>
                  Less
                  <HiChevronUp className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  More
                  <HiChevronDown className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          )}
        </div>

        {item.technologies && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-full border border-neutral-800 bg-neutral-950/40 px-2.5 py-1 text-[11px] font-light text-neutral-500"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(item.liveLinks?.length > 0 || item.liveUrl) && (() => {
          const links = item.liveLinks ?? (item.liveUrl ? [{ label: "View Live", url: item.liveUrl }] : []);
          const primaryLinks = links.filter(({ label }) => label === "View Live");
          const secondaryLinks = links.filter(({ label }) => label !== "View Live");

          return (
            <div className="mt-4 flex items-center justify-between gap-2 pt-4 border-t border-neutral-800/60">
              <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                {secondaryLinks.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-neutral-700/50 bg-neutral-800/30 px-2.5 py-1 text-[11px] font-light text-neutral-400 transition-all duration-300 whitespace-nowrap hover:border-neutral-600 hover:text-neutral-300"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="flex flex-shrink-0 flex-col items-end gap-1.5">
                {primaryLinks.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 transition-all duration-300 whitespace-nowrap hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </motion.article>
  );
};

export const HoverEffect = ({ items, className }) => {
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-80px" }}
      variants={pageVariants}
    >
      {items.map((item, idx) => (
        <motion.div key={item?.title ?? idx} variants={itemVariants} className="h-full">
          <ProjectCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-5 overflow-hidden bg-neutral-900/40 border border-neutral-800 relative transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3 className={cn("text-neutral-100 font-medium text-base mb-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-neutral-400 font-light leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
