import React from "react";
import Navbar from "./navbar";

function HeroSection() {
  return (
    <div className="h-screen bg-gradient-img">
       <Navbar />
      <div className="flex justify-center mt-12">
        <div className="max-w-2xl">
          <div className="flex items-center">
            <img
          src="https://static.wixstatic.com/media/3ce026_56b5c1d77c1345d7969f754bd462d9d8~mv2.jpg/v1/fill/w_950,h_1312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3ce026_56b5c1d77c1345d7969f754bd462d9d8~mv2.jpg"
          className="rounded-full w-24 h-24 mr-4" alt="profile picture"/>
          <div>
          <h1 className="text-white text-2xl">projectsxdileep</h1>
          <a href="https://www.linkedin.com/in/dileep-kumar-doddi/" className="text-slate-400 inline-block">@ddileep01 &nbsp;<span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#94a3b8" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></span></a>
          </div>
          </div>
            <br/>
            <p className="text-white">
            I was an Associate Software Engineer with two years of experience in
            Full-Stack Development and UI/UX. With a passion for Frontend and Backend
            technologies, I have helped a number of clients and organizations
            achieve their specific goals or outcomes through my key contributions.
            I am committed to my professional values
            and mission and am constantly seeking new ways to achieve my
            professional development goals. I am also an avid Graphic designer who
            loves to design and code products. ✨
            </p>
            <br/>
            <p className="text-slate-400">Building what I love at <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"><a href="https://www.innoworks.tech/">@innoworks</a></span> software solutions pvt ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
