import Image from "next/image";
import ICON from "/public/assets/correct-icon.png";
import { decodeAmp, makeArray } from "@/utils/helper";

export default function ChallengesSection({ data, list }) {
  const items = makeArray(list?.blocks);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-22">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
          {decodeAmp(data?.blocks?.[0]?.text) || "Banking Challengessssss"}
        </h2>

        <p className="mt-3 max-w-3xl text-base sm:text-xl text-accent font-normal">
          {decodeAmp(data?.blocks?.[1]?.text) ||
            "Banks face pressure to deliver faster, personalized experiences while reducing costs, managing queues, ensuring service consistency, and improving overall performancessssssssssssss."}
        </p>

        {/* items — no borders between columns */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i}>
              <div
                className="grid place-items-start rounded-xl "
                aria-hidden="true"
              >
                <Image
                  src={list?.images?.length > 0 ? list?.images[i] : ICON}
                  alt="correct-icon"
                  width={48}
                  height={48}
                  className="text-leftobject-contain"
                />
              </div>

              <h3 className="mt-4  font-semibold text-lg text-black">
                {item?.title || "Long Queues"}
              </h3>
              <p className="mt-2 text-base leading-6 text-accent font-normal">
                {item?.description ||
                  "Long waiting times frustrate customers and reduce satisfaction, impacting both in-branch and digital experiences."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
