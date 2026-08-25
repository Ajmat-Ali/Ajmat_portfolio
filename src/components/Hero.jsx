import { ArrowUpRight } from "lucide-react";
import React from "react";
import { HERO_CODE } from "../data/homeData";

const Hero = () => {
  const tokenColor = {
    string: "#FFB454",
    boolean: "#FB923C",
  };
  return (
    <div className="flex items-center max-md:flex-col max-md:gap-y-10 border-b border-border-subtle py-20 ">
      <div className="flex-1">
        <div className="flex items-center gap-x-2 border w-max bg-[#131826] border border-[#1E2638] px-3 py-1 rounded-full mb-10">
          <span className="block h-2 w-2 bg-accent rounded-full"></span>
          <p className="text-accent font-mono text-sm font-[400px]">
            Full Stack Developer (MERN)
          </p>
        </div>

        <h1 className="text-5xl font-bold font-display mb-10 max-md:text-4xl">
          <span className="text-[#E4E7EC]">
            Building fast, reliable web apps
          </span>
          <span className="text-[#3ECF8E]"> from database to browser</span>
        </h1>

        <p className="text-[#8B93A7] text-[16px] mb-10">
          I'm Ajmat Ali, a full-stack developer specializing in React, Node.js,
          and MongoDB. I build clean, responsive products and enjoy solving
          problems end-to-end.
        </p>
        <div className=" flex  gap-x-5 font-[500px]">
          <button
            className="flex items-center gap-2 bg-accent text-bg-dark text-sm px-5 py-3 rounded-sm 
          cursor-pointer hover:bg-accent-hover max-sm:text-[13px] max-sm:px-3 "
          >
            View Projects
            <ArrowUpRight size={14} />
          </button>
          <button
            className="font-mono text-sm border border-[#151A2A] px-5 py-3 cursor-pointer 
          hover:text-accent hover:border-accent max-sm:text-[13px] max-sm:px-3 "
          >
            Download Resume
          </button>
        </div>
        <p className="font-mono text-[12px] text-[#8B93A7] mt-10 flex items-center gap-x-3 border-t border-t-[#141A28] pt-4 w-max">
          <span className="block h-2 w-2 bg-accent rounded-full animate-pulse "></span>
          Available for full-time engineering roles
        </p>
      </div>
      <div className="flex-1 w-full ml-4 max-sm:mx-4">
        <div className="bg-[#131826] border border-[#252C3B] w-[80%] max-lg:w-full">
          <div className="flex items-center gap-x-10 px-4 py-3 border-b border-[#252C3B]">
            <div className="flex gap-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <p className="text-sm text-[#8B93A7] font-mono">
              {HERO_CODE.fileName}
            </p>
          </div>
          <div className="flex flex-col mt-8 pl-3 ">
            {HERO_CODE.lines.map((line, ind) => {
              return (
                <div
                  key={line.num}
                  className="flex gap-x-4 font-mono text-sm leading-relaxed"
                >
                  <span className="text-[#3A4152] select-none w-4 text-right">
                    {line.num}
                  </span>
                  <span className="whitespace-pre">
                    {line.tokens.map((token, i) => (
                      <span
                        key={i}
                        style={{ color: tokenColor[token.type] }}
                        className="whitespace-pre"
                      >
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="border- border-red-300 w-[80%] flex justify-end py-8 max-sm:py-4">
            <span className="block bg-accent h-4 w-[1px] m-3 animate-pulse [animation-duration:_1200ms] opacity-7"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
