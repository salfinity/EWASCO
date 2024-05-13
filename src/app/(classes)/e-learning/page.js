"use client";

import React from "react";

const PracticalClasses = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  const handleRegistrationClick = () => {
    openInNewTab("https://hds-e-learning.vercel.app/");
  };

  return (
    <>
      <div className="w-full max-w-7xl h-screen mx-auto p-8 md:px-0">
        <h1 className="text-3xl md:text-5xl text-center uppercase mb-8 text-red-900 dark:text-red-400">
          Practicals
        </h1>
        <h2 className="font-bold mb-10 text-xl sm:text-2xl md:text-2xl text-cyan-950 dark:text-cyan-500 text-center">
          Here is one of our most basic online practical class.
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-4 md:mr-4">
            <p className="text-base md:text-xl px-4 md:px-8 text-zinc-700 dark:text-white">
              Greetings! At Hussein Driving School, our mission is to make
              learning to drive an enjoyable and seamless experience. We're
              thrilled to introduce our comprehensive online driving courses,
              which encompass not only the theoretical and practical aspects of
              driving but also include essential mechanical knowledge, local and
              foreign driving laws and rules, as well as extra driving hacks.
              While quizzes are not conducted after every session, our platform
              empowers you to monitor your progress effectively. Upon completing
              the course, you'll receive a certificate of achievement. For
              practical driving classes, testing will primarily occur at our
              office. Join us as we revolutionize the way you learn to drive!
            </p>
          </div>
          <div className="flex-1">
            {/* YouTube Embed */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIVaqt4VhKc?si=vAiuFr6wW2IN3l2X"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl aspect-object-cover w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center w-full max-w-6xl mt-10 flex-col items-center">
        <span className="font-semibold max-w-6xl mx-auto text-base md:text-xl text-orange-800 dark:text-accentDark">
          For comprehensive driving classes, advanced mechanical skills
          training, and valuable tips, register on our e-learning platform
          below. This link also facilitates the issuance of certificates upon
          completion of these courses👇👇👇
        </span>
        <div className="flex justify-center mt-8">
          <button
            className="md:inline  ml-4 bg-purple-800 
               text-white px-3 lg:px-4 ly-2 lg:py-2 rounded-full
               dark:bg-purple-800 hover:scale-110 transition-all ease duration-200"
            onClick={handleRegistrationClick}
          >
            Register Now
          </button>
        </div>
        <span className="font-semibold flex mt-6 max-w-6xl mx-auto text-base justify-center md:text-xl text-orange-800 dark:text-accentDark">
          Below are samples of awarded certificates...
        </span>
      </div>
    </>
  );
};

export default PracticalClasses;
