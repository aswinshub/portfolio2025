import React from "react";
import logo from "../assets/logo as.png";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#technical-skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedin, color: "#0077b5", delay: 0, label: "LinkedIn", href: "https://www.linkedin.com/in/aswin-chandran-8b852a1a9/" },
  { icon: FaGithub, color: "#e6edf3", delay: 1, label: "GitHub", href: "https://github.com/aswinshub" },
  { icon: FaDribbble, color: "#ea4c89", delay: 2, label: "Dribbble", href: "https://dribbble.com/AswinChandran" },
];

const Navbar = () => {
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <motion.a
            href="#home"
            className="flex items-center shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Home"
          >
            <motion.img
              className="h-8 w-8"
              src={logo}
              alt="Aswin Chandran"
              whileHover={{ rotate: 3 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-neutral-400 transition-colors hover:text-neutral-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.div
            className="flex items-center gap-5 text-lg shrink-0"
            initial="hidden"
            animate="visible"
          >
            {SOCIAL_LINKS.map(({ icon: Icon, color, delay, label, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                custom={delay}
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  color: color,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-400 transition-colors hover:text-neutral-100"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex lg:hidden items-center justify-center gap-4 pb-3 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-light text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
