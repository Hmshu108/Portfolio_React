import React from 'react'

const Hero = () => {
  return (
     <section>
              <div className="hero  px-7 relative">
                <div className="hero-left  flex flex-col gap-10 mb-14 mx-auto">
                  <h1 className="text-5xl flex flex-col gap-2">
                    <span className=" opacity-35">Hello, i’m</span>
                    <span className="text-[#C9F31D] font-bold">Roy C. Jones</span>
                    <span> web designer</span>
                  </h1>
                  <p className="text-lg mb-1 opacity-80">
                    We denounce with righteous indignation dislike demoralized by
                    the charms of pleasure
                  </p>
                  <div className="hero-left-bottom">
                    <button className="py-2 px-6 text-center bg-[#C9F31D] mt-4 mr-9 rounded-lg text-black font-bold">
                      Hire Me{" "}
                    </button>
                    <a href="#" className="underline ">
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="hero-middle flex flex-col gap-10 px-10 py-9 bg-black rounded-lg mb-10 mx-auto">
                  <div className="border-b-2 border-[#949494bc] mb-10 pb-6">
                    <h1 className="text-[40px] font-bold text-[#C9F31D] ">13+</h1>
                    <h2 className="text-[#e8e8e8ab]">Years of Experience</h2>
                  </div>
                  <div className="border-b-2 border-[#949494bc] mb-10 pb-6">
                    <h1 className="text-[40px] font-bold text-[#C9F31D] ">10+</h1>
                    <h2 className="text-[#e8e8e8ab]">Projects Completed</h2>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-bold text-[#C9F31D] ">99%+</h1>
                    <h2 className="text-[#e8e8e8ab]">Clients Satisfied</h2>
                  </div>
                </div>
                <div className="hero-right relative rounded-full border-2 overflow-hidden">
                  <img
                    className="hero-image w-[458px] z-10 relative"
                    src="https://noxfolio.vercel.app/assets/images/hero/me.png"
                    alt=""
                  />
                  <div className="circle absolute top-24 left-15 w-50 h-50 rounded-full bg-[#C9F31D] opacity-50 "></div>
                </div>
              </div>
            </section>
  )
}

export default Hero
