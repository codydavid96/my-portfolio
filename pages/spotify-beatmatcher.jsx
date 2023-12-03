import Image from "next/image";
import React from "react";
import spotifyBeatmatcherHeaderImg from "../public/assets/projects/spotify-beatmatcher-header.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const beatmatcher = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={spotifyBeatmatcherHeaderImg}
          alt="/"
        />
        <div className="absolute top-[70%] maxw-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Spotify Beatmatcher</h2>
          <h3>
            TypeScript / Tailwind CSS / React / C# / ASP.NET CORE / Docker
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-[#ffed28] tracking-widest">Project</p>
          <h2>Overview</h2>
          <p>
            This project is a work in progress and has involved building out a
            back end in ASP.NET CORE with C#, containerising with Docker, and
            building a repsonsive React front end with Next.JS in React with
            TypeScript and Tailwind CSS.{" "}
          </p>
          <br></br>
          <p>
            The goal for the application is for a user to be able to make a
            search for songs based off an initial song and it&apos;s BPM, genre,
            and key. This is intended to be useful for musicians and DJ&apos;s
            or people trying to build a playlist with a consistent beat, tone,
            or vibe as it will return song recommendations that will fit the
            initial song based off its own data and metrics stored in
            Spotify&apos;s database.
          </p>
          <br></br>
          <p>
            This is being accomplished through connecting to Spoitfy&apos;s web
            API and retrieving Json data of searched tracks, which are then
            displayed for the user. A further hope is to look at logging into
            your Spotify account to be able to add songs to a playlist created
            by the Beatmatcher web app to make a more useable and worthwhile
            tool.
          </p>
          <br></br>
          <p>
            Finally, Spotify&apos;s guidelines for using their brands imagery
            have been followed to stay consistent with branding.
            <a
              className="hover:cursor-pointer hover:underline text-[#13e2da]"
              onClick={() =>
                openInNewTab(
                  "https://developer.spotify.com/documentation/design"
                )
              }
            >
              These guidelines can be found here.
            </a>
          </p>

          <button
            onClick={() =>
              openInNewTab(
                "https://github.com/codydavid96/spotify-beatmatcher-front"
              )
            }
            className="px-8 py-2 mt-4 mr-8"
          >
            Front end
          </button>
          <button
            onClick={() =>
              openInNewTab(
                "https://github.com/codydavid96/Spotify-Beatmatcher-Back"
              )
            }
            className="px-8 py-2 mt-4"
          >
            Back end
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center front-hold pb-2">Tools</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.JS
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                C#
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ASP.NET CORE
              </p>
              <p className="text-[#13e2da] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Docker
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default beatmatcher;
