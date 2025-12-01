import GlobalPresence from "@/components/templates/home/GlobalPresence";
import Hero from "@/components/templates/home/Hero";
import HeroLogosSection from "@/components/templates/home/HeroLogosSection";
import Integration from "@/components/templates/home/Integration";
import KioskScrollSection from "@/components/templates/home/KiosksScroller";
import VirtualQueueSection from "@/components/templates/home/VirtualQueueSection";

export default function Home() {
  return (
    <div >
    <Hero />

      <HeroLogosSection />
      <VirtualQueueSection />

      <KioskScrollSection prefix ="block2" frameCount = "551"  folder = "/assets/kiosk-new/"  frameExt = "webp" data={{heading:"Self-Service Kiosks & ATMs",description:"Empower your customers; when, how and where they want.",buttonText:"Discover how it works"}} value={4} />
      {/* <KioskScrollSection prefix ="ezgif-frame" frameCount = "100"  folder = "/assets/dashboard/"   frameExt = "webp" data={{heading:"CX Analytics Platform",description:"Visualize, Measure and take action on every touch point.",buttonText:"Discover how it works"}} value={3}/> */}
      <Integration />
      {/* <KioskScrollSection prefix ="ezgif-frame" frameCount = "100"  folder = "/assets/avatar/"   frameExt = "webp" data={{heading:"AI",description:"Take the experience ",buttonText:"Discover how it works"}} value={3}/> */}
        <GlobalPresence />
    </div>
  );
}