"use client";

import Header from "./Header";
import { Landing } from "./(1)LandingPage";
import { AboutCucai } from "./(2)VideoAndAboutCucai";
import { PastSpeakers } from "./(3)AIExpertsOnStage";
import { StudentPartners } from "./(4)StudentPartners";
import { ContactUs } from "./(5)TransformTomorrowTogether";
import { CUCAITeamShowcase } from "./(6)LeadersBehindTheVision";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";


// TODO: Add other Uni's website and instagram links

const buttons = [
  { name: "Speakers", link: "#speakers" },
  { name: "Programming", link: "#schedule" },
  { name: "Student Partners", link: "#student-partners" },
];

// TODO: Add CUCAI links here
const icons = [
  { src: "/email.png", link: "/" },
  { src: "/instagram.png", link: "/" },
  { src: "/linkedin.png", link: "/" },
];

export default function Home() {
  const [isDark, setDark] = useState<boolean>(false);

  console.log(isDark); // If the page doesn't change, then check this

  const [windowWidth, setWindowWidth] = useState(1600); // breaks components if window width is initialized to 0

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize(); // Set initial width
      window.addEventListener("resize", handleResize);
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);  
    }
  }, []);

  // Debug code to check where user is - may be useful in future
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        console.log(`Current position: X = ${window.scrollX}, Y = ${window.scrollY}`);
      };
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup on component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden m-auto">
      <Header windowWidth={windowWidth} isDark={isDark} setDark={setDark}/>
      <Landing windowWidth={windowWidth}/>
      <div id="about">
        <AboutCucai isLargeScreen={windowWidth >= 500}/>
      </div>
      <div id="speakers">
        <div className="third-section overflow-auto overflow-x-hidden max-h-full">
          {/* 
            AI Experts on Stage
          */}
          <PastSpeakers isLargeScreen={windowWidth >= 768}/>
        </div>
      </div>
      {/* <FourthSection - Moved here for easier access to array variable/> */}
      <StudentPartners windowWidth={windowWidth} isDark={isDark}/>
      {/* 
        TODO: Fix formatting for section 5
      */}
      <ContactUs windowWidth={windowWidth}/>
      <CUCAITeamShowcase isLargeScreen={windowWidth >= 768}/>
      <Footer />
    </div>
  );
}
