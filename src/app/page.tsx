import PcLogoSummer from "@/components/pcLogoSummer";
import SummerAccordion from "@/components/summerAccordion";
import { SummerCard } from "@/components/summerCard";

const Home = () => (
  <>
    <main className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] 
    dark:bg-[linear-gradient(to_right,#00000030_1px,transparent_1px),linear-gradient(to_bottom,#00000030_1px,transparent_1px)] 
    bg-[size:70px_70px] pb-12 border-b-2 border-black">
      <div className="w-full flex justify-center">
        <PcLogoSummer />
      </div>
      <div className="flex-grow">
        <SummerCard />
      </div>
    </main>
    <div className="w-full flex justify-center my-16">
      <SummerAccordion />
    </div>
  </>
);

export default Home;