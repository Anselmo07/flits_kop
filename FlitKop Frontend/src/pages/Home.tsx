import Hero from "../components/section/Hero";
import Categories from "../components/section/categories";
import FeaturedProducts from "../components/section/FeatureProducts";
import WhyChooseUs from "../components/section/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />
    </>
  );
}