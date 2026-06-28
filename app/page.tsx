import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SeeIt } from "@/components/sections/see-it";
import { Faq } from "@/components/sections/faq";
import { Changelog } from "@/components/sections/changelog";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-20 text-center sm:px-6">
      <Hero />
      <SeeIt />
      <Features />
      <Faq />
      <Changelog />
    </main>
  );
}
