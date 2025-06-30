import { use, useEffect, useState } from "react";
import SearchBarAndFilters from "../../components/allArticles/SearchBarAndFilters";
import ArticleCards from "../../components/allArticles/ArticleCards";
import { ArticleContext } from "../../context/ArticlesProvider";
import AllArticleCardSkeleton from "../../components/loading/AllArticleCardSkeleton";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("newest");

  const axiosSecure = useAxiosSecure();
  const { allArticles, setAllArticles, loading } = use(ArticleContext);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch articles based on category
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "/articles";

        if (selectedCategory !== "all") {
          url = `/articles/Category/${selectedCategory}`;
        }

        const response = await axiosSecure.get(url);
        setAllArticles(response.data);
      } catch (err) {
        console.error("Failed to load articles:", err);
      }
    };

    fetchData();
  }, [selectedCategory]);

  // Filter and sort articles
  const getFilteredAndSortedArticles = () => {
    if (!Array.isArray(allArticles)) return [];

    let filtered = [...allArticles];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.articleTitle?.toLowerCase().includes(query) ||
          article.articleContent?.toLowerCase().includes(query) ||
          article.articleCategory?.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (selectedSort) {
      case "newest":
        return filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "oldest":
        return filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "popular":
        return filtered.sort((a, b) => b.likes.length - a.likes.length);
      default:
        return filtered;
    }
  };

  const filteredArticles = getFilteredAndSortedArticles();

  return (
    <>
      <div className="min-h-screen lg:p-6 mt-30 mb-70">
        {/* Header */}
        <div className="lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-8">
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
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />

        {/* Main Content */}
        <div className="lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6">
          {loading ? (
            Array.from({ length: 5 }).map((_, idx) => (
              <AllArticleCardSkeleton key={idx} />
            ))
          ) : filteredArticles.length > 0 ? (
            <div className="col-span-2 md:col-span-2">
              {filteredArticles.map((article) => (
                <ArticleCards article={article} key={article._id} />
              ))}
            </div>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                No Articles Found
              </h2>
              <p className="text-gray-500 dark:text-gray-200">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllArticlesPage;
