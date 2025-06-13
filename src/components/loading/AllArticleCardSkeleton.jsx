import React from "react";

const AllArticleCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4  animate-pulse mb-6">
      {/* Tags Skeleton */}
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-14"></div>
      </div>

      {/* Title Skeleton */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

      {/* Content Paragraphs Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>

      {/* Author Info Skeleton */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 flex items-center"></div>
        </div>
      </div>

      {/* Likes & Comments Icons Skeleton */}
      <div className="flex items-center space-x-4 mb-4 mt-4">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
      </div>

      {/* Read More Link Skeleton */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mt-4"></div>
    </div>
  );
};

export default AllArticleCardSkeleton;
