import Hero from "./components/Hero";
import CategoryLinks from "../../components/ui/CategoryLinks";
import FeaturedMain from "./components/FeaturedMain";
import FeaturedSecondary from "./components/FeaturedSecondary";
import FeaturedTertiary from "./components/FeaturedTertiary";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryLinks />
      <FeaturedMain />
      <FeaturedSecondary />
      <FeaturedTertiary />
    </>
  );
}
