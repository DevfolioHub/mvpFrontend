/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import js from "../assets/js.png"
import html from "../assets/html-5.png"
import sass from "../assets/sass.png"
import python from "../assets/python.png"
import react from "../assets/physics.png"
import github from "../assets/github.png"
import git from "../assets/social.png"
import photoshop from "../assets/photoshop.png"
import vercel from "../assets/ver2.png"
import tailwind from "../assets/tailwind.png"
import formik from "../assets/formik.svg"
import material from "../assets/material.png"
import ts from "../assets/TypeScript.png"
import next from "../assets/Next.png"

import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = ({ text }) => {
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
    <div ref={textRef} className="flex justify-center items-center">
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

const Skills = () => {

  return (
    <section className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto flex flex-col text-black bg-[rgb(228,243,255)]">
      <h3 className="font-bold md:text-5xl text-4xl sm:text-3xl flex justify-center relative text-black mb-10">Skills<span className="absolute h-[6px] w-10 md:w-16 bg-slate-600 rounded-l-full rounded-r-full bottom-[-10px]"></span></h3>

      <div className="flex justify-between md:flex-row flex-col font-medium gap-7">
        <div className="flex flex-col gap-3 ">
          <h5>Programming Languages</h5>
          <div id="languages" className="flex flex-wrap gap-3">
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={js} width={26}  alt="Javascript" />
              <AnimatedText text={"JavaScript"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={ts} width={26}  alt="TypeScript" />
              <AnimatedText text={"TypeScript"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={html} width={26} alt="Html" />
              <AnimatedText text={"HTML"}/>
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={sass} width={26} alt="Sass" />
              <AnimatedText text={"Sass"}/>
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={python} width={26} alt="Python" />
              <AnimatedText text={"Python"}/>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h5>Libraries and Frameworks</h5>
          <div id="languages" className="flex flex-wrap gap-3">
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={react} width={26} alt="React" />
              <AnimatedText text={"React"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={next} width={26} alt="NextJS" />
              <AnimatedText text={"NextJS"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={material} width={26} alt="MaterialUI" />
              <AnimatedText text={"MaterialUI"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={tailwind} width={26} alt="Tailwind" />
              <AnimatedText text={"TailwindCSS"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={formik} width={26} alt="Formik" />
              <AnimatedText text={"Formik"} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h5>Tools and Platforms</h5>
          <div id="languages" className="flex flex-wrap gap-3">
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={vercel} width={26} alt="Vercel" />
              <AnimatedText text={"Vercel"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={github} width={26} alt="Github" />
              <AnimatedText text={"GitHub"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={git} width={26} alt="Git" />
              <AnimatedText text={"Git"} />
            </div>
            <div id="language" className="flex items-end flex-nowrap gap-[4px]">
              <img src={photoshop} width={26} alt="Photoshop" />
              <AnimatedText text={"Photoshop"} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;