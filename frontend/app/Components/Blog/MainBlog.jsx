"use client";
import React from "react";
import blogs from "./BlogData";

const MainBlog = () => {
  return (
    <article className="w-full selection:bg-[#ffffdb]">
      {blogs.map((blog)=>(
        <div key={blog.id} className="bg-[#fff] border-[#121212] border-[0.2em] p-[5%] shadow-[0.8em_0.8em_0_0_#121212]">
          <h2 className="font-bold mb-[2%] text-[#121212] text-[1.5rem]">{blog.title}</h2>
          <div className="text-[#121212] text-[0.8rem] uppercase">published: {blog.date} • by {blog.author}</div>
          
          <div className="w-full my-[5%] h-[5px] bg-[#121212]"></div>

          <div>
            {blog.content.map((block, index)=>{
              if (block.type === "callout") {
                return (
                  <div key={index} className="mb-[4%] border-[0.2em] border-[#121212] p-[3%] shadow-[0.4em_0.4em_0_0_#121212] bg-[#fff]">{block.text}</div>
                );
              }

              return (
                <p key={index} className="mb-[4%]">{block.text}</p>
              );
            })}
          </div>

        </div>
      ))}
    </article>
  )
}

export default MainBlog;


