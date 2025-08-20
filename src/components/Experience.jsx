import { Experiences } from "./data/ExperienceData";

const Experience = () => {
  return (
    <>
       <section id="Experience" className="relative mb-24 px-3">
                <div>
                  <div className="sticky top-0 z-30 bg-slate-950 py-2">
                    <p className="mb-6 block lg:hidden text-slate-100 font-bold">
                      Experience
                    </p>
                  </div>
                  <div className="bg-slate-950 text-slate-400 space-y-6">
                  {Experiences.map((experience) => (
                    <div
                      key={experience.id}
                      className="grid grid-cols-12 gap-6 rounded-2xl shadow-lg p-6 hover:bg-slate-900 transition border border-slate-800"
                    >
                      {/* Left Section - Timeline & Company Logo */}
                      <div className="md:col-span-4 col-span-12 flex flex-col md:items-start place-self-center  md:place-self-start items-center">
                        {experience.companyLogo && (
                          <img
                          src={`/ExperienceImg/${experience.companyLogo}`}
                            alt={experience.company}
                            className="w-20 h-20 object-contain mb-3 rounded-full border-2 border-blue-400"
                          />
                        )}
                        <p className="font-semibold text-slate-300 text-nowrap md:text-lg">
                          {`${experience.startYear} - ${experience.endYear}`}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">{experience.location}</p>
                      </div>

                      {/* Right Section - Details */}
                      <div className="md:col-span-8 col-span-12 space-y-4">
                        {/* Job Title & Company */}
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">
                            {experience.jobTitle}
                          </h3>
                          <p className="text-sm text-slate-400">
                            {experience.company} • {experience.employmentType}
                          </p>
                        </div>

                        {/* Achievements */}
                        {experience.achievements.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                            {experience.achievements.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}

                        {/* Skills */}
                        {experience.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-slate-500 mb-2">
                              Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.skills.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium rounded-full text-emerald-400 bg-emerald-400/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        {experience.technologies.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-slate-500 mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium rounded-md text-blue-400 bg-blue-400/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="mt-8 text-center">
                      <p className="font-bold text-slate-100 cursor-pointer hover:text-emerald-400 transition">
                        View all experience →
                      </p>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Experience;