import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portofolio from './component/Portofolio'

import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: "none", duration: 2 })
function App() {
  const container = useRef()

  const portofolio = useRef();
  const portofolios = useRef();
  const footer = useRef();
  useGSAP(() => {
    // use selectors...
    //gsap.to(".home", { rotation: "+=360" });

    const t1 = gsap.timeline()
    
    t1.from(".portofolio", { xPercent: -100 })
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
    <div ref={container} className="containerC">
      <Navbar />
      <div className="">
      <Home />
      </div>
      <div ref={portofolio} className=" portofolio bg-white">
        <Portofolio />
      </div>
      
      <div useRef={footer} className="footer text-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;
