"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Item({ title, description, tags, imageUrl }) {
  const { scrollYProgress } = useScroll({
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const generateLink = (tagName) => {
    if (tagName.toLowerCase().replace(/\s/g, "-") === "businesses") {
      return "/businesses";
    } else if (tagName.toLowerCase().replace(/\s/g, "-") === "adverts") {
      return "/adverts";
    } else {
      return `/profiles/${encodeURIComponent(
        tagName.toLowerCase().replace(/\s/g, "-")
      )}`;
    }
  };

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-zinc-100 top-4 max-w-6xl border border-black/20 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-neutral-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/10">
        <div className="pt-4 pb-7 px-5 sm:pl-auto sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[32rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-zinc-800 dark:text-white">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black z-50 hover:scale-[1.15] active:scale-105 
                transition-all  px-3 py-3 text-base uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag.name.toLowerCase().replace(/\s/g, "-") === "businesses" ? (
                  <Link href="/businesses">
                    <span>{tag.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={`/profiles/${encodeURIComponent(
                      tag.name.toLowerCase().replace(/\s/g, "-")
                    )}`}
                  >
                    <span>{tag.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-10 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-10"
        />
      </section>
    </motion.div>
  );
}
