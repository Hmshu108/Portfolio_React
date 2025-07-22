import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <section>
      <div className="footer px-[0.75rem] pt-18">
        <div className="footer-top ">
          <img className="footer-img" src={logo} alt="" />
          <div className="footer-left">
            <div className="footer-left-top mt-10">
              <p className="text-lg mt-4 font-semibold">Quick Links</p>
              <div className="flex flex-wrap gap-8 text-lg mt-4 opacity-70">
                <a href="#">Service</a>
                <a href="#">Project</a>
                <a href="#">Pricing</a>
                <a href="#">Faqs</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-mid mt-4 flex items-center gap-2 mb-8">
              <input
                type="text"
                placeholder="Email Address"
                className=" py-4 px-4 text-lg border-b-2 border-[#949494bc]"
              />
              <button className="footer-signup-btn bg-[#c9f31d] px-4 py-2 text-lg rounded-xl text-black font-semibold">
                Sign Up
              </button>
            </div>
          </div>

          <div className="footer-right mt-4 flex flex-col gap-4 text-lg font-semibold opacity-80">
            <p>Address</p>
            <div className="flex flex-col gap-2 opacity-70">
              <p>55 Main Street, 2nd block, New York City</p>
              <p>
                <a href="mailto:support@gmail.com">support@gmail.com</a>
              </p>
              <p>
                <a href="callto:+911234567890">+880 (123) 456 88</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-24">
          <p className=" opacity-80">
            Copyright @2025, Noxfolio All Rights Reserved
          </p>
          <div className="flex gap-8 flex-wrap text-lg opacity-80 mt-4">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
