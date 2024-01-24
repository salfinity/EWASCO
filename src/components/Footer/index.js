"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { TwitterIcon } from "../Icons";
import { FaFacebook } from "react-icons/fa";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import profileImg from "@/public/h-name-logo.png";
import Image from "next/image";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-[#990000] dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <div className="w-full max-w-6xl mx-auto">
        <div className="py-10 text-center md:text-left">
          <div className="grid-cols-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Image
                  src={profileImg}
                  alt="Hds logo"
                  className="w-full h-auto px-3 md:px-0"
                  priority
                />
              </h6>
              <p className="text-center">
                We are the pioneer defensive driving school in Embu County,
                Offering best services and unbeatable prices in Town.
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center text-lg font-bold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a
                  href="#!"
                  className="text-neutral-100 hover:text-teal-300 dark:hover:text-teal-700 dark:text-neutral-900"
                >
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="#!"
                  className="text-neutral-100 hover:text-teal-300 dark:hover:text-teal-700 dark:text-neutral-900"
                >
                  Courses
                </a>
              </p>
              <p className="mb-4">
                <a
                  href="#!"
                  className="text-neutral-100 hover:text-teal-300 dark:hover:text-teal-700 dark:text-neutral-900"
                >
                  e-learning
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-neutral-100 hover:text-teal-300 dark:hover:text-teal-700 dark:text-neutral-900"
                >
                  Help
                </a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center text-lg font-bold uppercase md:justify-start">
                Contact
              </h6>
              <p
                href={siteMetadata.location}
                target="_blank"
                className="mb-4 gap-3 cursor-pointer hover:text-teal-300 dark:hover:text-teal-700 flex items-center justify-center md:justify-start"
              >
                <IoLocation size={20} />
                Along DAYA road, EMBU TOWN.
              </p>
              <p
                href={siteMetadata.email}
                target="_blank"
                className="mb-4 gap-3 cursor-pointer hover:text-teal-300 dark:hover:text-teal-700 flex items-center justify-center md:justify-start"
              >
                <MdEmail size={20} />
                contact@husseindrivingschool.com
              </p>
              <p
                href={`tel:${siteMetadata.phone}`}
                target="_blank"
                className="mb-4 gap-3 cursor-pointer hover:text-teal-300 dark:hover:text-teal-700 flex items-center justify-center md:justify-start"
              >
                <IoCall size={20} />+ 01 234 567 88
              </p>
              <p
                href={siteMetadata.whatsapp}
                target="_blank"
                className="flex gap-3 cursor-pointer hover:text-teal-300 dark:hover:text-teal-700 items-center justify-center md:justify-start"
              >
                <IoLogoWhatsapp size={20} />+ 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Driving lessons | Laws of driving | Certifications
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe on our website. Join over 1000+ members community to stay up
        to let us know you were here.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-[#990000] text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <FaXTwitter
            size={30}
            className=" text-white dark:text-black hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <a
          href={siteMetadata.facebook}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FaFacebook
            size={30}
            className="text-blue-600 hover:scale-125 transition-all ease duration-200"
          />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 Hussein driving school. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center hidden underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Salfinity{" "}
          <a
            href="https://devdreaming.com"
            className="underline"
            target="_blank"
          >
            Devs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
