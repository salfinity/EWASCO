import Packages from "/src/components/About/Packages";
import Link from "next/link";

export const metadata = {
  title: "Our Classes",
  description: `Here are some details about our driving school classes.`,
};

export default function Classes() {
  return (
    <>
      <Packages />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        You want to become a driver? Reach out to us 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
