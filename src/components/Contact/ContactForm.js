"use client";
import React from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "./submit-btn";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I'm eager to inquire about enrolling in your driving school. If you
      could provide information regarding classes and the application process,
      I'd greatly appreciate it. You can contact me via email at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about the classes i am intrested in: <br />
      <textarea
        {...register("project details", {})}
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <SubmitBtn />
    </form>
  );
}
