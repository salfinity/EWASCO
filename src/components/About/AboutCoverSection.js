import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <>
      <h2 className="font-bold text-teal-950 dark:text-teal-300 text-2xl md:text-4xl w-full text-center my-16 ">
        About us
      </h2>
      <section className="w-full md:h-[85vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
        <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
          <Image
            src={profileCharacter}
            alt="CodeBucks"
            className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
          <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
            Over 20 Years, Countless Success Stories - Your Road to Mastery!
          </h2>
          <p className="font-medium capitalize mt-4 text-base">
            Welcome to Hussein Driving School, your trusted partner in the
            journey towards safe and confident driving. With more than 20 years
            of experience in the driving education industry, we take pride in
            empowering individuals to become skilled and responsible drivers.
          </p>
          <p className="font-medium capitalize mt-4 text-base">
            Join us and experience the difference that two decades of expertise
            can make. Your journey towards becoming a confident and skilled
            driver starts here at Hussein Driving School.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutCoverSection;
