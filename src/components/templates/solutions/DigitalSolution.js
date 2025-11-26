import {
  decodeAmp,
  formatDataForTypeKiosks,
  formatDigitalGridSolutions,
} from "@/utils/helper";
import { FiArrowRight } from "react-icons/fi";

export default function DigitalSolutionsGrid({ data }) {
  const filtered = data?.blocks.slice(1);
  const items = formatDigitalGridSolutions(filtered);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
          {decodeAmp(data?.blocks?.[0]?.text) ||
            "Digital Transformation Solutions"}
        </h2>

        {/* Items */}
        <div className="mt-10 rounded-xl">
          <div className="grid gap-x-12 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items?.map((item, index) => (
              <div key={index} className="text-left">
                <h3 className="text-lg font-semibold text-black">
                  {item?.title || "WhatsApp Virtual Queuing Solution"}
                </h3>

                <p className="mt-2 text-base leading-6 text-accent font-normal">
                  {item?.description ||
                    "Enable customers to join the queue remotely via WhatsApp, reducing in-branch congestion and enhancing customer convenience."}
                </p>

                <a
                  // href={item.link.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                  // aria-label={item.link.label || item.heading}
                >
                  {item?.button || "Learn More"}
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
