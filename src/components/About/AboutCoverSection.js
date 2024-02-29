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
            className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
          {/*<h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-accent dark:text-accentDark  text-center lg:text-left">
            Over 25 Years, Countless Success Stories - Your Road to Mastery!
          </h2>*/}
          <p className="font-medium  mt-4 text-base">
            The school was started in Embu town year 1996 by the founder the
            late Cllr Hussein swaleh as a professional and modern driving
            school. Currently under the management of Feisal Hussein swaleh. The
            school has advance and expanded to other regions.
          </p>
          <p className="font-medium mt-4 text-base">
            Hundreds of competent drivers have been molded by Hussein driving
            school which has stood as a market leader in the driving school
            education.Hundreds of competent drivers have been molded by Hussein
            driving school which has stood as a market leader in the driving
            school education.
          </p>
          <p className="font-medium mt-4 text-base">
            With a team of qualified and experienced instructors and staff.
            Hussein driving school is committed to providing comprehensive and
            professional driving courses.
          </p>
          <p className=" mt-4 items-center">
            <span className="font-bold text-red-600 text-2xl">Vision:-</span>
            <span className="font-medium  text-base">
              With a team of qualified and experienced instructors and staff.
              Hussein driving school is committed to providing comprehensive and
              professional driving courses.
            </span>
          </p>
          <p className="mt-4 items-center">
            <span className="font-bold text-red-600 text-2xl">Mission:-</span>
            <span className="font-medium  text-base">
              To work together with all stakeholders on road safety and training
              of skilled drivers.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutCoverSection;
