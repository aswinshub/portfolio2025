import React from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
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
    <motion.div 
      className="border-b border-neutral-900 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="my-10 text-center text-5xl  font-normal tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
      >
        Get in Touch
      </motion.h1>
      
      <motion.div 
        className="text-center tracking-tighter max-w-2xl mx-auto"
        variants={containerVariants}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-6 group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            style={{ willChange: 'transform' }}
          >
            <motion.p 
              className="text-base text-neutral-500 mb-2 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {item.label}
            </motion.p>
            
            <motion.p 
              className="text-xl text-neutral-300 group-hover:text-green-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ 
                x: 2,
                textShadow: "0 0 8px rgba(34, 197, 94, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform, text-shadow' }}
            >
              {item.value}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.p 
          className="text-neutral-500 text-base"
          whileHover={{ color: "#10b981" }}
          transition={{ duration: 0.3 }}
        >
          Let's work together on your next project!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
