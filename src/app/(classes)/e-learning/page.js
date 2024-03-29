import React from "react";

const PracticalClasses = () => {
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
              Hello! At Hussein Driving School, our commitment is to enhance the
              ease and enjoyment of learning how to drive. Exciting news – we've
              teamed up with driveinkenya.com to offer comprehensive online
              driving classes covering both practical and theoretical aspects.
              Our online course features quizzes and notes after each video to
              ensure a convenient and enriching learning experience. Join us as
              we revolutionize the way you learn to drive!
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
      <span className="font-semibold max-w-6xl mx-auto text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        For comprehensive driving classes, advanced mechanical skills training,
        and valuable tips, register on our e-learning platform below. This link
        also facilitates the issuance of certificates upon completion of these
        courses....
      </span>{" "}
      <a href="https://hds-e-learning.vercel.app/" target="_blank">
        <button
          className="md:inline ml-4 bg-red-900 mt-8
               text-white px-3 lg:px-4 ly-2 lg:py-2 rounded-full
               dark:bg-red-800 hover:scale-110 transition-all ease duration-200"
        >
          Register Now
        </button>
      </a>
      <span className="font-semibold max-w-6xl mx-auto text-base sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        Below are samples of awarded certificates...
      </span>{" "}
    </>
  );
};

export default PracticalClasses;
