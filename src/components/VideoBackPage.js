import React from "react";
import Image from "next/image";

const VideoBackHomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="object-cover w-full h-full"
        src="/water.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-light">
        <Image
          src="/h-name-logo.png"
          alt="CodeBucks logo"
          width={600}
          height={500}
          className="w-full h-auto"
          priority
        />
        <h1 className="text-3xl my-3 italic md:text-6xl font-bold text-[#ff9900]">
          Water is life
        </h1>
        <p className="text-lg md:text-2xl font-bold">
          At EWASCO, we are a trusted and experienced provider of clean, safe,
          and reliable water services. With a dedicated team of professionals
          and modern infrastructure, we ensure uninterrupted supply, efficient
          management, and sustainable solutions tailored to meet the needs of
          every community.
        </p>
      </div>
    </div>
  );
};

export default VideoBackHomePage;
