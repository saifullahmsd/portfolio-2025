import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  // Skills ka data (Aap isme aur bhi add kar sakte hain)
  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        }, // Future ready
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Redux Toolkit",
          icon: <SiRedux className="text-purple-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      ],
    },
    {
      category: "Backend & Tools",
      techs: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-500 dark:text-white" />,
        },
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="text-orange-600" />,
        },
        // { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }, // Optional
      ],
    },
  ];

  return (
    <section className="py-20 bg-light dark:bg-dark text-dark dark:text-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            My Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I love learning new technologies. Here are the tools and frameworks
            I use to build robust applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 border-l-4 border-secondary pl-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors"
                  >
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
