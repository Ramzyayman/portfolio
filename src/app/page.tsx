import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { CurrentlyBuilding } from "@/components/home/CurrentlyBuilding";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <CurrentlyBuilding />
      <Contact />
    </div>
  );
}
