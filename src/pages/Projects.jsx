import { ArrowLeftIcon, ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import projects from "../components/data/ProjectData";

const Projects = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-screen-xl mx-auto text-white py-5 w-[95%] sm:w-[90%]">
        <div className="px-6 lg:px-10 py-8 md:py-17">
          <Link to={"/"}>
            <p className="flex items-center font-bold text-emerald-400 gap-2 cursor-pointer">
              <ArrowLeftIcon />
              Israel Olayinka
            </p>
          </Link>
          <h1 className="text-2xl md:text-4xl font-extrabold">My Projects</h1>
          <div className="mt-10">
            <div className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
              <div className="grid grid-cols-[2fr_3fr] sm:grid-cols-[1fr_3fr_3fr] lg:grid-cols-[1fr_3fr_5fr_3fr] sm:py-3 py-5 text-lg">
                <div className="font-semibold text-gray-200">Year</div>
                <div className="font-semibold text-gray-200">Project</div>
                <div className="font-semibold text-gray-200 hidden lg:block">
                  Built With
                </div>
                <div className="font-semibold text-gray-200 hidden sm:block">
                  Link
                </div>
              </div>
            </div>
            {projects.map((project, idx) => (
              <div
                className="grid grid-cols-[2fr_3fr] sm:grid-cols-[1fr_3fr_3fr] lg:grid-cols-[1fr_3fr_5fr_3fr] items-start  sm:py-5 py-4 border-b border-slate-800"
                key={idx}
              >
                <div className="text-gray-500">{project.year}</div>
                <div>
                  <div className="hidden sm:block">{project.title}</div>
                  <div>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-500 text-base font-semibold  text-white block sm:hidden"
                    >
                      {project.title}
                      <ArrowUpRight className="w-3 inline-block -mt-1.5" />
                    </a>
                  </div>
                </div>
                <div className=" flex-wrap gap-2 mt-4 hidden lg:flex">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full text-emerald-400 bg-emerald-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="hidden sm:block">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500 text-base font-semibold  text-gray-500"
                  >
                    {new URL(project.liveDemo).hostname.replace(/^www\./, "")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
