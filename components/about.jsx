import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="pt-10 md:h-full" id="about">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="pl-4 text-left uppercase tracking-widest text-[#ffed28]">
          About
        </h2>
        <h3 className="pl-4 pb-8 text-left tracking-widest">
          A quick introduction.
        </h3>
        <div className="text-left md:grid grid-cols-2">
          <div className="w-auto h-auto m-auto shadow-xl shadow-black bg-gradient-to-br from-[#9055ff] to-[#13e2da] rounded-full flex items-center justify-center">
            <p className="text-[#1f1f1f]">
              <IoPersonCircleOutline size={300} />
            </p>
          </div>
          <p className="pt-10">
            For the last 8 years, I have been working as a childcare educator
            while also completing a{" "}
            <span className="text-[#13e2da]">
              Bachelor of Behavioural Science
            </span>
            . However, I have always had a strong passion and interest in
            technology and have spent a lot of time with computers. In April
            2022, I began teaching myself programming by working through the
            freeCodeCamp.org curriculum, starting with
            <span className="text-[#13e2da]"> HTML</span> and
            <span className="text-[#13e2da]"> CSS</span>, making small projects
            on CodePen.io. Since then, I have been learning and building with
            <span className="text-[#13e2da]"> Next.js</span> and
            <span className="text-[#13e2da]"> Tailwind CSS </span>in
            <span className="text-[#13e2da]"> VS Code</span>, making some more
            complex projects while utilising GitHub.<br></br>
            <br></br>I have quickly developed a deep interest in coding and have
            spent most of my free time working through challenges or comleting
            projects. I have even gone and learned the basics of database
            management with <span className="text-[#13e2da]">PostgreSQL</span>{" "}
            and begun learning API integration and back-end development with
            <span className="text-[#13e2da]"> C#</span>. I am very ready for a
            change and am motivated to work hard to make the change happen. I am
            extremely eager to make the jump into a new career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
