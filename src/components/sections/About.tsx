import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SkillBar from "../ui/SkillBar";
import { skills } from "../../data/skills";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const About: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAllSkills(true);
  };

  return (
    <section
      id="about"
      className="py-20 relative z-10"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better: my journey, skills and what drives me in the world of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-12">
          {/* My Journey Section */}
          <motion.article
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className="text-4xl font-semibold text-white mb-2"
              id="about-heading"
            >
              My <span className="text-purple-500">Journey</span>
            </h3>
            <p className="text-gray-400">
              I’m a Computer Science student specializing in Artificial Intelligence
              and Machine Learning at Chandigarh University. My passion for technology 
              and problem-solving has driven me to explore machine learning, deep learning, 
              and data science through hands-on projects and internships.
            </p>
            <p className="text-gray-400">
              I’ve immersed myself in building impactful AI-driven solutions—transforming 
              raw data into real-world insights through Machine Learning, Deep Learning, 
              and Natural Language Processing. What began as curiosity has grown into a 
              deep passion for creating intelligent, efficient systems that solve real problems.
            </p>
          </motion.article>

          {/* My Skills Section */}
          <motion.aside
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold text-white mb-4">
              My <span className="text-purple-500">Skills</span>
            </h3>
            <div className="space-y-4">
              {/* Display only a limited number of skills initially */}
              {skills.slice(0, 5).map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}

              {/* Conditionally render the rest of the skills */}
              {showAllSkills && (
                <>
                  {skills.slice(5).map((skill, index) => (
                    <SkillBar key={skill.id} skill={skill} index={index} />
                  ))}
                </>
              )}
            </div>

            {/* See More button */}
            {!showAllSkills && (
              <button
                onClick={handleSeeMoreClick}
                className="mt-6 w-full text-xl  text-purple-500 hover:underline hover:scale-110"
              >
                See More Skills
              </button>
            )}

            {/* After clicking 'See More', blur the extra skills */}
            {showAllSkills && (
              <div className="mt-4 text-gray-400 text-sm">
                <p className="text-center">Click on a skill to explore more!</p>
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
