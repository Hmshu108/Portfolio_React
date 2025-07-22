import React from 'react'

const Pricing = () => {
  return (
    <section>
              <div className="px-[0.75rem] py-24">
                <div className="flex flex-col gap-8 items-center">
                  <p className="opacity-70 text-lg font-semibold">
                    Pricing Package
                  </p>
                  <p className="pricing-heading font-medium text-3xl text-center">
                    Amazing <span className="text-[#C9F31D]">Pricing</span> for Your
                    Projects
                  </p>
                </div>
                <div className=" pricing-cards flex flex-col gap-8 items-center mt-24">
                  <div className="pricing-card bg-[#1F1F1F] rounded-xl px-3 py-4 pb-12">
                    <div className=" flex flex-col gap-8 bg-[#131313] rounded-xl px-6 py-10">
                      <div className="flex flex-col gap-2 ">
                        <p className="text-2xl font-semibold">Basic Plan</p>
                        <p className=" text-lg font-semibold">
                          <span className="opacity-70">
                            {" "}
                            Try Out Basic Plan Save
                          </span>
                          <span className="text-[#C9F31D]"> 20%</span>
                        </p>
                      </div>
                      <p className="font-semibold">
                        <span className="text-4xl text-[#C9F31D]"> $19.95</span>
                        <span className="font-sm opacity-70">/per Month</span>
                      </p>
                    </div>
    
                    <div className="px-2 mt-8">
                      <p className="opacity-70 text-lg leading-8 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="mt-10">
                        <ul className="text-xl flex flex-col gap-10">
                          <li>Website Design</li>
                          <li>Mobile Apps Design</li>
                          <li>Product Desing</li>
                          <li className="opacity-70">Digital Marketing</li>
                          <li className="opacity-70">Custom Support</li>
                        </ul>
                      </div>
                      <button className="pricing-card-btn px-4 py-2 font-semibold rounded-xl bg-[#353535] text-xl mt-10 opacity-70">
                        Choose Package
                      </button>
                    </div>
                  </div>
    
                  <div className="pricing-card bg-[#1F1F1F] rounded-xl px-3 py-4 pb-12">
                    <div className=" flex flex-col gap-8 bg-[#131313] rounded-xl px-6 py-10">
                      <div className="flex flex-col gap-2 ">
                        <p className="text-2xl font-semibold">Standard Plan</p>
                        <p className=" text-lg font-semibold">
                          <span className="opacity-70">
                            {" "}
                            Try Out Basic Plan Save
                          </span>
                          <span className="text-[#C9F31D]"> 35%</span>
                        </p>
                      </div>
                      <p className="font-semibold">
                        <span className="text-4xl text-[#C9F31D]"> $19.95</span>
                        <span className="font-sm opacity-70">/per Month</span>
                      </p>
                    </div>
    
                    <div className="px-2 mt-8">
                      <p className="opacity-70 text-lg leading-8 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="mt-10">
                        <ul className="text-xl flex flex-col gap-10">
                          <li>Website Design</li>
                          <li>Mobile Apps Design</li>
                          <li>Product Desing</li>
                          <li>Digital Marketing</li>
                          <li>Custom Support</li>
                        </ul>
                      </div>
                      <button className="pricing-card-btn px-4 py-2 font-semibold rounded-xl bg-[#353535] text-xl mt-10 opacity-70 ">
                        Choose Package
                      </button>
                    </div>
                  </div>
    
                  <div className="pricing-card bg-[#1F1F1F] rounded-xl px-3 py-4 pb-12">
                    <div className=" flex flex-col gap-8 bg-[#131313] rounded-xl px-6 py-10">
                      <div className="flex flex-col gap-2 ">
                        <p className="text-2xl font-semibold">Basic Plan</p>
                        <p className=" text-lg font-semibold">
                          <span className="opacity-70">
                            {" "}
                            Try Out Basic Plan Save
                          </span>
                          <span className="text-[#C9F31D]"> 45%</span>
                        </p>
                      </div>
                      <p className="font-semibold">
                        <span className="text-4xl text-[#C9F31D]"> $19.95</span>
                        <span className="font-sm opacity-70">/per Month</span>
                      </p>
                    </div>
    
                    <div className="px-2 mt-8">
                      <p className="opacity-70 text-lg leading-8 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="mt-10 px-4">
                        <ul className="text-xl flex flex-col gap-10">
                          <li>Website Design</li>
                          <li>Mobile Apps Design</li>
                          <li>Product Desing</li>
                          <li>Digital Marketing</li>
                          <li>Custom Support</li>
                        </ul>
                      </div>
                      <button className="pricing-card-btn px-4 py-2 font-semibold rounded-xl bg-[#353535] text-xl mt-10 opacity-70">
                        Choose Package
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Pricing
