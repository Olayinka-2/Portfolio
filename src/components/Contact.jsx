import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b28db99f-1dcc-4078-9717-84eba1b3d47f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
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
              href="olayinkaisrael001@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              Olayinkaisrael001@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/Olayinka-2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/israel-olayinka-775305307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://facebook.com/olayinka.israel.330/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            Facebook
          </a>
        </div>

        {/* Contact Form (Optional) */}
        <form className="mt-8 space-y-4 max-w-lg mx-auto text-left"
        onSubmit={onSubmit}
        >
          <input
            type="text"
            name="FullName"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          />
          <textarea
            placeholder="Leave your Message here"
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
          >
            {
              result ? "Sending..." : "Send Message"
            }
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
