import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsHighlight from "./components/StatsHighlight";
import Products from "./components/Products";
import OpenPlatform from "./components/OpenPlatform";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Achievements from "./components/Achievements";
import News from "./components/News";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <StatsHighlight />
      <Products />
      <OpenPlatform />
      <Industries />
      <Testimonials />
      <Achievements />
      <News />
      <ContactForm />
      <Footer />
    </main>
  );
}
