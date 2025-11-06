import Cursor from "./components/Cursor";

import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Cursor />
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
