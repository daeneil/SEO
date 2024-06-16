import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import AddBackLinkForm from "@/components/Track/backlinkform";
import AddKeywordForm from "@/components/Track/keywordform";
import { AccordionComponent } from "@/components/accordion/accordion";
import { Alerto } from "@/components/alert";
import { PlaceholdersAndVanishInputDemo } from "@/components/input";
import { Navbar} from "@/components/navbar";
import { ScrollMap } from "@/components/scrollmap";
import { StickyScrollReveal } from "@/components/sticky-scroll-reveal/sticky-scroll";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <section>
      <Alerto />
      <Navbar />
      <PlaceholdersAndVanishInputDemo />
      <Features />
      <StickyScrollReveal />
      <Separator className="my-20"/>
      <AccordionComponent />
      <Pricing />
      <ScrollMap url={""} />
    </section>
  );
}
