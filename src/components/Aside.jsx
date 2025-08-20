import {Link} from "react-scroll";
import {Github, Facebook, Linkedin, Server} from "lucide-react";

const Aside = () => {
  return (
    <>
      <div className="w-full lg:w-2/5 lg:sticky top-0 lg:h-screen overflow-y-auto px-6 lg:px-12 flex flex-col bg-slate-950 py-8 md:py-20">
              <header className="px-3  mb-5">
                <h1 className="font-bold md:text-5xl text-3xl text-slate-200 ">Israel Olayinka</h1>
                <p className=" text-md md:text-xl font-bold text-slate-200 mt-2">
                  Front End Engineer
                </p>
                <p className="mt-4 text-slate-400">
                  I build accessible, pixel-perfect digital experiences for the web.
                </p>

                <nav className="mt-10 hidden lg:flex flex-col space-y-4">

                  {["About", "Experience", "Projects", "Contact"].map((item) => (
                    <Link
                    key={item}
                    to={item}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active-link"
                    className="w-min"
                  >
                    <div className="flex items-center gap-2 px-2 text-slate-300 hover:text-slate-100 transition-colors group cursor-pointer">
                      <span className="line block w-8 h-px bg-slate-300 group-hover:w-16 transition-all"></span>
                      <span>{item}</span>
                    </div>
                  </Link>

                  ))}
                </nav>
              </header>

              <footer className="mt-auto px-3">
                <div className="flex space-x-4 text-lg text-slate-300">
                  <a href="https://github.com/Olayinka-2" target="_blank" rel="noopener noreferrer">
                    <Github className="text-slate-400 hover:text-emerald-400 transition cursor-pointer"/>
                  </a>
                  <a href="https://facebook.com/olayinka.israel.330/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-slate-400 hover:text-emerald-400 transition cursor-pointer"/>
                  </a>
                  <a href="https://www.linkedin.com/in/israel-olayinka-775305307/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-slate-400 hover:text-emerald-400 transition cursor-pointer"/>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Server className="text-slate-400 hover:text-emerald-400 transition cursor-pointer"/>
                  </a>
                </div>
              </footer>
            </div>
    </>
  )
}

export default Aside;