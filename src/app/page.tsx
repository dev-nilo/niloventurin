import { ThemeProvider } from "../context/ThemeContext";
import { ENVIRONMENT, environmentLabel } from "../environment/environment";
import { TopBar } from "../components/layout/TopBar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Contact } from "../components/sections/Contact";

// Ids double as anchors; the hero comes first so the top bar can tell when
// none of the numbered sections is on screen yet.
const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <ThemeProvider>
      {/* ENVIRONMENT reads server-only env vars, so the label is resolved here. */}
      <TopBar items={NAV_ITEMS} environment={environmentLabel(ENVIRONMENT)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
