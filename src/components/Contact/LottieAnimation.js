"use client";

import React from "react";
import Lottie from "lottie-react"; // Import the Lottie library
import animationData from "/public/car-contact.json";

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      speed={0.333}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default LottieAnimation;
