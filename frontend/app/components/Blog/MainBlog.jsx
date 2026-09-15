"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import blogs from "./BlogData";

const MainBlog = () => {

  const container = useRef(null);

  useGSAP(()=>{
    gsap.from(".fadeIn", {
      yPercent: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(2)"
    })
  }, { scope: container });

  return (
    <article className="w-full selection:bg-[#ffffdb]">
      {blogs.map((blog)=>(
        <div ref={container} key={blog.id} className="bg-[#fff] border-[#121212] border-[0.2em] p-[5%] shadow-[0.8em_0.8em_0_0_#121212]">
          <h2 className="fadeIn font-bold mb-[2%] text-[#121212] text-[1.5rem] md:text-[2rem]">{blog.title}</h2>
          <div className="fadeIn text-[#121212] text-[0.8rem] uppercase">published: {blog.date} • by {blog.author}</div>

          <div className="w-full my-[5%] h-[5px] bg-[#121212]"></div>

          <div>
            {blog.content.map((block, index)=>{
              if (block.type === "callout") {
                return (
                  <div key={index} className="fadeIn mb-[4%] border-[0.2em] border-[#121212] p-[3%] md:p-[2%] md:text-[1.2rem] shadow-[0.4em_0.4em_0_0_#121212] bg-[#fff]">{block.text}</div>
                );
              }

              return (
                <p key={index} className="fadeIn mb-[4%] md:text-[1.2rem]">{block.text}</p>
              );
            })}
          </div>

        </div>
      ))}
    </article>
  )
}

export default MainBlog;
