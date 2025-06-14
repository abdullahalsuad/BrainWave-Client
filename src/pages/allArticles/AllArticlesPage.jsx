import { use, useEffect } from "react";
import SearchBarAndFilters from "../../components/allArticles/SearchBarAndFilters";
import ArticleCards from "../../components/allArticles/ArticleCards";
import { ArticleContext } from "../../context/ArticlesProvider";
import AllArticleCardSkeleton from "../../components/loading/AllArticleCardSkeleton";

const AllArticlesPage = () => {
  const { allArticles, loading } = use(ArticleContext);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <SearchBarAndFilters />

        {/* Main Content */}
        <div className="lg:max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1  gap-6">
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
              allArticles.map((article) => (
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
