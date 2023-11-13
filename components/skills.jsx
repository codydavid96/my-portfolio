import Image from "next/image";
import React from "react";
import HTML from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import JavaScript from "../public/assets/skills/javascript.png";
import reactImg from "../public/assets/skills/react.png";
import Bootstrap from "../public/assets/skills/bootstrap.png";
import Tailwind from "../public/assets/skills/tailwind css.png";
import Csharp from "../public/assets/skills/cSharp.png";
import Postgres from "../public/assets/skills/postgres.png";
import GitHub from "../public/assets/skills/github.png";

const Skills = () => {
  return (
    <div className="pt-10 h-full" id="skills">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="pl-4 text-left uppercase tracking-widest text-[#ffed28]">
          Skills
        </h2>
        <h3 className="pl-4 pb-8 text-left tracking-widest">What I can do.</h3>

        <div>
          <div className="font-bold pr-10 pl-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={HTML} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={CSS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={JavaScript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Csharp} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>C#</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Postgres} width="85px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PostgreSQL</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={reactImg} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Bootstrap} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={GitHub} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
