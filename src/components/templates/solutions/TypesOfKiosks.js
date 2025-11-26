import Image from "next/image";
import Mockup from "/public/assets/Screenmockup.png";
import { FiArrowRight } from "react-icons/fi";
import { decodeAmp, formatDataForTypeKiosks } from "@/utils/helper";

export default function TypesOfKiosks({ data }) {
  const items = formatDataForTypeKiosks(data?.blocks);

  return (
    <section className="w-full bg-background py-12 lg:py-22">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-base font-semibold text-blue uppercase tracking-wide">
            {decodeAmp(data?.blocks?.[0]?.text) ||
              "Enhanced Customer Experiencessssss"}
          </h4>
          <h2 className="text-2xl md:text-4xl font-semibold text-black mt-2">
            {decodeAmp(data?.blocks?.[1]?.text) ||
              "Integrated Banking Solutionsssssss"}
          </h2>
          <p className="mt-2 text-accent max-w-2xl mx-auto font-normal md:text-xl">
            {decodeAmp(data?.blocks?.[2]?.text) ||
              "Banks can enhance efficiency, reduce wait times, and deliver consistent, data-driven service across channels.s"}
          </p>
        </div>

        {/* Kiosk Types */}
        <div className="space-y-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col-reverse lg:flex-row items-center gap-8"
            >
              {i % 2 !== 0 && (
                <div className="w-full lg:w-1/2">
                  <Image
                    src={item?.image || Mockup}
                    alt="Kiosk mockup"
                    className="w-full h-[512px] rounded-lg shadow-md"
                    priority
                    width={100}
                    height={400}
                  />
                </div>
              )}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text xl md:text-3xl font-semibold text-black">
                  {item?.title?.replace(/amp;/g, "") || "Queue Management"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start flex-col gap-2 text-accent font-normal text-sm md:text-lg">
                    {item?.description ||
                      "Whether you have a few branches or hundreds, our queue management system ensures smooth customer flow and reduces waiting times across all locations."}

                    <a className="mt-3  cursor-pointer inline-flex items-center gap-2  font-semibold text-blue hover:underline rounded text-base">
                      {item?.buttonText || "Explore Queue Management"}
                      <FiArrowRight aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              {i % 2 == 0 && (
                <div className="w-full lg:w-1/2">
                  <Image
                    src={item?.image || Mockup}
                    alt="Kiosk mockup"
                    className="w-full  h-[512px] rounded-lg shadow-md"
                    priority
                    width={500}
                    height={400}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
