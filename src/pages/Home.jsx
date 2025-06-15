import CategoriesSection from "../components/home/CategoriesSection";
import FeaturedArticles from "../components/home/FeaturedArticles";
import TopContributors from "../components/home/TopContributors";
import NewsletterSection from "../components/home/NewsletterSection";
import HeroSlider from "../components/home/HeroSlider";

const Home = () => {
  return (
    <div className="min-h-screen transition-colors duration-500  mb-30">
      {/* Banner */}
      <div className="hidden lg:inline md:inline">
        <HeroSlider />
      </div>

      {/* Featured Articles */}
      <FeaturedArticles />

      {/* Categories */}
      <CategoriesSection />

      {/* Top Contributors */}
      <TopContributors />

      {/* NewsletterSection */}
      <NewsletterSection />
    </div>
  );
};

export default Home;
