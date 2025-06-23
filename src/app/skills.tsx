"use client";

import { motion } from "framer-motion";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const SKILLS = [
  {
    icon: HashtagIcon,
    title: "Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "Backend Development",
    children:
      "I design and build scalable backend systems with a strong focus on reliability, maintainability, and performance. My work ensures that every feature is powered by a solid and secure infrastructure.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.6,
    },
  },
};

// Icon animation variants
const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: 0.2,
    },
  },
};

// Text animation variants
const textVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

function SkillCard({ icon: Icon, title, children, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }
      }}
      className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 cursor-hover relative overflow-hidden group"
    >
      {/* Gradient background effect on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-lg"
      />
      
      <div className="relative z-10">
        <div className="mb-6">
          <motion.div
            variants={iconVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.6 }
            }}
            className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 relative overflow-hidden"
          >
            {/* Icon background glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white rounded-lg"
            />
            <Icon className="h-6 w-6 text-white relative z-10" />
          </motion.div>
          
          <motion.h3
            variants={textVariants}
            className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300"
          >
            {title}
          </motion.h3>
        </div>
        
        <motion.p
          variants={textVariants}
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
        >
          {children}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center py-20 px-8">
      <div className="container mx-auto">
        {/* Header with scroll animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black font-bold text-sm uppercase tracking-wider mb-4"
          >
            My Skills
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-black mb-6"
          >
            What I Do
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Things I do include building structured, scalable, and reliable backend systems. 
            I focus on crafting efficient APIs, managing databases, and enabling seamless communication 
            between services — all to bring powerful ideas to life.
          </motion.p>
        </motion.div>
        
        {/* Skills grid with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;