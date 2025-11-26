"use client";

import { useState, useMemo } from "react";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import Image from "next/image";
import Avatar from "/public/assets/avatar-group.png";
import { decodeAmp, splitByLineBreaks } from "@/utils/helper";
export default function FaqSection({ data, list }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const value = splitByLineBreaks(data?.text || "");
  const valueTwo = splitByLineBreaks(list?.text || "");
  // Extract FAQ blocks cleanly
  const faqs = useMemo(
    () =>
      data?.blocks
        ?.filter((block) => block.tag === "vc_toggle")
        .map((block) => ({
          question: block.attrs?.title || "",
          answer: block.text || "",
        })) || [],
    [data]
  );

  return (
    <div className="bg-background pb-12">
      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-black-two">
          {decodeAmp(value?.[0]) || "Frequently asked questions"}
        </h2>

        <p className="text-center text-base sm:text-lg lg:text-xl text-accent mt-5 mb-10 font-normal">
          {decodeAmp(value?.[1]) ||
            "Everything you need to know about the product and billing."}
        </p>

        <div className="space-y-4 max-w-3xl mx-auto px-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E9EAEB] dark:border-gray-700 pb-4 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-black-two font-semibold text-base py-4 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span>{item.question || "What KPIs can we track?"}</span>
                {openIndex === index ? (
                  <FiMinusCircle color="#A4A7AE" className="text-xl shrink-0" />
                ) : (
                  <GoPlusCircle color="#A4A7AE" className="text-xl shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="text-accent text-base mt-1 pr-3 transition-all duration-300 ease-in-out font-normal">
                  {item.answer ||
                    "Wavetec allows banks to monitor customer wait times, transaction throughput, appointment adherence, and satisfaction metrics, provide real time dashboards to optimize branch efficiency and customer experience."}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-background-two rounded-2xl h-auto py-12 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        {list?.images?.[0] && (
          <Image
            src={list.images[0] || Avatar}
            alt={list?.altText || "CTA Image"}
            width={120}
            height={50}
            className="object-contain"
            loading="lazy"
          />
        )}

        <div>
          <div className="text-lg md:text-xl font-semibold text-black-two mb-1">
            {decodeAmp(valueTwo?.[0]) || "Still have questionssssss?"}
          </div>
          <p className="text-md md:text-lg text-accent font-normal">
            {decodeAmp(valueTwo?.[1]) ||
              "Can’t find the answer you’re looking for? Please chat to our friendly teamsssss."}
          </p>
        </div>

        {list?.buttons?.length > 0 && (
          <button className="btn-primary-color text-white-foreground text-base font-semibold py-2 px-4 rounded-lg mt-4 transition-colors hover:opacity-90">
            {decodeAmp(list?.buttons?.[0]?.text) || "Get in touchsssssssss"}
          </button>
        )}
      </div>
    </div>
  );
}
