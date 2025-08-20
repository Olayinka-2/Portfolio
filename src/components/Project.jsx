import projects from "./data/ProjectData";

const Project = () => {
  return (
    <>
           <section id="Projects" className="relative mb-24 px-3">
                <div>
                  <div className="sticky top-0 z-30 bg-slate-950 py-2">
                    <p className="mb-6 block lg:hidden text-slate-100 font-bold">
                      Projects
                    </p>
                  </div>
                  <div className="bg-slate-950 text-slate-400 space-y-8">
  {projects.map((project, i) => (
    <div
      key={i}
      className="grid md:grid-cols-12 gap-6 rounded-2xl shadow-lg p-6 hover:bg-slate-900 transition border border-slate-800"
    >
      {/* Thumbnail */}
      <div className="md:col-span-4">
        <img
          src={`/ProjectImg/${project.image}`}
          alt={project.title}
          className="rounded-xl object-cover w-full h-48 md:h-full"
        />
      </div>

      {/* Project Info */}
      <div className="md:col-span-8 flex flex-col justify-between">
        {/* Title + Year */}
        <div>
          <h3 className="text-xl font-semibold text-slate-100">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 mb-3">{project.year}</p>
          <p className="text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features?.length > 0 && (
            <ul className="list-disc list-inside text-sm text-slate-300 mt-3 space-y-1">
              {project.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full text-emerald-400 bg-emerald-400/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  ))}

  {/* View All Projects */}
  <div className="mt-8 text-center">
    <p className="font-bold text-slate-100 cursor-pointer hover:text-emerald-400 transition">
      View all projects →
    </p>
  </div>
</div>

                </div>
              </section>
    </>
  )
}

export default Project;