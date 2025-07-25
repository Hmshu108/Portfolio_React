import React from "react";
import { motion } from "motion/react";
const Services = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="services px-[0.75rem]">
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
          className="services-top mb-6"
        >
          <h1 className="text-center opacity-70 text-xl font-medium mb-3.5">
            Popular Services
          </h1>
          <h1 className="service-heading text-3xl text-center font-semibold leading-10 px-6">
            My <span className="text-[#C9F31D]">Special Service</span> for your
            Business Development
          </h1>
        </motion.div>

        <div className="services-bottom flex flex-col">
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">01.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Brand Identity Design</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">02.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Website Design</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">03.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Mobile Application Design</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">04.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Motion Graphics Design</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">05.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Website Development</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
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
            className="service-item flex flex-col gap-4 bg-[#1f1f1f] rounded-xl mt-6 py-9 px-6 text-2xl"
          >
            <p className="font-semibold">06.</p>
            <div className="flex flex-col gap-2">
              <p className="font-bold">SEO & Digital Marketing</p>
              <p className="opacity-50 text-xl">Lorem ipsum dolor sit.</p>
            </div>
            <div className="service-item-circle w-10 h-10 rounded-full flex justify-center items-center bg-black opacity-50">
              #
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
