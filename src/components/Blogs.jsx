import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import {motion} from "motion/react"
const Blogs = () => {
  return (
    <section>
      <div className="news px-[0.75rem] py-24">
        <div>
          <motion.div
          
          initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}

          className="flex flex-col gap-6 items-center">
            <p className="font-semibold opacity-70">News and Blogs</p>
            <p className="news-heading text-3xl font-semibold">
              Latest News & <span className="text-[#C9F31D]">Blogs</span>
            </p>
          </motion.div>
        </div>

        <motion.div 
        initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 0.3,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
        className="cards-news flex flex-col mt-20 gap-8 ">
          <div className="card-news flex flex-col gap-8 px-[1.5rem] pt-[0.75rem] bg-[#1F1F1F] rounded-xl pb-12">
            <img src={blog1} alt="" />
            <div className="flex flex-col gap-4">
              <p className="opacity-70">Design Figma</p>
              <p className="text-2xl">
                Tips for conductin see usability studies
              </p>
              <hr className="border-b-[1px] border-[#949494bc]"></hr>
              <p className="opacity-70 text-lg">September 25, 2023</p>
            </div>
          </div>

          <div className="card-news flex flex-col gap-8 px-[1.5rem] pt-[0.75rem] bg-[#1F1F1F] rounded-xl pb-12">
            <img src={blog2} alt="" />
            <div className="flex flex-col gap-4">
              <p className="opacity-70">Design Figma</p>
              <p className="text-2xl">
                Keyboard only support assistive technology
              </p>
              <hr className="border-b-[1px] border-[#949494bc]"></hr>
              <p className="opacity-70 text-lg">September 25, 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
