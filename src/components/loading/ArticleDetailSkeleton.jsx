import React from "react";

const ArticleDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-60 animate-pulse">
      {/* Main Content */}
      <div className="transition-colors duration-500 mb-10">
        <div className="px-4 py-8 bg-white dark:bg-gray-900 rounded-md">
          {/* Article Header */}
          <div className="mb-8">
            {/* Article Image */}
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 lg:flex-nowrap mb-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-14"></div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></h1>

            {/* Author Info */}
            <div className="flex flex-wrap items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
              </div>
              <span>•</span>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <span>•</span>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              <span>•</span>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>

              {/* Like Button Placeholder */}
              <div className="ml-4 h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600"></div>
            </div>
          </div>

          {/* Article Content */}
          <article className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
              ></div>
            ))}
          </article>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold mb-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-24"></h3>

        {/* Comment Form */}
        <form className="mb-4 space-y-2">
          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div className="flex justify-end">
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
        </form>

        {/* Existing Comment */}
        <div className="my-4 border border-gray-200 dark:border-gray-600 p-4 rounded-md shadow-md bg-sky-50 dark:bg-gray-700">
          <div className="flex items-center mb-4 mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 mr-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailSkeleton;
