import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cl13wss", // Replace with your EmailJS Service ID
        "template_wylc1y1", // Replace with your EmailJS Template ID
        form.current,
        "1fkgKxRVbdgerCr_3", // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-5 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 text-center mt-4">
          Contact
        </h2>
        <div className="w-30 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      <div className="flex w-full flex-col md:flex-row justify-between mt-4 md:mt-0 gap-x-4 md:flex-row">
        <div className="md:w-1/2 md:text-left mt-2 md:mt-0">
          <h5 className="text-4xl font-bold mt-4 my-2 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md leading-relaxed text-justify">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          <div className="flex md:flex space-x-4 text-gray-300 mr-4 justify-center items-center md:justify-start">
            <a
              href="https://github.com/singhvivek76"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/singhvivek76/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://leetcode.com/u/tovivek/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <SiLeetcode size={28} />
            </a>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white text-center">
            Connect With Me <span className="ml-1">🚀</span>
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r cursor-pointer transition duration-300 transform hover:scale-105 from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
