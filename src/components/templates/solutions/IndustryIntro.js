import { decodeAmp } from "@/utils/helper";

export default function IndustryIntro({ data }) {
  return (
    <section className="relative w-full bg-blue-background text-white-foreground ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 lg:py-22">
        <p className="font-semibold leading-none text-sm sm:text-base tracking-wide">
          {decodeAmp(data?.blocks?.[0]?.text) || "Industries We Servessss"}
        </p>

        <h1 className="mt-3 font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl tracking-tight">
          {decodeAmp(data?.blocks?.[1]?.text) || "Banking Solutionsssssss"}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed font-normal">
          {decodeAmp(data?.blocks?.[2]?.text) ||
            "Wavetec helps banks enhance customer experiences using queue management, self-service kiosks, ATMs, analytics, and AI to streamline operationssssssss."}
        </p>
      </div>
    </section>
  );
}
