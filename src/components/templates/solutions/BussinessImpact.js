import { decodeAmp, makeArray } from "@/utils/helper";

export default function BusinessImpact({ data }) {
  const filtered = data?.blocks.slice(2);
  const items = makeArray(filtered);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-22">
        {/* Heading + intro */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
          {decodeAmp(data?.blocks?.[0]?.text) || "Proven Business Impact"}
        </h2>
        <p className="mt-3 text-center max-w-3xl mx-auto text-base sm:text-base md:text-xl leading-relaxed text-accent font-normal">
          {decodeAmp(data?.blocks?.[1]?.text) ||
            "Wavetec’s integrated CX solutions enable banks to achieve measurable improvements in efficiency, compliance, and customer satisfaction across every branch and digital channel."}
        </p>

        {/* Blue pill with stats (no borders) */}
        <div className="mt-8 rounded-2xl bg-blue-background text-white-foreground px-6 py-8 sm:px-10 sm:py-12">
          <div className="grid grid-cols-1 gap-y-8 text-center md:grid-cols-3">
            {items?.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl sm:text-6xl font-semibold leading-none tracking-tight">
                  {item?.title || "40%"}
                </div>
                <div className="text-sm sm:text-lg font-semibold opacity-95">
                  {item?.description || "Reduced average wait times"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
