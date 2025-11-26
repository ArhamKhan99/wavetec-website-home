import React from "react";
import SideImage from "/public/assets/telco-mockup.png";
import Image from "next/image";
import { decodeAmp, makeArray } from "@/utils/helper";
import Container from "@/components/common/Container";

function ProductFeatures({ data }) {
  const items = makeArray(data?.blocks?.slice(1));

  return (
    <section className="bg-background py-22">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto lg:m-0">
          <div className="text-black text-2xl lg:text-3xl font-semibold mb-3">
            {decodeAmp(data?.blocks?.[0]?.text) || "Key Features & Capabilities"}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {items?.map((item, index) => (
              <div key={index} className="space-y-1">
                <h2 className="text-lg lg:text-xl font-semibold text-black">
                  {item?.title || "Pre-Arrival Scheduling"}
                </h2>
                <p className="text-base text-accent">
                  {item?.description ||
                    "Clients book appointments online or via WhatsApp, choosing branch, time, and service, reducing waiting times and improving customer experience."}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            {data?.images?.length > 0 && (
              <Image
                src={data?.images?.[0] || SideImage}
                alt="Customer Flow"
                width={600}
                height={400}
                className="w-full h-full rounded-2xl"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductFeatures;
