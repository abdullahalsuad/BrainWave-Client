import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FeaturedArticlesCard from "../../components/home/FeaturedArticlesCard";
import { MdDoNotDisturb } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
            {categoryArticles.length > 0 ? (
              categoryArticles.map((article) => (
                <FeaturedArticlesCard article={article} key={article._id} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg ">
                {/* Icon or illustration */}
                <MdDoNotDisturb size={30} className="my-4" />

                {/* Message */}
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  No Articles Found
                </h2>
                <p className="text-gray-500 mb-6">
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
        </div>
      </section>
    </>
  );
};

export default CategoriesArticlesPage;
