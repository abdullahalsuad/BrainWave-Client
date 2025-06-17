import { use, useEffect, useState } from "react";
import SearchBarAndFilters from "../../components/allArticles/SearchBarAndFilters";
import ArticleCards from "../../components/allArticles/ArticleCards";
import { ArticleContext } from "../../context/ArticlesProvider";
import AllArticleCardSkeleton from "../../components/loading/AllArticleCardSkeleton";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const axiosSecure = useAxiosSecure();
  const { allArticles, setAllArticles, loading } = use(ArticleContext);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // sort by category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(
          `/articles/Category/${selectedCategory}`
        );
        const categoryArticles = await response.data;
        setAllArticles(categoryArticles);
      } catch (err) {
        console.log("Failed to load ", err);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);
  return (
    <>
      <div
        className=" min-h-screen lg:p-6
      mt-30 mb-70"
      >
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            All Articles
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
            Discover insights, tutorials, and stories from our community of
            knowledge sharers
          </p>
        </div>

        {/* Search Bar & Filters */}
        <SearchBarAndFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Main Content */}
        <div className="lg:max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1  gap-6">
          {allArticles.length === 0 && (
            <>
              <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-100 dark:bg-gray-600 rounded-lg ">
                {/* Icon or illustration */}

                {/* Message */}
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  No Articles Found
                </h2>
                <p className="text-gray-500 dark:text-gray-200 mb-6">
                  We couldn't find any articles in this category. Try checking
                  back later or explore all our articles.
                </p>
              </div>
            </>
          )}

          {/* Article Cards */}
          <div className="col-span-2 md:col-span-2">
            {loading ? (
              <>
                <AllArticleCardSkeleton />
                <AllArticleCardSkeleton />
                <AllArticleCardSkeleton />
                <AllArticleCardSkeleton />
                <AllArticleCardSkeleton />
              </>
            ) : (
              [...allArticles]
                .reverse()
                .map((article) => (
                  <ArticleCards article={article} key={article._id} />
                ))
            )}
          </div>

          {/* Sidebar */}
        </div>
      </div>
    </>
  );
};

export default AllArticlesPage;
