import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedArticlesCard from "../../components/home/FeaturedArticlesCard";

const CategoriesArticlesPage = () => {
  const [categoryArticles, setCategoryArticles] = useState([]);
  const { slug } = useParams();
  console.log(slug);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        const response = await axiosSecure.get(`/articles/Category/${slug}`);
        const categoryArticles = await response.data;
        console.log(categoryArticles);

        setCategoryArticles(categoryArticles);
      } catch (err) {
        console.log("Failed to load ", err);
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

          {/* featured cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <FeaturedArticlesCard article={article} key={article._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesArticlesPage;
