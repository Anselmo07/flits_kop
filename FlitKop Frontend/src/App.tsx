import Hero from "../src/components/section/Hero";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Categories from "./components/section/categories";
import FeaturedProducts from "./components/section/FeatureProducts";
import FloatingWhatsApp from "./components/section/FloatingWhatsApp";
import WhyChooseUs from "./components/section/WhyChooseUs";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;