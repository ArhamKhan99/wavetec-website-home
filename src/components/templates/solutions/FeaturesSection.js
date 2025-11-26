import React from "react";
import SideImage from "/public/assets/telco-mockup.png";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import { decodeAmp, makeArray, splitByLineBreaks } from "@/utils/helper";

function FeaturesSection({ data, list }) {
  const value = splitByLineBreaks(data?.text || "");
  const items = makeArray(list?.blocks);

  return (
    <section className="bg-background py-12 lg:py-22">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto lg:m-0">
        <div className="text-black text-2xl lg:text-4xl font-semibold mb-3 ">
          {decodeAmp(value?.[0]) || " Use Cases Workflows in Bankingsssssss"}
        </div>
        {/* <h1 className="text-black text-md md:text-lg mb-3">
          {data?.[1] || value?.title}
        </h1> */}
        <p className="text-accent max-w-2xl  text-base md:text-xl font-normal">
          {decodeAmp(value?.[1]) ||
            "Explore how Wavetec enhances branch operations, customer engagement, and service efficiency through digital queues, self-service kiosks, and omnichannel banking workflowsssssss."}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-10 ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {items?.map((item, index) => (
            <div
              key={index}
              className={
                index == 0
                  ? "border-l-4 border-[#004EEB] pl-4 space-y-1"
                  : " pl-4 space-y-1"
              }
            >
              <h2 className="text-lg lg:text-lg font-semibold text-black">
                {item?.title || "Pre-Arrival Scheduling"}
              </h2>
              <p className="text-base text-accent font-normal">
                {item?.description ||
                  "Clients book appointments online or via WhatsApp, choosing branch, time, and service, reducing waiting times and improving customer experience."}
              </p>
              {/* <div className="text-blue flex items-center font-semibold cursor-pointer">
                Learn More <IoMdArrowForward className="ml-2" />
              </div> */}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2  ">
          {list?.images?.length > 0 && (
            <Image
              src={list?.images?.[0] || SideImage}
              alt="Customer Flow"
              width={600}
              height={400}
              className="w-full h-full rounded-2xl "
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
