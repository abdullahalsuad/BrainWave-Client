const FeaturedArticlesCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

      <div className="p-6 my-4 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>

        {/* Title Lines */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>

        {/* Content Preview */}
        <div className="space-y-2 mb-4 flex-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>

        {/* Read More Button */}
        <div className="mt-auto pt-4">
          <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 w-full"></div>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticlesCardSkeleton;
