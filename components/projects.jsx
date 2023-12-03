import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./projectItem";
import calculatorImg from "../public/assets/projects/calculator.png";
import pomodoroTimerImg from "../public/assets/projects/pomodoro-timer.png";
import urlShortenerImg from "../public/assets/projects/url-shortener.png";
import letsGoGagaImg from "../public/assets/projects/lets-go-gaga.png";
import spotifyBeatmatcherImg from "../public/assets/projects/spotify-beatmatcher.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="pl-4 text-left uppercase tracking-widest text-[#ffed28]">
          Projects
        </h2>
        <h3 className="pl-4 pb-8 text-left tracking-widest">
          What I&apos;ve made so far.
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <ProjectItem
              title="Spotify Beatmatcher (WIP)"
              backgroundImg={spotifyBeatmatcherImg}
              language="React.JS / C#"
              projectUrl="/spotify-beatmatcher"
            />
          </div>
          <ProjectItem
            title="URL Shortener"
            backgroundImg={urlShortenerImg}
            language="TypeScript"
            projectUrl="/url-shortener"
          />
          <ProjectItem
            title="Calculator"
            backgroundImg={calculatorImg}
            language="JavaScript"
            projectUrl="/calculator"
          />
          <ProjectItem
            title="Pomodoro Timer"
            backgroundImg={pomodoroTimerImg}
            language="JavaScript"
            projectUrl="/pomodoro-timer"
          />
          <ProjectItem
            title="Let's Go Gaga Website"
            backgroundImg={letsGoGagaImg}
            language="React.JS"
            projectUrl="/lets-go-gaga"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
