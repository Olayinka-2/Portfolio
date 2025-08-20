const Contact = () => {
  return (
    <section id="Contact" className="pt-20 px-3 bg-slate-950">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-100">Get In Touch</h2>
        <p className="text-slate-400">
          I’m always open to new opportunities, collaborations, or just a chat.
          Feel free to reach out — I’d love to connect with you.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-slate-300">
          <p>
            📍 <span className="text-slate-400">Minna, Nigeria</span>
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-emerald-400 hover:underline"
            >
              Olayinkaisrael001@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            Twitter
          </a>
        </div>

        {/* Contact Form (Optional) */}
        <form className="mt-8 space-y-4 max-w-lg mx-auto text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
