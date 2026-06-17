'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const ContactForm = () => {

  // alerts
  const [emailAlert, setEmailAlert] = useState('');
  const [nameAlert, setNameAlert] = useState('');
  const [msgAlert, setMsgAlert] = useState('');

  // user data collection 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const container = useRef(null);
  const iconBox = useRef(null);

  let isValid = true;

  // update name 
  function nameValidation(e){
    const nameValue = e.target.value;
    setName(nameValue);

    if (nameValue.length < 3) {
      setNameAlert('Name at least 4 characters.');
      isValid = false;
    }
    else {
      setNameAlert('');
    }
  }

  // update email
  function emailValidation(e){
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
    if (!emailRegex.test(emailValue)) {
      setEmailAlert('Enter a valid email.');
      isValid = false;
    }
    else {
      setEmailAlert('');
    }
  }

  // update message
  function messageValidation(e){
    const msgValue = e.target.value;
    setMsg(msgValue);

    if (msgValue === '') {
      setMsgAlert('Message can\'t be empty.');
      isValid = false;
    }
    else {
      setMsgAlert('');
    }
  }

  // submit and send data on node
  async function submition(e){
    e.preventDefault();

    if (isValid) {

      try {

        // fetch the data
        const response = await fetch('/api/contact', {
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            name: name,
            email: email,
            message: msg
          })
        });

        if (response.ok) {
          alert('success');
        } 

        else {
          alert('something went to wrong!');
        }

      } catch (err) {
        alert('network error');
      }
    }
  }

  // animations
  useGSAP(()=>{

    const tl = gsap.timeline();
    tl.from(".anime1", {
      y: 40,
      duration: 0.5,
      stagger: 0.1,
      opacity: 0,
      ease: 'back.out(2)'
    });

    tl.from(".anime2", {
      y: 40,
      duration: 0.3,
      stagger: 0.1,
      opacity: 0,
      ease: 'back.out(2)'
    });

    tl.from(".animeBtn", {
      y: 20,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(2)'
    });

  }, { scope: container, dependencies: [] });

  return (

    <div ref={container} className="w-[75%] md:w-[55%] h-auto bg-[#121212] grid sm:grid-cols-1 md:grid-cols-2 border-[#121212] border-[0.3em] shadow-[0.8em_0.8em_0_0_#121212] text-[4vw] md:text-[2rem]">
      <div className="w-full h-auto bg-[#fff] p-[10%]">
        <h2 className="anime1 text-[#121212] font-extrabold uppercase text-[6.5vw] md:text-[2.5rem]">Let's <br/>talk</h2>
        <p className="anime1 text-[#555] text-[2vw] md:text-[1.2rem] mb-[5%]">You can share your openion about this website.</p>
        <div className="anime1 text-[2vw] flex justify-around gap-2">
          <a href="https://github.com/nazmus-sadat9" target="_blank" rel="noopener noreferrer" className="text-[#121212] no-underline font-semibold md:text-[1rem]">Github</a>
          <a href="https://www.facebook.com/share/1JcHannGA4/" target="_blank" rel="noopener noreferrer" className="text-[#121212] no-underline font-semibold md:text-[1rem]">Facebook</a>
          <a href="https://www.instagram.com/lord.sadat?igsh=MTBnaW50bjRiaWl6dQ==" target="_blank" rel="noopener noreferrer" className="text-[#121212] no-underline font-semibold md:text-[1rem]">Instagram</a>
        </div>
      </div>

      <form onSubmit={submition} className="anime2 w-full h-auto flex flex-col gap-5 py-[10%] px-[8%] text-[2vw] md:text-[0.8rem]"> 
        <input onChange={nameValidation} value={name} className="anime2 text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" type="text" placeholder="NAME" />
        <input onChange={emailValidation} value={email} className="anime2 text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" type="email" placeholder="EMAIL" />
        <textarea onChange={messageValidation} value={msg} className="anime2 text-[#fff] p-[3%] outline-none border-[#444] border-[0.2em]" rows="4" type="text" placeholder="MESSAGE"></textarea>
        <button className="opacity-0 animeBtn text-[#121212] p-[3%] hover:bg-[#121212] hover:text-[#ffffdb] transition-all duration-300 uppercase bg-[#ffffdb] font-bold" type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
