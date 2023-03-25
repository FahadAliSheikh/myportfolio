import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const fmaDesc = `Pakistan's first tourism platform that allows
 tour operator to list their cool tours, and customers can book cool tours of their choice`;
const chatingarDesc = `A cool online chatting website developed using MERN Stack technology with tailwind
 that allows users to chat online with anonymously with other people and make new friends`;
const alrasheedDesc = `A property management system solution that helps property agencies
  manage their records, track installments and payment plans and get insights from data. `;
const dmechanicDesc = `A mobile application for mechanics and other relevant service providers.
 Here customers can find any sort of mechanics in the quickest possible time when they need their vehicles fixed. `;

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
     bg-grey z-30 flex flex-col juslity-center items-center text-center p-16 text-deep-blue`;
  const projectTile = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 ">{description}</p>
      </div>
      <img src={`../assets/projects/${projectTile}.jpeg`} alt={projectTile} />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            My <span className=" text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A glimps of cool projects I have developed so far.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW ONE */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red 
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACS
          </div>
          <Project title="Find My Adventure" description={fmaDesc} />
          <Project title="Chatingar" description={chatingarDesc} />
          {/* Row 2 */}
          <Project
            title="Alrasheed Property Management"
            description={alrasheedDesc}
          />
          {/* <Project title="Project 4" />
          <Project title="Project 5" /> */}
          {/* Row 3 */}
          {/* <Project title="Project 6" /> */}
          <Project title="D Mechanic" description={dmechanicDesc} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
