import React from "react";
import clientLogo1 from "../assets/client-logo1.png";
import clientLogo2 from "../assets/client-logo2.png";
import clientLogo3 from "../assets/client-logo3.png";
import clientLogo4 from "../assets/client-logo4.png";
import clientLogo5 from "../assets/client-logo5.png";
import clientLogo6 from "../assets/client-logo6.png";
import clientLogo7 from "../assets/client-logo7.png";
import clientLogo8 from "../assets/client-logo8.png";
import clientLogo9 from "../assets/client-logo9.png";
import clientLogo10 from "../assets/client-logo10.png";
import { motion } from "motion/react";
const Clients = () => {
  return (
    <section>
      <div className="clients px-[0.75rem] py-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity:1,
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
          className="flex flex-col"
        >
          <p className="client-heading font-semibold text-xl text-center">
            I've <span className="text-[#BFE71C]"> 1253+ Global Clients</span> &
            lot's of Project Completed
          </p>
        </motion.div>
        <div className="client flex flex-wrap gap-8 mt-10 justify-center items-center ">
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo1}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo2}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo3}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo4}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo5}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.6,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo6}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.7,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo7}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo8}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 1.9,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo9}
            alt=""
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity:0.15,
              y: 0,
            }}
            transition={{
              duration: 2,
              delay: 0.2,
              ease: "linear",
            }}
            viewport={{
              once: true,
            }}
            className="opacity-15 h-15 w-20"
            src={clientLogo10}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
