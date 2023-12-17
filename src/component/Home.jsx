import React, {useRef} from 'react'
import Typed from 'react-typed'


import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: "none", duration: 2 })

const Home = () => {
    const container = useRef()

  const heading = useRef();
  const portofolios = useRef();
  const footer = useRef();
  useGSAP(() => {
    // use selectors...
    //gsap.to(".home", { rotation: "+=360" });

    const t1 = gsap.timeline()
    
    gsap.to(".heading", {rotation: 360, x: 100, duration: 1})
    t1.from(".portofolios", { xPercent: 100 })
    
    ScrollTrigger.create({
      animation: t1,
      trigger: ".containerC",
      start: "top top",
      end: "+=1200px",
      pinSpacing: false,
      scrub: true,
      pin: true,
      anticipatePin: 1
    })



    // or refs...
    //gsap.to(portofolio.current, { rotation: "-=360" });

  }, { scope: container });
    return (
        <div className='text-white'>
            <div className='max-w-[800px] xsm:mt-0  md:mt-[-76px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
                <h1 ref={heading} className='heading md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Hello, there!</h1>
                <p className='md:text-2xl text-xl xsm:text-[15px] text-gray-300'>
                    I'm a dedicated software engineer fueled by a passion for turning intricate ideas into functional, user-centric solutions. 
                    Proficient in various programming languages and armed with a keen eye for detail,
                 I specialize in creating robust, scalable applications. My experience spans both front-end and back-end development,
                  allowing me to craft seamless experiences while ensuring efficient system architecture. 
                 I thrive in collaborative environments, embracing challenges as opportunities to learn and innovate. My goal is to continuously evolve, 
                contributing positively to technological advancements while delivering impactful solutions that resonate with users.</p>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl xsm:text-lg text-xl font-bold py-4'>Programming languages:
                        <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-5'
                            strings={['Java', 'Kotlin', 'Python', 'Javascript']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </p>

                </div>
                
                <button className='bg-[#00df9a] w-[200px] hover:text-white hover:bg-[#187e5d] rounded-md font-medium mx-auto my-6 py-3 text-black hover:scale-105 duration-300'>Get my CV</button>
            </div>
        </div>
    )
}

export default Home