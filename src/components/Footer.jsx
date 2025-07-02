/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */


import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from "react";
import {Icons} from "./index"

const AnimatedText = ({text, customClassName}) => {
  const [visibleChars, setVisibleChars] = useState(false);
  const textRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleChars(false); // Reset the state to trigger reanimation
        setTimeout(() => {
          setVisibleChars(true);
        }, 100); // Small delay to ensure re-render
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the component is visible
    });

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
    <div ref={textRef} className="flex justify-center items-center">
      {visibleChars && (
        <TypeAnimation
          sequence={[text, 2000]} // 2000ms pause after typing
          wrapper="p"
          cursor={false}
          repeat={0} // Do not repeat the animation
          className={customClassName}
        />
      )}
    </div>
  )

}

const Footer = () => {
  return (
    <footer className='bg-[rgb(228,243,255)] font-sans p-10 flex flex-col items-center gap-8'>
      {/* <p className="text-black w-auto  text-6xl font-bold">Want us to work <br />together?</p> */}
      <div className="flex flex-col justify-center items-center">
        <div className="mb-2"> {/* Margin bottom to separate lines */}
          <AnimatedText text="Want us to work" customClassName={"md:text-6xl text-4xl font-bold text-black block"} />
        </div>
        <div>
          <AnimatedText text="together?" customClassName={"md:text-6xl text-4xl font-bold text-black block"} />
        </div>
      </div>
      <div className='flex flex-col items-center max-w-screen-2xl mx-auto gap-8'>
        <a href="tel:+2349038547491">
          <button className='bg-[#FF6B35] w-fit py-3 px-5 rounded-full '>Contact Me</button>
        </a>
        <Icons/>
      </div>
    </footer>
  )
}

export { Footer, AnimatedText };