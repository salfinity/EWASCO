import React from "react";
import Image from "next/image";

const VideoBackHomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="object-cover w-full h-full"
        src="/trafficcars.mp4"
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
          An investment in Safety
        </h1>
        <p className="text-lg md:text-2xl font-bold">
          HDS Reliable, highly experienced driving school with modern fleet of
          cars and qualified team of professional offering hard on practical and
          theory driving course customized to meet unique needs of every
          student.
        </p>
      </div>
    </div>
  );
};

export default VideoBackHomePage;
