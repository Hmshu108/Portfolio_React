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
const Clients = () => {
  return (
    <section>
      <div className="clients px-[0.75rem] py-24">
        <div className="flex flex-col">
          <p className="client-heading font-semibold text-xl text-center">
            I've <span className="text-[#BFE71C]"> 1253+ Global Clients</span> &
            lot's of Project Completed
          </p>
        </div>
        <div className="client flex flex-wrap gap-8 mt-10 justify-center items-center ">
          <img className="opacity-15 h-15 w-20" src={clientLogo1} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo2} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo3} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo4} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo5} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo6} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo7} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo8} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo9} alt="" />
          <img className="opacity-15 h-15 w-20" src={clientLogo10} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
