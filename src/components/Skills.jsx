import React from "react";
import figma from "../assets/skill1.png";
import framer from "../assets/skill2.png";
import photoshop from "../assets/skill3.png";
import wordpress from "../assets/skill4.png";
import angular from "../assets/skill5.png";
import webflow from "../assets/skill6.png";
import python from "../assets/skill7.png";
import sketch from "../assets/skill8.png";
import {motion} from "motion/react"
const Skills = () => {
  return (
    <section className="pt-24">
      <div className="px-[0.75rem] skills">
        <motion.div 
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
        className="skills-left skills-top flex flex-col gap-10 mb-14 ">
          <h1 className="font-semibold opacity-70 text-lg ">My Skills</h1>
          <h1 className="skills-heading text-3xl font-bold">
            Let's Explore Popular{" "}
            <span className="text-[#C9F31D]">Skills & Experience</span>
          </h1>
          <p className="opacity-70 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iusto libero vel culpa consequuntur natus doloribus minus
            repellendus magnam earum. Dolor quos sed ipsum incidunt repudiandae
          </p>

          <button className="py-2 px-6 font-bold bg-[#C9F31D] rounded-xl text-black w-[154px]">
            Learn More
          </button>
        </motion.div>

        <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              viewport={{
                amount: 0.2,
                once: true,
              }}
        className="skills-right flex flex-wrap gap-4 px-1.5 ">
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={figma} alt="" />
            <h1 className="text-xl font-semibold">Figma</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              95%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={framer} alt="" />
            <h1 className="text-xl font-semibold">Framer</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              83%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={photoshop} alt="" />
            <h1 className="text-xl font-semibold">Photoshop</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              93%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={wordpress} alt="" />
            <h1 className="text-xl font-semibold">Wordpress</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              84%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={angular} alt="" />
            <h1 className="text-xl font-semibold">Angular</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              65%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={webflow} alt="" />
            <h1 className="text-xl font-semibold">Webflow</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              86%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={python} alt="" />
            <h1 className="text-xl font-semibold">Python</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              62%
            </button>
          </div>
          <div className="h-56 w-42 bg-[#1F1F1F] rounded-xl flex flex-col gap-6 justify-center items-center pb-2.5 pt-6 px-2.5">
            <img src={sketch} alt="" />
            <h1 className="text-xl font-semibold">Sketch</h1>
            <button className="w-full rounded-xl bg-black text-white py-2 px-4 opacity-50 font-lg font-semibold">
              94%
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
