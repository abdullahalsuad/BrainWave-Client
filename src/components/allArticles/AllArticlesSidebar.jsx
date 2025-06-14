const AllArticlesSidebar = () => {
  // Mock Data
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
    <div className="col-span-1 md:col-span-1">
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
    </div>
  );
};

export default AllArticlesSidebar;
