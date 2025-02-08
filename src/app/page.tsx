// import Image from "next/image";

// import { About } from "@/components/HomePage/About";
// import { AkumaProducts } from "@/components/HomePage/AkumaProducts";
// import { BuildingBounties } from "@/components/HomePage/BuildingBounties";
// import { BuyWithoutFear } from "@/components/HomePage/BuyWithoutFear";
// import { Facts } from "@/components/HomePage/Facts";
import { AkumaProducts } from "@/components/AkumaProducts";
import { AiMentality } from "@/components/HomePage/AiMentality";
import { BuildingBounties } from "@/components/HomePage/BuildingBounties";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { JoinCabal } from "@/components/HomePage/JoinCabal";
import { JustTheFacts } from "@/components/HomePage/JustTheFacts";
import { KeyPoints } from "@/components/HomePage/KeyPoints";
import { RoyaltySection } from "@/components/HomePage/RoyaltySection";
import { SpreadTheLove } from "@/components/HomePage/SpreadTheLove";
import { TeamSection } from "@/components/HomePage/TeamSection";
import { WeBuiltAnArmy } from "@/components/HomePage/WeBuiltAnArmy";
import { HonoraryMembers } from "@/components/HonoraryMembers";
import { Footer } from "@/components/Layout/Footer";
// import { HonoraryMembers } from "@/components/HomePage/HonoraryMembers";
// import { JoinCabal } from "@/components/HomePage/JoinCabal";
// import { KeyPoints } from "@/components/HomePage/KeyPoints";
// import { Royalty } from "@/components/HomePage/Team/Royalty";
// import { Team } from "@/components/HomePage/Team/Team";
// import { WeBuiltAnArmy } from "@/components/HomePage/WeBuiltAnArmy";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="relative z-10">
          <HeroSection />
          <AiMentality />
        </div>
        <Image
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={"/hero/hero-bg.png"}
          width={1440}
          height={1331}
          alt="Hero bg"
        />
      </div>
      <JustTheFacts />
      <AkumaProducts />
      <KeyPoints />
      <TeamSection />
      <RoyaltySection />
      <HonoraryMembers />
      <WeBuiltAnArmy />
      <BuildingBounties />
      <JoinCabal />
      <SpreadTheLove />
      <Footer />
      {/* <About />
      <Facts />
      <AkumaProducts />
      <BuyWithoutFear />
      <KeyPoints />
      <Team />
      <HonoraryMembers />
      <div className="container">
        <div className="relative z-10 max-w-[920px] mx-auto">
          <Royalty />
        </div>
      </div>
      <WeBuiltAnArmy />
      <BuildingBounties />
      <JoinCabal /> */}
    </>
  );
}
