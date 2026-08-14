"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {

// Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  
  // UI State
  const [btnText, setBtnText] = useState("SEND");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const container = useRef(null);

  // Validate the form 
  const validateForm = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim().length < 3) {
      setErrorMsg("Name must be at least 3 characters.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!msg.trim()) {
      setErrorMsg("Message cannot be empty.");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  // Submit Handler
  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setBtnText("SENDING...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: msg }),
      });

      if (response.ok) {
        setBtnText("SENT!");
        setName("");
        setEmail("");
        setMsg("");

        setTimeout(() => {
          setBtnText("SEND");
        }, 4000);

      } else {

        alert("Something went wrong! Please try again.");
        setBtnText("SEND");
      }
    
    } catch (err) {

      alert("Network error. Please check your connection.");
      setBtnText("SEND");

    } finally {
      setIsSubmitting(false);
    }
  }

  // animations
  useGSAP(() => {

    const tl = gsap.timeline();
    tl.from(".anime1", {
      y: 40,
      duration: 0.5,
      stagger: 0.1,
      opacity: 0,
      ease: "back.out(2)"
    });

    tl.from(".anime2", {
      y: 40,
      duration: 0.3,
      stagger: 0.1,
      opacity: 0,
      ease: "back.out(2)"
    });

    tl.from(".animeBtn", {
      y: 20,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(2)"
    });

  }, { scope: container, dependencies: [] });

  return (
    <div className="w-full h-full flex-col flex justify-center items-center">


    <div ref={container} className="w-[75%] md:w-[55%] h-auto bg-[#121212] grid sm:grid-cols-1 md:grid-cols-2 border-[#121212] border-[0.3em] shadow-[0.8em_0.8em_0_0_#121212] text-[4vw] md:text-[2rem]">
      <div className="w-full h-auto bg-[#fff] p-[10%]">
        <h2 className="anime1 selection:bg-[#ffffdb] text-[#121212] font-extrabold uppercase text-[6.5vw] md:text-[2.5rem]">Let's <br/>talk</h2>
        <p className="anime1 text-[#555] selection:bg-[#ffffdb] text-[3vw] md:text-[1.3rem] mb-[5%]">You can share your opinion about this website.</p>
        <div className="anime1 text-[5vw] flex justify-around gap-2">
          <FontAwesomeIcon icon={faGithub} href="https://github.com/nazmus-sadat9" target="_blank" rel="noopener noreferrer" className="text-[#121212] md:text-[1rem]" />
          <FontAwesomeIcon icon={faFacebook} href="https://www.facebook.com/share/1JcHannGA4/" target="_blank" rel="noopener noreferrer" className="text-[#121212] font-semibold md:text-[1rem]" />
          <FontAwesomeIcon icon={faInstagram} href="https://www.instagram.com/lord.sadat?igsh=MTBnaW50bjRiaWl6dQ==" target="_blank" rel="noopener noreferrer" className="text-[#121212] font-semibold md:text-[1rem]" />
        </div>
      </div>

      <form onSubmit={submition} className="anime2 w-full h-auto flex flex-col gap-5 py-[10%] px-[8%] text-[2vw] md:text-[0.8rem]"> 
        <input onChange={nameValidation} name="name" value={name} className="anime2 selection:text-[#ffffdb] text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" type="text" placeholder="NAME" />
        <input onChange={emailValidation} name="email" value={email} className="anime2 selection:text-[#ffffdb] text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" type="email" placeholder="EMAIL" />
        <textarea onChange={messageValidation} name="msg" value={msg} className="anime2 selection:text-[#ffffdb] text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" rows="4" type="text" placeholder="MESSAGE"></textarea>
        <button className="animeBtn opacity-0 text-[#121212] p-[3%] uppercase bg-[#ffffdb] font-bold selection:bg-[#121212] selection:text-[#ffffdb]" type="submit">{btnText || "SEND"}</button>
      </form>
    </div>

      
    </div>
  );
}

export default ContactForm;
