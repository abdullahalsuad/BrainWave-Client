import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedArticlesCard from "./FeaturedArticlesCard";

const FeaturedArticles = () => {
  const [recentArticles, setRecentArticles] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const response = await axiosSecure.get("/articles/recent-articles");
        const recentArticles = await response.data;

        setRecentArticles(recentArticles);
      } catch (err) {
        console.log("Failed to load ", err);
      }
    };
    fetchRecentArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the latest insights and knowledge shared by our community
            of passionate learners.
          </p>
        </div>

        {/* featured cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <FeaturedArticlesCard article={article} key={article._id} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
