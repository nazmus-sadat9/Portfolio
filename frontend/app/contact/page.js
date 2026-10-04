"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const root = useRef(null);

  // animation
  useGSAP(
    () => {
      gsap.from("[data-anim='top']", {
        yPercent: -60,
        opacity: 0,
        duration: 1,
        ease: "back.out(2)",
        stagger: 0.15,
      });
      gsap.from("[data-anim='bottom']", {
        yPercent: 60,
        opacity: 0,
        duration: 1,
        ease: "back.out(2)",
        stagger: 0.15,
        delay: 0.2,
      });
    },
    { scope: root }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess("Thank you! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={root} className="w-screen h-screen bg-[#ffffdb] flex justify-evenly items-center">

      <div className="w-[70%] md:w-[60%] flex flex-col md:flex-row bg-[#121212] border-[0.2em] border-[#121212] shadow-[0.8em_0.8em_0_0_#121212]">

        <div className="bg-[#ffffff] w-full p-[5%] flex-col flex justify-evenly">
          <h3 data-anim="top" className="uppercase font-bold text-[clamp(1rem,4vw,2.5rem)]">let's <br /> talk</h3>

          <p data-anim="bottom" className="text-[clamp(0.8rem,4vw,1.2rem)]">You can share anything you want.</p>

          <div>
            <a
              data-anim="top"
              className="inline-block text-[clamp(1.2rem,4vw,2rem)] text-[#121212]"
              href="https://github.com/nazmus-sadat9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              data-anim="bottom"
              className="inline-block text-[clamp(1.2rem,4vw,2rem)] text-[#121212]"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              data-anim="top"
              className="inline-block text-[clamp(1.2rem,4vw,2rem)] text-[#121212]"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full p-[5%] bg-[#121212] text-[#ffffff] flex flex-col justify-evenly items-center gap-2">
          <div data-anim="top" className="w-full flex justify-center items-center">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="NAME"
              className="w-full p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div data-anim="bottom" className="w-full flex justify-center items-center">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              className="w-full p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div data-anim="top" className="w-full flex justify-center items-center">
            <textarea
              rows="4"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="MESSAGE"
              className="w-full resize-none p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div data-anim="bottom" className="w-full flex justify-center items-center py-[3%]">
            <button type="submit" disabled={loading} className="w-full p-[2%] bg-[#ffffdb] text-[#121212] border-[0.1em] border-[#121212]">
              {loading ? 'SENDING...' : 'SEND'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
