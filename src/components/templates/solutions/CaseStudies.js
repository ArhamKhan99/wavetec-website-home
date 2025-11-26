"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Dummy from "/public/assets/blog-two.png";
import { decodeAmp, formatCaseStudyBlocks } from "@/utils/helper";

export default function CaseStudies({ data }) {
  const filtered = data?.blocks.slice(2);
  const items = formatCaseStudyBlocks(filtered);

  return (
    <section className="py-12 lg:py-22 bg-background-two">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-black">
              {decodeAmp(data?.blocks?.[0]?.text) ||
                "Trusted Banking Clients & Case Studiessssss"}
            </h2>
            <p className="text-base lg:text-xl font-normal mt-2 max-w-xl text-accent">
              {decodeAmp(data?.blocks?.[1]?.text) ||
                "Wavetec enhances banking with digital queues, kiosks, and seamless experiencesssssss."}
            </p>
          </div>
          <button className="w-full md:w-auto my-4 sm:mt-0 text-white-foreground text-sm sm:text-base font-semibold px-4 py-2 rounded-md btn-primary-color cursor-pointer">
            {decodeAmp(data?.buttons?.[0]?.text) || "View All Case Studiesssss"}
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={24}
          slidesPerView={3}
          loop={false}
          className="pb-10"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items?.map((item, index) => (
            <SwiperSlide>
              <div className=" rounded-xl  transition">
                <div className="w-[384px] bg-[#F5F5F5] mb-4 rounded-xl">
                  <Image
                    src={item?.image || Dummy}
                    alt="Case Study"
                    width={384}
                    height={256}
                  />
                </div>
                <p className="text-sm text-blue font-semibold mb-2">
                  {item?.date || "20 Jan 2025"}
                </p>
                <h3 className="text-lg font-semibold text-black">
                  {item?.title || " Bank of India"}
                </h3>
                <p className="text-base text-accent mt-2 font-normal">
                  {item?.description ||
                    "Reduced customer wait times by 30% using queue management and self-service kiosks."}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-start gap-3 mt-4">
          <button className="prev-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <span className="text-gray-700 text-xl">←</span>
          </button>
          <button className="next-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <span className="text-gray-700 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
