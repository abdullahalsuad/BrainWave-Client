import React from "react";

const ArticleCardSkeleton = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnail Placeholder */}
          <div className="w-full lg:w-48 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

          <div className="flex-1 space-y-4">
            {/* Title */}
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"></div>

            {/* Description Lines */}
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>

            {/* Footer: Info & Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2 gap-3 sm:gap-0">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-12"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16 min-w-[64px]"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16 min-w-[64px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCardSkeleton;
