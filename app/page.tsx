import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SeeIt } from "@/components/sections/see-it";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <Hero />
      <Features />
      <SeeIt />
      <Faq />
    </main>
  );
}
