// src/components/shared/IntegrationsShowcase.jsx
import Image from "next/image";
import { decodeAmp, splitByLineBreaks } from "@/utils/helper";

export default function IntegrationsShowcase({ data }) {
  const value = splitByLineBreaks(data?.text || "");
  return (
    <section className="w-full bg-background-two">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <p className="text-base font-semibold text-blue">
            {decodeAmp(value?.[0]) || "Integrationssss"}
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-semibold text-black">
            {decodeAmp(value?.[1]) ||
              "Seamless Integrations & Regulatory Compliancesss"}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-base md:text-xl font-normal leading-relaxed text-accent">
            {decodeAmp(value?.[2]) ||
              "Our platform connects with leading industry systems while fully adhering to global standards, ensuring security and seamless operations for our clientsssss."}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          {data?.images?.length > 0 && (
            <div className="w-full max-w-5xl">
              <Image
                src={data?.images?.[0] || ""}
                width={200}
                height={100}
                alt="Supported integrations"
                className="w-full h-auto object-contain"
                priority
                sizes="(min-width: 1280px) 800px, (min-width: 768px) 70vw, 90vw"
              />
            </div>
          )}
        </div>

        {data?.buttons?.length > 0 && (
          <div className="mt-8 flex justify-center">
            <a
              // href={cta.href}
              className="mt-4 sm:mt-0 text-white-foreground text-sm sm:text-base font-semibold px-4 py-2 rounded-md btn-primary-color cursor-pointer"
            >
              {decodeAmp(data?.buttons?.[0]?.text) || "Learn More"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
