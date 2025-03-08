import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillProfile } from "react-icons/ai";

function TeamPage() {
  const imageWidth = 220; // Set a reasonable width for your images
  const imageHeight = 200;

  return (
    <div className="container mt-3 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1
          className="uppercase  text-3xl tracking-[15px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
        >
          <span
            className="underline decoration-6 
          decoration-orange-400"
          >
            BOARD
          </span>{" "}
          OF MANAGEMENT{" "}
        </h1>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Dr. Right Left
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Manager</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Dr. Jack Right
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Director</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Dr. Sam Left
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Managing director
            </p>
          </div>
          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Daktari Kazungu
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">Supervisor</p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Pro Safe
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Head of Security
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Samuel Smith
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Photographer
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Donn Boss
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Field engineer
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/EWASCO LOGO.png"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              John Doe
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              {" "}
              Marketing Director
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
