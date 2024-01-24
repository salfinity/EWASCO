"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null); // Use useRef here

  function handleMouse(event) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-5);
    }
  }

  function handleMouseLeave(event) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        width={400}
        height={400}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        priority
        sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 33vw"
      />
    </Link>
  );
};

const FeaturedArticles = ({ img, title, time, summary, price, link }) => {
  return (
    <li className="col-span-4 md:col-span-1 w-full p-4 bg-white dark:bg-accent border border-solid border-black dark:border-white rounded-2xl shadow-gray-400 dark:shadow-slate-600 shadow-lg">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          width={400}
          height={400}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl md:text-7xl font-bold text-black dark:text-white my-2 hover:underline">
          {" "}
          {title}
        </h2>
      </Link>
      <p className="text-xl mb-2 text-black dark:text-white">{summary}</p>
      <p className="text-xl mb-2 text-black dark:text-white">{price}</p>
      <span className="text-pink-400 font-semibold">{time}</span>
    </li>
  );
};

const AllArticles = ({ img, title, summary, price, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-white dark:bg-accent text-lg md:text-xl  text-black dark:text-white first:mt-0 border border-solid border-black dark:border-white border-r-4 border-b-4
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-pink-400 font-semibold pl-4">{summary}</span>
      <span className="text-pink-400 font-semibold pl-4">{price}</span>
      <span className="text-pink-400 font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const Packages = () => {
  return (
    <>
      <main className="mb-4 max-w-7xl mx-auto  flex flex-col items-center justify-center mt-2 md:mt-0 p-2 ">
        <div className="pt-16">
          <h2 className="font-bold text-teal-950 dark:text-teal-300 text-2xl md:text-4xl w-full text-center my-16 ">
            Featured Classes
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FeaturedArticles
              title="CLASS CE"
              summary="Heavy Truck with Trailer (Arctic) - 28yrs."
              price="Ksh.30,000"
              time=" 5 to 7 months"
              link="/"
              img={"/car.jpg"}
            />
            <FeaturedArticles
              title="CLASS D"
              summary="Van/Bus"
              price="Ksh.17,000"
              time="6 to 8 months"
              link="/"
              img={"/car.jpg"}
            />
            <FeaturedArticles
              title="CLASS C"
              summary="Lorry."
              price="Ksh.15,000"
              time="6 to 8 months"
              link="/"
              img={"/car.jpg"}
            />
            <FeaturedArticles
              title="CLASS B"
              summary="Saloon."
              price="Ksh.13,500"
              time="6 to 8 months"
              link="/"
              img={"/car.jpg"}
            />
            <FeaturedArticles
              title="CLASS A"
              summary="Motorbike."
              price="Ksh.6,500"
              time="6 to 8 months"
              link="/"
              img={"/car.jpg"}
            />
          </ul>
        </div>
      </main>
      <main className="mb-8  mx-auto min-h-screen flex flex-col items-center justify-center mt-2 md:mt-4">
        <div className="pt-2">
          <h2 className="font-bold text-teal-950 dark:text-teal-300 text-2xl md:text-4xl w-full text-center my-16">
            ALL CLASSES
          </h2>
          <AllArticles
            title="B1: LIGHT VEHICLE(AUTOMATIC)"
            date="CERTIFIED"
            summary="Pay in Installments."
            price="Ksh.17,000"
            link="/"
            img={"/car.jpg"}
          />
          <AllArticles
            title="C1
            LIGHT TRUCK(MANUAL)"
            date="CERTIFIED"
            summary="Pay in Installments."
            price="Ksh.18,000"
            link="/"
            img={"/car.jpg"}
          />
          <AllArticles
            title="G
            Industrial Construction , Agricultural Plant Equipment – 20 yrs (Should be holder of a valid Kenyan License) “FORK LIFT”"
            date="CERTIFIED"
            summary="Pay in Installments."
            price="Ksh.18,000"
            link="/"
            img={"/car.jpg"}
          />
        </div>
      </main>
    </>
  );
};

export default Packages;
