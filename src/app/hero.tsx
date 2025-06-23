/* eslint-disable react/no-unescaped-entities */
"use client";


import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <header className="bg-white min-h-screen relative pt-[80px]">
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center text-center">
        {/* Name with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h1"
            color="black"
            className="font-sora mb-6 lg:text-6xl text-4xl !leading-tight"
          >
            Hi, I'm Sujay Sharvesh
          </Typography>
        </motion.div>

        {/* Typing Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            color="black"
            className="font-sora mb-8 lg:text-3xl text-xl !leading-relaxed"
          >
            <TypeAnimation
              sequence={[
                "Backend Developer",
                2000,
                "Tech Explorer",
                2000,
                "DevOps Enthusiast",
                2000,
                "Cloud Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="font-sora flex flex-wrap gap-6 justify-center"
        ></motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="lead"
            className="font-sora mb-10 !text-gray-700 max-w-4xl lg:text-xl text-lg !leading-relaxed"
          >
            Crafting thoughtful systems and experiences, rooted in curiosity, clarity, and a deep desire to make things work beautifully. I enjoy creating solutions that are not only functional but also intuitive and meaningful.
          </Typography>
        </motion.div>

        {/* Enhanced Buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/sujaysharvesh"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              borderRadius: "20px",
              backgroundColor: "#000",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="font-sora px-8 py-3 font-medium border border-black/20 cursor-hover relative overflow-hidden rounded-xl text-black hover:text-white hover:bg-black hover:shadow-xl transition-colors"
          >
            GitHub
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/sujay-sharvesh-47737b2b1/"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              borderRadius: "20px",
              backgroundColor: "#0077b5",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0,119,181,0.3)",
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="font-sora px-8 py-3 font-medium border border-[#0077b5]/30 cursor-hover relative overflow-hidden rounded-xl text-[#0077b5] hover:text-white hover:bg-[#0077b5] hover:shadow-xl transition-colors"
          >
            LinkedIn
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1akjhoD7XUsrIBCEQm_Gz0qSnb6Ej_G9t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              borderRadius: "20px",
              backgroundColor: "#059669",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(5,150,105,0.3)",
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="font-sora px-8 py-3 font-medium border border-green-600/30 cursor-hover relative overflow-hidden text-green-600 rounded-xl text-emerald-600 hover:text-white hover:bg-emerald-600 hover:shadow-xl transition-colors"
          >
            Resume
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="mailto:sharveshsujay@example.com"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              borderRadius: "20px",
              backgroundColor: "#dc2626",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(220,38,38,0.3)",
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="font-sora px-8 py-3 font-medium border border-red-600/30 cursor-hover relative overflow-hidden rounded-xl text-red-600 hover:text-white hover:bg-red-600 hover:shadow-xl transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
