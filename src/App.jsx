import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Cursor from "./components/Cursor";
import Aside from "./components/Aside";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <Cursor />
    <ToastContainer />
    <div className="bg-slate-950">
      <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row min-h-screen text-slate-400">
            <Aside/>

            <main className="w-full lg:w-3/5 px-6 lg:px-12 bg-slate-950 mb-6">

              <About />
              <Experience />
              <Project />
              <Contact />

            </main>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
