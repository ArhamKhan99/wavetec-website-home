import React from "react";
import ICON from "/public/assets/correct-icon.png";
import Image from "next/image";
import Container from "@/components/common/Container";
import { decodeAmp, makeArray } from "@/utils/helper";



export default function ProductHighlight({ data }) {
   
    const feature=makeArray(data?.blocks.slice(2));
   
  return (
    <section className="bg-blue-background text-white  py-22">
      <Container>
        <h2 className="text-2xl lg:text-4xl  font-semibold mb-4">{decodeAmp(data?.blocks?.[0]?.text) || "Turn Data Into Insightsssss"}</h2>
        <p className=" max-w-3xl text-base md:text-xl mb-12">
         {decodeAmp(data?.blocks?.[1]?.text) || "Spectra empowers organizations to monitor customer flow, optimize service operations, and make smarter, data-driven decisions in real timesssssss."}
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {feature.map((item, i) => (
            <div key={i}>
              <div
                className="grid place-items-start rounded-xl "
                aria-hidden="true"
              >
                <Image
                  src={data?.images?.[i]}
                  alt="correct-icon"
                  width={48}
                  height={48}
                  className="text-left object-contain"
                />
                 <h3 className="mt-4   font-semibold text-lg ">
                {item?.title || "Long Queues"}
              </h3>
              <p className="mt-2  font-normal text-base leading-6 ">
                {item?.description ||
                  "Long waiting times frustrate customers and reduce satisfaction, impacting both in-branch and digital experiences."}
              </p>
              </div>

             
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
