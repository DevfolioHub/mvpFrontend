/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import multitasker from "../assets/multitasker.png"
import { Projects } from "../components"

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

const Works = () => {
  return (
    <div>
      <section className="flex flex-col pt-20 gap-5 px-20 sm:px-10 py-10 bg-[#E4F3FF] text-black" style={{height: "calc(100vh - 106px)"}}>
        <div className="flex items-center flex-nowrap gap-[6px]">
          <img src={multitasker} alt="multitasker icon" width={36} className="inline" />
          <p className="inline font-medium text-xl sm:text-sm">PROJECTS</p>
        </div>
        <AnimatedText text={"Selected Works"} customClassName="font-bold md:text-7xl text-4xl sm:text-3xl" />
        <p>Not all my projects codebase are public; some are restricted by NDA</p>
      </section>
      
      <Projects/>
    </div>
  )
}

export default Works