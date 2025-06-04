import React from "react";
import SearchBarAndFilters from "../../components/allArticles/SearchBarAndFilters";

const AllArticlesPage = () => {
  // Mock Data
  const articles = [
    {
      title: "The Future of Artificial Intelligence in Education",
      description:
        "Exploring how AI is revolutionizing the way we learn and teach in modern educational institutions. From personalized learning paths to automated grading systems...",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      views: 1234,
      comments: 23,
      readTime: 5,
      tags: ["Technology", "Featured"],
    },
    {
      title: "Sustainable Development Goals: A Student's Perspective",
      description:
        "Understanding the UN's SDGs and how students can contribute to creating a more sustainable future through education and action...",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      views: 987,
      comments: 18,
      readTime: 7,
      tags: ["Environment", "SDG", "Sustainability"],
    },
    {
      title: "Modern Web Development Trends in 2024",
      description:
        "A comprehensive guide to the latest frameworks, tools, and best practices in web development. Learn about React, Next.js, and emerging technologies...",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      views: 2156,
      comments: 34,
      readTime: 6,
      tags: ["Programming", "Featured", "Web Dev", "React", "JavaScript"],
    },
  ];

  const popularTags = [
    "AI",
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "Web Dev",
    "Data Science",
    "Climate",
    "Education",
    "Psychology",
  ];

  const recentArticles = [
    {
      title: "The Future of Artificial Intelligence in Education",
      date: "Dec 15, 2024",
    },
    {
      title: "Sustainable Development Goals: A Student's Perspective",
      date: "Dec 12, 2024",
    },
    {
      title: "Modern Web Development Trends in 2024",
      date: "Dec 10, 2024",
    },
    {
      title: "The Psychology of Learning: Memory Techniques",
      date: "Dec 8, 2024",
    },
  ];
  return (
    <>
      <div className="dark:bg-gray-900 min-h-screen p-6">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article Cards */}
          <div className="col-span-2">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${
                          tag === "Featured"
                            ? "bg-yellow-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {article.readTime} min read
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center space-x-2 mb-2">
                  <img
                    src="https://via.placeholder.com/30"
                    alt="Author Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {article.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="mr-1">📅</span>
                      {article.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="mr-1">👀</span>
                    {article.views}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="mr-1">💬</span>
                    {article.comments}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-2 py-1 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="block mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            {/* Popular Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Popular Tags
              </h3>
              <div className="flex flex-wrap -mx-2">
                {popularTags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Recent Articles
              </h3>
              <ul>
                {recentArticles.map((article, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 mb-4 last:mb-0"
                  >
                    <img
                      src="https://via.placeholder.com/30"
                      alt="Article Thumbnail"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-900 dark:text-white hover:underline"
                      >
                        {article.title}
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {article.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscription Form */}
            <div className="bg-indigo-600 dark:bg-indigo-800 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-white mb-4">
                Get the latest articles delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 mb-2"
              />
              <button className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllArticlesPage;
