/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Profile } from "../components";
import dev from "../assets/dev.png"

import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = ({ text, customClassName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 10% of the component is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className={customClassName}>
      {isVisible && (
        <TypeAnimation
          sequence={[text, 2000]} // 2000ms pause after typing
          wrapper="p"
          cursor={false}
          repeat={0} // Do not repeat the animation
        />
      )}
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="">
      <section className="flex flex-col pt-32 gap-3 px-20 sm:px-10 py-10 bg-[#E4F3FF] text-black" style={{height: "calc(100vh - 106px)"}}>
        <div className="flex items-center flex-nowrap gap-[6px]">
          <img src={dev} alt="multitasker icon" width={30} className="inline sm:w-6" />
          <p className="inline font-medium sm:text-sm">ABOUT EMMANUEL AJIBOKUN</p>
        </div>
        <AnimatedText text={"Frontend Engineer"} customClassName="font-bold md:text-7xl text-4xl" />
        <p >I am a Frontend Engineer based in Akure, Nigeria</p>
      </section>
      
      <Profile/>
    </div>
  )
}

export {AboutMe, AnimatedText};