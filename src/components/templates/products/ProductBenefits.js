import Image from 'next/image';
import Mockup from '/public/assets/Screenmockup.png';
import { decodeAmp, formatDataForBenefits } from '@/utils/helper';
import Container from '@/components/common/Container';

export default function ProductBenefits({data}) {
const items=formatDataForBenefits(data?.blocks.slice(1));


  return (
    <section className="w-full bg-background py-22">
     
      <Container>
         {/* Section Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-2xl lg:text-4xl  font-semibold text-black-two mt-2">
          {decodeAmp(data?.blocks?.[0]?.text) || 'Benefits & Outcomesssssss'}
          </h2>
         
        </div>

        {/* Kiosk Types */}
        <div className='space-y-16'>
          {items.map((item, i) => (
             <div key={i} className="flex flex-col-reverse lg:flex-row items-center gap-8">
              {i%2!==0 && (
                 <div className="w-full lg:w-1/2">
              <Image
                src={item?.image || Mockup}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
                priority
                width={500}
                height={400}
              />
            </div>

              )}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold text-black-two">
                {item?.title || 'Queue Management'}
              </h3>
              <ul className="space-y-2">
                <li
                  className="flex items-start text-base lg:text-lg gap-2 text-accent"
                >
                  {item?.description || 'Whether you have a few branches or hundreds, our queue management system ensures smooth customer flow and reduces waiting times across all locations.'}
                </li>

              
              </ul>
            </div>
              {i%2==0 && (
                 <div className="w-full lg:w-1/2">
              <Image
                src={item?.image || Mockup}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
                priority
                width={500}
                height={400}
              />
            </div>

              )}
           
          </div>
          ))}
        </div>
     
      </Container>
    </section>
  );
}
