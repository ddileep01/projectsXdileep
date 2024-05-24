import React from "react";
import Navbar from "./navbar";

function HeroSection() {
  return (
    <div className="h-screen bg-gradient-img">
       <Navbar />
      <div className="flex justify-center mt-12">
        {/* <img
          src="https://static.wixstatic.com/media/3ce026_56b5c1d77c1345d7969f754bd462d9d8~mv2.jpg/v1/fill/w_950,h_1312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3ce026_56b5c1d77c1345d7969f754bd462d9d8~mv2.jpg"
          className="rounded-3xl w-12 h-12" alt="profile picture"/> */}
        <div className="max-w-2xl">
            <h1 className="text-white text-2xl">projectsxdileep</h1>
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
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
