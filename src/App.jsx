import { ThemeProvider } from "./components/ThemeProvider.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Marquee from "./sections/Marquee.jsx";
import About from "./sections/About.jsx";
import ProductRanges from "./sections/ProductRanges.jsx";
import Values from "./sections/Values.jsx";
import WhyChoose from "./sections/WhyChoose.jsx";
import HighFives from "./sections/HighFives.jsx";
import Services from "./sections/Services.jsx";
import Stats from "./sections/Stats.jsx";
import Partners from "./sections/Partners.jsx";
import CallToAction from "./sections/CallToAction.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import BackgroundFx from "./components/BackgroundFx.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-clip bg-[#FAFAFB] text-ink-900 dark:bg-ink-950 dark:text-ink-100">
        <BackgroundFx />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <ProductRanges />
          <Values />
          <WhyChoose />
          <HighFives />
          <Services />
          <Stats />
          <Partners />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
