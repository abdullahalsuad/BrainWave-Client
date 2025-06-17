import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedArticlesCard from "./FeaturedArticlesCard";
import FeaturedArticlesCardSkeleton from "../loading/FeaturedArticlesCardSkeleton";
import { MdDoNotDisturb } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const FeaturedArticles = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setIsLoading(true);
    const fetchRecentArticles = async () => {
      try {
        const response = await axiosSecure.get("/articles/recent-articles");
        const recentArticles = await response.data;

        setRecentArticles(recentArticles);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
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
          {isLoading ? (
            <>
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
            </>
          ) : recentArticles.length > 0 ? (
            recentArticles.map((article) => (
              <FeaturedArticlesCard article={article} key={article._id} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-300 dark:bg-gray-800 rounded-lg ">
              {/* Message */}
              <h2 className="text-xl font-semibold dark:text-gray-200 mb-2">
                No Featured Articles Found
              </h2>
              <p className="dark:text-gray-100 mb-6">
                We couldn't find any articles in this category. Try checking
                back later or explore all our articles.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/all-articles"
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
