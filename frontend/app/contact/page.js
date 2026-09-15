"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
    <div className="w-screen h-screen bg-[#ffffdb] flex flex-col justify-evenly items-center">

      <div className="w-[70%] bg-[#121212] flex-col border-[0.2em] border-[#121212] flex justify-center items-center shadow-[0.6em_0.6em_0_0_#121212]">

        <div className="bg-[#ffffff] w-full p-[5%] flex-col flex justify-evenly">
          <h3 className="uppercase font-bold text-[1.3rem]">let's <br /> talk</h3>

          <p className="text-[0.8rem]">You can share anything there.</p>

          <div>
            <a className="text-[1.2rem] text-[#121212]" href="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a className="text-[1.2rem] text-[#121212]" href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full p-[5%] bg-[#121212] text-[#ffffff] flex flex-col justify-evenly items-center gap-[2%]">
          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="NAME"
              className="p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="EMAIL"
              className="p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <textarea
              rows="4"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="MESSAGE"
              className="p-[2%] outline-none border-[0.1em] border-[#666]"
            />
          </div>

          <div className="w-full flex justify-center items-center p-[3%]">
        <button type="submit" disabled={loading} className="w-full p-[2%] bg-[#ffffff] text-[#121212] border-[0.1em] border-[#121212]">
          {loading ? 'SENDING...' : 'SEND'}
        </button>
        </div>
      </form>
      </div>

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
