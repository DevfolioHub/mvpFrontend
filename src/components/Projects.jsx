/* eslint-disable react-hooks/exhaustive-deps */
// import { Link } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { useUser } from "../contexts/UserContext";
import { ProjectCard } from './index';
import { useParams } from "react-router-dom";

const Projects = () => {

  const user = useUser();
  const refs = useRef([]);
  const [tilts, setTilts] = useState([]);

  const { username } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${username}/works`)
      .then(res => res.json())
      .then(setProjects);
  }, [username]);

  useEffect(() => {

    const observers = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTilts((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      observers.push({ observer, ref });
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  return (
    <main className="py-[75px] md:px-20 px-10 max-w-screen-2xl mx-auto bg-white">
      <h3 className="font-bold md:text-5xl text-4xl sm:text-3xl flex justify-center relative text-black">Selected Projects <span className="absolute h-[6px] w-20 md:w-32 bg-slate-600 rounded-l-full rounded-r-full bottom-[-14px]"></span></h3>
      <div className="flex flex-col gap-20 mt-10">

        {user.projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            reversed={i % 2 !== 0}
            refCallback={(el) => (refs.current[i] = el)}
            tilt={tilts[i]}
          />
        ))}

      </div>
    </main>
  )
}


export default Projects;