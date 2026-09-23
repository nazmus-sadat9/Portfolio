"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faXmark } from '@fortawesome/free-solid-svg-icons';
import json from "../package.json";
import Toast from "./components/Toast";

const page = () => {

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const container = useRef(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null)

  const router = useRouter();

  // animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".left-box", {
      xPercent: -25,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    })
    .from(".bottom-box", {
      yPercent: 30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
      ease: "back.out(2)"
    }, "-=0.3");

  }, { scope: container });

  useGSAP(() => {
    if (isOpen && terminalRef.current) {

      gsap.fromTo(terminalRef.current, {
        scale: 0.9, 
        opacity: 0, y: 16
      },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "back.out(2)" 
        }
      );
    }
  }, { dependencies: [isOpen], scope: container });

  // focus to the input
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (!output) {
        setOutput("Type --help or -h for details.");
      }
    }
  }, [isOpen]);


  // toggle to false 
  function toggleTerminal() {
    setIsOpen((open) => !open);
  }

  function closeTerminal() {
    setIsOpen(false);
  }

  function useCommand(e) {
    e.preventDefault();

    const cmd = command.trim().toLowerCase();
    if (!cmd) return;

    // store the outputs
    let result = "";

    // cases of cmd
    switch (cmd) {
      case "whoami":
        result = "SADAT, a full stack web developer.";
        break;

      case "clear":
        setOutput("");
        break;

      case "--help":
      case "-h":
        result = "whoami => about me\ngithub => my GitHub\nclear => clear the terminal\n--version => show version\n/<page name> => navigate to another page\nexit => close terminal";
        break;

      case "--version":
      case "-v":
        result = `version: ${json.version}`;
        break;

      case "github":
        window.open("https://github.com/nazmus-sadat9", "_blank", "noopener,noreferrer");
        break;

      case "/":
        router.push("/");
        break
      
      case "/about":
        router.push("/about");
        closeTerminal(); 
        break;

      case "/projects":
        router.push("/projects");
        closeTerminal();
        break;

      case "/blogs":
        router.push("/blogs");
        closeTerminal();
        break;

      case "/contact":
        router.push("/contact");
        closeTerminal();
        break;     
      
      case "exit":
        closeTerminal();
        setOutput("");
        break;

      default:
        result = `Command not found: ${cmd}. Type --help`;
        break;
    }

    setOutput((currentResult) => currentResult + `\n$ ${cmd}\n${result}\n`);
    setCommand("");
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center bg-[#ffffdb]">

      {/* Toast */}
      {/*
      <Toast
        title="test"
        description="the toast is working"
        isOpen={true}
        onClose={() => setShowToast(false)}   
      />
    */}

      <div ref={container} className="w-full h-auto md:w-[60%] grid md:grid-cols-3 gap-[10%] z-10 p-[10%]">
        <div className="left-box w-full md:col-span-3">
          <div className="hoverCards selection:bg-[#ffffdb] selection:text-[#121212] w-full text-[4vw] md:text-[2rem] p-[10%] bg-[#ffffff] border-[0.2em] border-[#121212] shadow-[0.4em_0.4em_0_0_#121212] flex flex-col justify-center">
            <h2 className="mb-[2%] uppercase font-black text-[6vw] md:text-[3rem] text-[#121212]">sadat //</h2>
            <p className="text-[3vw] md:text-[1.8rem] text-[#121212]">I am a full stack web developer.</p>
          </div>
        </div>

        <div className="bottom-box w-full md:col-span-2">
          <div className="hoverCards selection:bg-transparent selection:text-[#ffffdb] uppercase py-[5%] col-span-2 text-[4vw] md:text-[1.6rem] md:col-span-2 w-full shadow-[0.4em_0.4em_0_0_#121212] bg-[#121212] text-[#ffffff] flex flex-col justify-center items-center">
            <span>2026</span>
            <span>edition</span>
          </div>
        </div>

        <div className="bottom-box w-full col-span-1">
          <div
            onClick={toggleTerminal}
            className="hoverCards selection:bg-[#ffffdb] selection:text-[#121212] jsBox py-[5%] w-full h-full text-[4vw] md:text-[2rem] shadow-[0.4em_0.4em_0_0_#121212] border-[0.2em] border-[#121212] flex justify-center items-center bg-[#ffffff] text-[#121212] cursor-pointer active:translate-x-[0.2em] active:translate-y-[0.2em] active:shadow-none transition-transform"
          >
            <FontAwesomeIcon icon={faTerminal} className="font-bold text-[2.5rem] text-[#121212]" />
          </div>
        </div>

      </div>

      {isOpen && (
        <div className="mainTerminal w-screen h-screen absolute overflow-hidden top-0 left-0 z-90 flex justify-center items-center">
        <div ref={terminalRef} className="w-[80%] bg-[#fff] flex justify-evenly flex-col items-center max-w-[720px] border-[0.2em] border-[#121212] shadow-[0.8em_0.8em_0_0_#121212]">

          {/* terminal header */}
          <div className="w-full py-[3%] flex justify-around bg-[#121212] items-center">
            <div className="w-[20%] flex justify-evenly items-center">
              <div className="w-[20%] aspect-[1/1] bg-[#ffffdb]"></div>
              <div className="w-[20%] aspect-[1/1] bg-[#ffffdb]"></div>
              <div className="w-[20%] aspect-[1/1] bg-[#ffffdb]"></div>
            </div>
            <h2 className="font-bold text-[#ffffdb] text-[clamp(0.8rem,4vw,1.5rem)] selection:bg-[#ffffdb] selection:text-[#121212]">sadat@portfolio: ~</h2>

            <div className="text-[#121212] text-[1.5rem] bg-[#ffffdb] w-[10%] aspect-[1/1] flex justify-center items-center">
              <button type="button" onClick={closeTerminal} className="w-full">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          {/* terminal body */}
          <div className="terminalBody whitespace-pre-line p-[3%] w-full max-h-[20vw] overflow-y-scroll bg-[#ffffdb] selection:bg-[#121212] selection:text-[#ffffdb]">
            {output}
          </div>

          <div className="w-full">
            <form onSubmit={useCommand} className="w-full flex items-center px-[4%] border-[0.2em] border-[#121212] selection:bg-[#ffffdb]">

              <span className="font-black text-[1.2rem]">$</span>

              <input
                ref={inputRef}
                type="text"
                placeholder="Type --help"
                autoCapitalize="off"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="p-[2%] w-full border-none outline-none text-[#121212]"
              />

            </form>
          </div>

        </div>

        </div>
      )}

      <p className="text-[#121212] text-xl ml-[5%] selection:bg-[#121212] selection:text-[#ffffdb]">v{json.version}</p>
    </div>
  );
};

export default page;
