import Image from "next/image";
import HeroImage from "/public/assets/laptop.png";
import BGImage from "/public/assets/background.png";
import Container from "@/components/common/Container";
import Logos from "/public/assets/companies-logo.png";
import Button from "@/components/common/Button";
import { decodeAmp, splitByLineBreaks } from "@/utils/helper";
import { useSelector } from "react-redux";
import Navbar from "@/components/layout/Navbar";

export default function Hero({ data }) {
  const value = splitByLineBreaks(data?.text || "");
  const theme=useSelector((state)=> state?.theme?.theme);
  
 
  return (
    <section className="w-full relative z-10 h-auto flex items-center justify-center bg-background-two overflow-hidden py-12 lg:py-22">
      {/* Background image */}
      <Image
        src={BGImage}
        alt="Background"
        fill
        priority
        className="object-cover  pointer-events-none dark:opacity-20"
        // className="object-cover mix-blend-color-burn dark:mix-blend-color-burn pointer-events-none z-99"
      />
      <Navbar />

      <Container>
        <div className="relative z-10 flex flex-col items-center md:flex-row gap-8 justify-between py-12 lg:py-20">
          {/* Left content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="max-w-xl text-3xl sm:text-4xl  xl:text-6xl font-semibold text-black-two mb-8">
              {decodeAmp(value?.[0]) || "Gain Full Control of Customer Experiencesssssss"}
            </h1>

            <p className="w-full lg:max-w-md text-base sm:text-lg xl:text-xl font-normal text-accent  mb-8 leading-relaxed">
              {decodeAmp(value?.[1]) ||
                "The smart solution to measure, analyze, and optimize customer flow across branches and digital channels."}
            </p>

            {data?.buttons?.length > 0 && (
              <Button value={decodeAmp(data?.buttons?.[0]?.text) || "Book a Demosss"} />
            )}

            <div className="mt-10 ">
              <p className="text-accent text-base font-medium mb-4">
                {decodeAmp(value?.[2]) || "Trusted by 4,000+ companiesssss"}
              </p>
              <div className="mt-8 flex justify-center">
                <Image
                  src={theme==='dark' ? data?.images?.[1] : data?.images?.[0]  || Logos}
                  width={200}
                    height={40}
                  alt="Companies Logos"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src={data?.images?.[2] || HeroImage}
              alt="Hero"
              width={400}
              height={400}
              className="w-full rounded-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
