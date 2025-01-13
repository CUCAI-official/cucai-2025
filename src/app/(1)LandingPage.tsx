"use client";

import { Pixelify_Sans } from "next/font/google";
import { Countdown } from "./CountDown";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function Landing({
  windowWidth,
  isDark,
}: {
  windowWidth: number;
  isDark: boolean;
}) {
  return (
    <div className="first-section">
      <div className="toronto-skyline px-4">
        <div className="white-box flex flex-col items-center gap-8 w-full hover:scale-110 transition-all">
          <Countdown font={PixelifySans} isDark={isDark} />
          {windowWidth >= 706 ? (
            <h1
              className={
                "title text-[50px] sm:text-[84px] " + PixelifySans.className
              }
            >
              Experience AI&apos;s Future at CUCAI 2025!
            </h1>
          ) : (
            <div>
              <h1
                className={
                  "title text-[50px] sm:text-[84px] " + PixelifySans.className
                }
              >
                Experience AI&apos;s
              </h1>
              <h1
                className={
                  "title text-[50px] sm:text-[84px] " + PixelifySans.className
                }
              >
                Future at
              </h1>
              <h1
                className={
                  "title text-[50px] sm:text-[84px] " + PixelifySans.className
                }
              >
                CUCAI 2025!
              </h1>
            </div>
          )}
          <a href="https://discord.gg/az6MVvNhdB">
            <img
              src="join-discord.png"
              alt="Apply to CUCAI"
              className=" h-[50px] w-[152px] hover:brightness-110 active:brightness-90"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/*
Fixes:
 landing page Toronto backdrop 
- 1. fix so that it covers entire screen (left and right edges aren't covered)
- 2. remove thin blue line between Toronto backdrop and starting fade of section 2 (about cucai)

- 1. Fixed using background-size: cover
- 2. png has the thin line, adjust the png and we'll be ok
*/
