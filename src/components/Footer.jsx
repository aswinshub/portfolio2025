import React from "react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aswin-chandran-8b852a1a9/", label: "LinkedIn", color: "#0077b5" },
    { icon: FaGithub, href: "https://github.com/aswinshub", label: "GitHub", color: "#e6edf3" },
    { icon: FaInstagram, href: "https://www.instagram.com/aswinnchandran/", label: "Instagram", color: "#e4405f" },
  ];

  const contactItems = [
    { label: "Email", value: CONTACT.Email, type: "email" },
    { label: "Phone", value: CONTACT.phoneNo, type: "phone" },
    { label: "Location", value: CONTACT.Address, type: "location" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="py-24 border-t border-neutral-800/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Get in Touch Section */}
          <div className="w-full max-w-4xl">
            <motion.h2 
              className="mb-12 text-center text-3xl md:text-4xl font-light tracking-tight text-neutral-100"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Get in Touch
            </motion.h2>

            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm text-neutral-500 mb-2 font-light uppercase tracking-wider">
                    {item.label}
                  </p>
                  
                  <a 
                    href={item.type === 'email' ? `mailto:${item.value}` : item.type === 'phone' ? `tel:${item.value}` : '#'}
                    className="text-base text-neutral-300 hover:text-neutral-100 transition-colors font-light"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.p 
              className="text-center text-sm text-neutral-500 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Open to new opportunities and collaborations
            </motion.p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-neutral-800"></div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-500 hover:text-neutral-300 transition-colors text-xl"
                whileHover={{ 
                  scale: 1.1,
                  color: color,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Credits */}
          <div className="flex flex-col items-center space-y-2">
            <motion.p 
              className="text-sm text-neutral-500 font-light text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              © {currentYear} Aswin Chandran. All rights reserved.
            </motion.p>

            <motion.p 
              className="text-xs text-neutral-600 font-light text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
          
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

