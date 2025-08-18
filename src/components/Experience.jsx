const Experience = () => {
  return (
    <>
       <section id="experience" className="relative mb-24">
                <div>
                  <div className="sticky top-0 z-30 bg-slate-950 py-2">
                    <p className="mb-6 block lg:hidden text-slate-100 font-bold">
                      Experience
                    </p>
                  </div>
                  <div className="bg-slate-950 text-slate-400 space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="grid grid-cols-12 gap-4 rounded-lg shadow p-6 hover:bg-slate-900 transition"
                      >
                        <div className="col-span-3">
                          <p className="font-semibold">Today</p>
                        </div>
                        <div className="col-span-9">
                          <p className="font-semibold text-slate-100">Card title</p>
                          <p className="text-lg mt-2 text-slate-400">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Nemo itaque omnis
                            quas, voluptates incidunt delectus et, fugiat dolorem
                            saepe consequatur dolore magni ea cum iure
                            necessitatibus vel. Libero, nesciunt ad?.
                          </p>
                          <div className="flex flex-wrap gap-3 mt-4">
                            {["JavaScript", "React", "TypeScript", "Tailwind"].map(
                              (tag, idx) => (
                                <p
                                  key={idx}
                                  className="px-3 py-1 rounded-full text-emerald-400 bg-emerald-400/10 text-sm"
                                >
                                  {tag}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-6">
                      <p className="font-bold text-slate-100 cursor-pointer">
                        View full resume
                      </p>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Experience;