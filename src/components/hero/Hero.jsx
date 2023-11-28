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
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center p-5 hero">
            <div className="col-lg-6 col-md-8">
              <h1 className="text-slate-700 font-bold mb-3 mb-md-4">
                Track |<span> Query </span> | Solution
              </h1>
              <p className="text-slate-600 font-semibold text-base mt-3 mt-md-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                has roots in a piece of classical Latin literature from 45 BC, making
                it over 2000 years old.
              </p>
              <button className="h-16 rounded-lg border-none text-white text-xl font-medium mt-3 mt-md-4 cursor-pointer">
                Explore Now
              </button>
            </div>
            <div className="col-lg-6 col-md-4" ref={container}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
