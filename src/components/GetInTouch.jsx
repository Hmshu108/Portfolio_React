import React from "react";
import { motion } from "motion/react";
const GetInTouch = () => {
  return (
    <section>
      <div className="px-[0.75rem] py-24">
        <div className="getin flex flex-col gap-10">
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
            className="getin-left"
          >
            <div className="flex flex-col gap-8 ">
              <p className="opacity-70 text-lg font-semibold">Get in Touch</p>
              <p className="getin-left-heading text-3xl font-semibold">
                Let's Talk For your{" "}
                <span className="text-[#C9F31D]">Next Project</span>
              </p>
              <p className="text-lg leading-8 opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, odio.
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-4 text-2xl opacity-70">
                <li>5+ Years of Experience</li>
                <li>Professional Web Designer</li>
                <li>Mobile Apps Design</li>
                <li>Custom Design Support</li>
              </ul>
            </div>
          </motion.div>

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
              duration: 1,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}

          className="getin-right bg-[#1F1F1F] rounded-xl mt-10 px-6 py-10">
            <div className="getin-right-bottom flex flex-col gap-6 pt-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold">Full Name</p>
                  <input
                    type="text"
                    placeholder="Richard D. Hammond"
                    className="w-full rounded-2xl bg-[#1F1F1F] py-4 px-6 text-lg "
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold">Email Address</p>
                  <input
                    type="text"
                    placeholder="support@gmail.com"
                    className="w-full rounded-xl bg-[#1F1F1F] py-4 px-6 text-lg "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold">Phone Number</p>
                  <input
                    type="text"
                    placeholder="+880 (123) 456 88"
                    className="w-full rounded-xl bg-[#1F1F1F] py-4 px-6 text-lg "
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold">Subject</p>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-xl bg-[#1F1F1F] py-4 px-6 text-lg "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold">Message</p>
                <textarea
                  type="text"
                  placeholder="Write Message"
                  className="textarea w-full rounded-xl bg-[#1F1F1F] py-4 px-6 h-30"
                />
              </div>
            </div>
            <button className="getin-button bg-[#C9F31D] py-2 px-6 rounded-xl text-lg text-black font-bold w-50 mt-2">
              Send Message
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
