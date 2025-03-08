"use client";

import TransitionEffect from "/src/components/TransitionEffect";
import React from "react";
import Items from "/src/components/resources/items";

{
  /* export const metadata = {
  title: "Our Resources",
  description: "Here are some useful resources that we offer.",
}; */
}

export default function Books() {
  return (
    <>
      <TransitionEffect />
      <h2
        className="uppercase  text-3xl tracking-[20px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
      >
        opportunities
      </h2>
      <Items />
    </>
  );
}
