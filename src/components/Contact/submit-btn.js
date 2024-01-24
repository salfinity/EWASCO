import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-800 dark:bg-neutral-300  text-white dark:text-neutral-900 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105   disabled:scale-100 disabled:bg-opacity-65"
    >
      {/* <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> */}
      <>
        Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
      </>
    </button>
  );
}
