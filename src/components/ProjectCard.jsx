/* eslint-disable react/prop-types */
// components/ProjectCard.jsx

import { AnimatedText } from ".";
import danger from '../assets/danger-sign.png';
import etchasketch from "../assets/etchasketch.png";

export default function ProjectCard({
  project,
  reversed,
  refCallback,
  tilt,
}) {
  return (
    <div className="flex gap-8 flex-col md:flex-row">
      <div
        className={`relative grow overflow-hidden min-w-[150px] md:max-w-[400px] ${
          reversed ? ' md:left-16 left-7 order-2 md:order-1' : 'md:right-16 right-7'
        }`}
        ref={refCallback}
      >
        <div className="relative" style={{ paddingTop: '66.67%' }}>
          <img
            src={etchasketch}
            alt="project"
            className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-transform duration-500 ease-in-out transform ${
              tilt ? (reversed ? 'rotate-[-5deg]' : 'rotate-[5deg]') : ''
            } ${reversed ? 'origin-top-right' : 'origin-top-left' }`}
          />
        </div>
      </div>

      <div
        className={`flex-[.6] grid grow text-black ${
          reversed ? '' : 'order-1 md:order-2'
        }`}
      >
        <AnimatedText
          text={project.title}
          customClassName="Outfit text-white font-bold text-xl mr-auto mb-[25px] bg-[#FF6B35] py-[2.14px] px-[9.86px] inline-block self-end w-fit justify-self-start"
        />
        <p className="md:text-lg md:text-left">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          className="flex items-center"
          rel="noopener noreferrer"
        >
          <p className="md:text-base text-left text-xs font-bold">
            More Detail
          </p>
          <img src={danger} alt="danger sign" className="h-5" />
        </a>
      </div>
    </div>
  );
}
