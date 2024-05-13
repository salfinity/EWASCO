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

  const handleWhatsAppClick = () => {
    // Phone number of the driving school on WhatsApp
    const phoneNumber = "+254702802937"; // Replace with the actual phone number

    // Message to be sent when opening WhatsApp
    const message = encodeURIComponent(
      "Hello hussein driving school, I would like to take this course. How can I go about that?"
    );

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappLink, "_blank");
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={handleWhatsAppClick}
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
    <li className="col-span-4 md:col-span-1 w-full p-4 bg-white dark:bg-zinc-600 border border-solid border-black dark:border-white rounded-2xl shadow-gray-400 dark:shadow-slate-600 shadow-lg">
      <Link
        href={link}
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
      <Link href={link}>
        <h2 className="capitalize text-2xl md:text-7xl font-bold text-black dark:text-white my-2 hover:underline">
          {" "}
          {title}
        </h2>
      </Link>
      <p className="text-xl mb-2 text-black dark:text-white">{summary}</p>
      <p className="text-xl mb-2 text-black dark:text-white">{price}</p>
      <span className="text-orange-400  font-semibold">{time}</span>
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
      className="relative mx-4 max-w-full p-4 py-6 my-4 rounded-xl flex-col md:flex-row items-center md:mx-auto
        justify-between bg-white dark:bg-zinc-600 text-sm md:text-xl  text-black dark:text-white  
        border border-solid border-black dark:border-white border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-orange-400 font-semibold pl-4">{summary}</span>
      <span className="text-orange-400 font-semibold pl-4">{price}</span>
      <span className="text-orange-400 font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const Packages = () => {
  return (
    <>
      <main className="mb-4 max-w-full mx-auto  flex flex-col items-center justify-center mt-2 md:mt-0 p-2 ">
        <div className="pt-2">
          <h2 className="font-bold text-teal-950 dark:text-teal-300 text-2xl md:text-4xl w-full text-center my-4">
            Featured Classes
          </h2>
          <span className="font-semibold w-full my-4 text-base text-center md:text-2xl text-orange-800 dark:text-accentDark">
            Click on any course below to chat with us about it.👇
          </span>
          <ul className="grid max-w-6xl grid-cols-1 md:grid-cols-2 mt-4 md:mt-8 gap-16">
            <FeaturedArticles
              title="CLASS CE"
              summary="Heavy Truck with Trailer (Arctic) - 28yrs."
              price="Ksh.30,000"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20CE%20Heavy%20Truck%20Trailer.%20How%20can%20I%20go%20about%20that?"
              img={"/cars/trailer.png"}
            />
            <FeaturedArticles
              title="CLASS D"
              summary="Van/Bus"
              price="Ksh.17,000"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20D.%20Van%20/%20Bus.%20How%20can%20I%20go%20about%20that?"
              img={"/cars/bus.png"}
            />
            <FeaturedArticles
              title="CLASS C"
              summary="Lorry."
              price="Ksh.15,000"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20C.%20Lorry.%20How%20can%20I%20go%20about%20that?"
              img={"/cars/lorry.png"}
            />
            <FeaturedArticles
              title="CLASS BC"
              summary="Saloon & Light truck."
              price="Ksh.17,000"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20BC.%20Saloon%20&%20Light%20Truck%20How%20can%20I%20go%20about%20that?"
              img={"/cars/saloonandlorry.png"}
            />
            <FeaturedArticles
              title="CLASS B"
              summary="Saloon."
              price="Ksh.13,000"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20B.%20Saloon%20Car.%20How%20can%20I%20go%20about%20that?"
              img={"/cars/CAR OFFICIAL.png"}
            />
            <FeaturedArticles
              title="CLASS A"
              summary="Motorbike."
              price="Ksh.6,500"
              time="Get A Certificate"
              link="whatsapp://send?phone=+254702802937&text=Hello%20hussein%20driving%20school,%20I%20would%20like%20to%20take%20this%20Class%20A.%20Motorcycle.%20How%20can%20I%20go%20about%20that?"
              img={"/cars/bodaboda.png"}
            />
          </ul>
        </div>
      </main>
      <main className="mb-8 w-full max-w-6xl mx-auto flex flex-col items-center justify-center mt-2 md:mt-4">
        <div className="pt-2">
          <h2 className="font-bold text-teal-950 dark:text-teal-300 text-2xl md:text-4xl text-center my-4">
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
