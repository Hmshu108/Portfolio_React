import React from "react";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <section>
      <div className="resume px-[0.75rem]">
        <div className="resume-left pt-24 mb-14">
          <div className="h-60 w-60 rounded-full bg-[#1F1F1F] flex justify-center items-center ">
            <motion.svg
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
              viewport={{ once: true, amount: 0.2 }}
              className="object-cover h-40 w-40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#c9f31d"
                d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z"
              />
            </motion.svg>
          </div>
        </div>

        <div className="resume-right">
          <div className="mb-18">
            <motion.h1
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
              className="font-bold opacity-70 text-lg pb-4"
            >
              My Resume
            </motion.h1>
            <motion.p
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
              className="text-3xl leading-10 mb-6 font-medium"
            >
              Real
              <span className="text-[#C9F31D]"> Problem Solutions</span> For
              Experience
            </motion.p>
          </div>
          <div className="resume-right-bottom px-7 py-14 bg-[#1F1F1F] rounded-xl flex flex-col gap-10">
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
              className="flex gap-8 items-top"
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <a href="#" className="opacity-70 text-xl font-bold ">
                  #
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="opacity-70 font-medium tracking-wider ">
                  2021-Present
                </h1>
                <h1 className="text-xl font-medium tracking-wider">
                  Lead Product Designer
                </h1>
                <p className="opacity-70 font-medium tracking-wider text-sm">
                  Google
                </p>
              </div>
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
              className="flex gap-8 items-top"
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <a href="#" className="opacity-70 text-xl font-bold ">
                  #
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="opacity-70 font-medium tracking-wider ">
                  2016-2018
                </h1>
                <h1 className="text-xl font-medium tracking-wider">
                  Junior UI/UX Designer
                </h1>
                <p className="opacity-70 font-medium tracking-wider text-sm">
                  Linkedin
                </p>
              </div>
            </motion.div>
            <div className="resume-right-bottom-border display-none "></div>

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
              className="flex gap-8 items-top"
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <a href="#" className="opacity-70 text-xl font-bold ">
                  #
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="opacity-70 font-medium tracking-wider ">
                  2018-2021
                </h1>
                <h1 className="text-xl font-medium tracking-wider">
                  Senior Product Designer
                </h1>
                <p className="opacity-70 font-medium tracking-wider text-sm">
                  Webflow
                </p>
              </div>
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
              className="flex gap-8 items-top"
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <a href="#" className="opacity-70 text-xl font-bold ">
                  #
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="opacity-70 font-medium tracking-wider ">
                  2014-2016
                </h1>
                <h1 className="text-xl font-medium tracking-wider">
                  Graphic Designer
                </h1>
                <p className="opacity-70 font-medium tracking-wider text-sm">
                  Apple
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
