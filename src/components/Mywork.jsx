import React from 'react'
import work1 from "../assets/project1.jpg";
import work2 from "../assets/project2.jpg";
import work3 from "../assets/project3.jpg";
import work4 from "../assets/project4.jpg";
const Mywork = () => {
  return (
   <section>
          <div className="mywork pt-20 px-[0.75rem]">
            <div className="mywork-top flex flex-col gap-5  justify-center items-center">
              <p className="text-xl font-bold opacity-70">Latest Works</p>
              <p className="mywork-heading text-3xl font-medium tracking-wide text-center leading-10 mb-6">
                Explore My Popular
                <span className="text-[#C9F31D]">
                  <br />
                  Projects
                </span>
              </p>
            </div>
            <div className="work-cards flex flex-col gap-10 justify-center items-center  ">
              <div className="work-card work-card1 pt-10">
                <img src={work1} alt="" />
                <div className="flex flex-col gap-8 px-6">
                  <p className="text-[#C9F31D] mt-6 font-semibold text-lg">
                    Product Design
                  </p>
                  <p className="text-3xl font-semibold">
                    Mobile Application Design
                  </p>
                  <p className="opacity-70  leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam quibusdam mollitia officiis
                  </p>
                  <button className="h-10 w-10 rounded-full bg-[#f1f1f1] opacity-70 text-black  border-2 border-white">
                    #
                  </button>
                </div>
              </div>
              <div className="work-card work-card2  pt-10">
                <img src={work2} alt="" />
                <div className="flex flex-col gap-8 px-6">
                  <p className="text-[#C9F31D] mt-6 font-semibold text-lg">
                    Product Design
                  </p>
                  <p className="text-3xl font-semibold">
                    Website Makeup Design
                  </p>
                  <p className="opacity-70  leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam quibusdam mollitia officiis
                  </p>
                  <button className="h-10 w-10 rounded-full bg-[#f1f1f1] opacity-70 text-black  border-2 border-white">
                    #
                  </button>
                </div>
              </div>
              <div className="work-card work-card3 pt-10">
                <img src={work3} alt="" />
                <div className="flex flex-col gap-8 px-6">
                  <p className="text-[#C9F31D] mt-6 font-semibold text-lg">
                    Product Design
                  </p>
                  <p className="text-3xl font-semibold">
                    Brand Identity and Motion Design
                  </p>
                  <p className="opacity-70  leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam quibusdam mollitia officiis
                  </p>
                  <button className="h-10 w-10 rounded-full bg-[#f1f1f1] opacity-70 text-black  border-2 border-white">
                    #
                  </button>
                </div>
              </div>
              <div className="work-card work-card4 pt-10">
                <img src={work4} alt="" />
                <div className="flex flex-col gap-8 px-6">
                  <p className="text-[#C9F31D] mt-6 font-semibold text-lg">
                    Product Design
                  </p>
                  <p className="text-3xl font-semibold">
                    Mobile Application Development
                  </p>
                  <p className="opacity-70  leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam quibusdam mollitia officiis
                  </p>
                  <button className="h-10 w-10 rounded-full bg-[#f1f1f1] opacity-70 text-black  border-2 border-white">
                    #
                  </button>
                </div>
              </div>

              <button className="bg-[#C9F31D] py-2 px-6 rounded-xl text-lg text-black font-bold w-64 mt-10">
                View More Projects
              </button>
            </div>
          </div>
        </section>
  )
}

export default Mywork
