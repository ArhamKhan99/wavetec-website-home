import React from "react";
import Image from "next/image";
import CompaniesImage from "/public/assets/companies.png";
import { useSelector } from "react-redux";
import { decodeAmp } from "@/utils/helper";

export default function Companies({ data }) {
  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <section className="w-full py-12 lg:py-22 bg-background text-center">
      <p className="text-base md:text-base text-accent font-medium mb-6">
        {decodeAmp(data?.text) || "We’ve worked with some great companiessssss"}
      </p>

      {/* <div
        className="
          inline-block w-full
          rounded-2xl
          p-3 sm:p-4
          bg-transparent
          dark:bg-white dark:shadow-sm dark:ring-1 dark:ring-black/10
        "
      > */}

      <Image
        src={
          data?.images?.length > 1 && theme == "dark"
            ? data?.images?.[1]
            : data?.images?.[0] || CompaniesImage
        }
        alt="Company"
        width={600}
        height={400}
        className="w-full object-cover rounded-xl"
      />
      {/* </div> */}
    </section>
  );
}
