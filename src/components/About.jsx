const About = () => {
  return (
    <>
      <section id="About" className="pt-20 mb-24 px-3">
        <div className="flex flex-col gap-6">
          <h2 className="block lg:hidden mb-6 text-slate-100 text-3xl font-bold">
            About
          </h2>

          {/* About Text */}
          <p className="text-slate-400">
            I am a{" "}
            <span className="font-medium text-gray-200">Frontend Developer</span>{" "}
            passionate about building accessible, pixel-perfect user interfaces
            that clearly communicate a product’s vision to its target audience.
            My approach goes beyond creating intuitive designs—I place strong
            emphasis on{" "}
            <span className="font-medium text-gray-200">performance</span>,{" "}
            <span className="font-medium text-gray-200">scalability</span>, and{" "}
            <span className="font-medium text-gray-200">user experience</span>.
          </p>

          <p className="text-slate-400">
            Currently, I am interning at{" "}
            <span className="font-medium text-gray-200">
              Binarify International Limited,
            </span>{" "}
            where I contribute to the development of a school administration
            system that manages student and teacher records, payment methods, and
            gateways.
          </p>

          <p className="text-slate-400">
            As a self-taught developer, I’ve built multiple projects ranging from
            a weather app and job posting platform to a rock-paper-scissors game
            and a fully functional e-commerce store. Each project has strengthened
            my problem-solving skills and deepened my love for crafting impactful
            digital experiences. Beyond frontend, I am also a Web3 enthusiast,
            exploring smart contract development with Solidity and diving into the
            exciting world of decentralized applications.
            <br />
            <br />
            I am ever-learning, always improving, and passionate about pushing the
            boundaries of what I can create.
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-6">
            {/* Download Resume */}
            <a
              href="/resume.pdf" // place resume in public folder
              download
              className="px-5 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
            >
              Download Resume
            </a>

            {/* Contact Me */}
            <a
              href="#Contact" // link to contact section
              className="px-5 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
