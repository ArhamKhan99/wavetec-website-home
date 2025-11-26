import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Container from "@/components/common/Container";
import Avatar from "/public/assets/delta-logo.png";
import { formatDataForSliderTestimonials } from "@/utils/helper";

export default function TestimonialSlider({ data }) {
  const testimonials = formatDataForSliderTestimonials(data?.blocks);
  return (
    <Container>
      <section className="bg-background py-12 lg:py-22 px-4 text-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 5000 }}
          loop={true}
          dots={true}
          spaceBetween={30}
        >
          {testimonials?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
                {/* Testimonial Text */}
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-black-two leading-10 ">
                  {item?.description ||
                    "Wavetec’s queue management solutions have significantly improved our customer experience by reducing wait times and optimizing service efficiencyssssssss."}
                </p>

                {/* Avatar */}
                <div className="flex flex-col items-center space-y-1">
                  <Image
                    src={item?.image || Avatar}
                    alt="Delta-Logo"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                  <p className="font-semibold text-black-two text-lg">
                    {item?.title || "Delta Air Linesssssss"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         <div className="custom-pagination mt-6 flex justify-center"></div>
      </section>
    </Container>
  );
}
