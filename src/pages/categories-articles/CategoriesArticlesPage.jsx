import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedArticlesCard from "../../components/home/FeaturedArticlesCard";
import { MdDoNotDisturb } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import FeaturedArticlesCardSkeleton from "../../components/loading/FeaturedArticlesCardSkeleton";

const CategoriesArticlesPage = () => {
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  const axiosSecure = useAxiosSecure();

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // fetch articles by category
  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        const response = await axiosSecure.get(`/articles/Category/${slug}`);
        const categoryArticles = await response.data;
        setCategoryArticles(categoryArticles);
        setIsLoading(false);
      } catch (err) {
        console.log("Failed to load ", err);
        setIsLoading(false);
      }
    };
    fetchCategoryArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="py-16 mt-10 mb-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {slug}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the latest insights and knowledge shared by our community
              of passionate learners.
            </p>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
              <FeaturedArticlesCardSkeleton />
            </div>
          ) : categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* featured cards */}
              {categoryArticles.map((article) => (
                <FeaturedArticlesCard article={article} key={article._id} />
              ))}
            </div>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-300 dark:bg-gray-800 rounded-lg ">
              {/* Icon or illustration */}
              <MdDoNotDisturb size={30} className="my-4" />

              {/* Message */}
              <h2 className="text-xl font-semibold dark:text-gray-200 mb-2">
                No Articles Found
              </h2>
              <p className="dark:text-gray-100 mb-6">
                We couldn't find any articles in this category. Try checking
                back later or explore all our articles.
              </p>

              {/* CTA Button */}
              <Link
                to={"/all-articles"}
                className="  px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition flex items-center gap-4"
              >
                <FaLongArrowAltLeft /> Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoriesArticlesPage;
