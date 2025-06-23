"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  // Languages
  "Python", "Java", "JavaScript",
  // Frameworks
  "Spring Boot", "FastAPI",
  // Tools & Technologies
  "RESTful APIs", "React", "JWT", "OAuth2", "WebSocket", "Postman", 
  "RabbitMQ", "Docker", "AWS (EC2, S3)", "Render", "CI/CD",
  // Databases
  "PostgreSQL", "MongoDB", "Redis", "Redis Pub/Sub",
  // Version Control
  "Git", "GitHub", "GitHub Actions"
];

export function TeckStack() {
  return (
    <section className="min-h-screen flex items-center py-20 px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-6" style={{ color: "black" }}>
            Tech Stack
          </h2>
          <p className="font-sora text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build robust, scalable backend systems
          </p>
        </div>

        {/* Animated Stack Items */}
        <motion.div
          className="max-w-11xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <div className="flex flex-wrap gap-5 justify-center">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="bg-white font-sora text-black px-6 py-3 rounded-full text-1xl font-thin text-balance hover:bg-gray-200 transition-colors duration-200 cursor-default shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeckStack;
