"use client";

import React from "react";
import { resourcesData } from "/lib/data";
import Item from "./item";

export default function Items() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 max-w-6xl flex flex-col mb-64  mx-auto justify-center items-center cursor-pointer"
    >
      <div>
        {resourcesData.map((item, index) => (
          <React.Fragment key={index}>
            <Item {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
