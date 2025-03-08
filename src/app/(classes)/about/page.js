import ManagementCoverSection from "/src/components/About/ManagementCoverSection";
import Link from "next/link";

export const metadata = {
  title: "About us",
  description: `Here are some details about our company.`,
};

export default function About() {
  return (
    <>
      <ManagementCoverSection />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        You want to connect water with us? Reach out to us 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
