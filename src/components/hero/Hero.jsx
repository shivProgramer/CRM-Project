import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/heroimglottie.json";
import './hero.css'
const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
     <>
     <div class="container-fluid">
      <div className="container">
      <div className="d-flex gap-10 justify-content-center align-items-center text-center p-5 ">
      <div className="w-50 h-50">
        <h2 className="text-5xl fs-1 text-slate-700 font-bold mb-8">
          Track |<span className="text-yellow-500"> Query </span> | Solution
        </h2>
        <p className="text-slate-600 font-semibold text-base mt-12">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <button className=" h-16 rounded-lg bg-danger border-none text-white text-xl font-medium mt-7 cursor-pointer">
          Explore Now
        </button>
      </div>
      <div className="container w-50 h-50" ref={container}></div>
    </div>
      </div>
     </div>
     </>
    
  );
};

export default Hero;
