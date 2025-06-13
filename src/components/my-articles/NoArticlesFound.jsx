import { Plus } from "lucide-react";
import { Link } from "react-router";

const NoArticlesFound = () => {
  return (
    <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
      <div className="text-6xl mb-4">📝</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        No articles found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Start writing your first article!
      </p>
      <Link
        to="/post-article"
        className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition"
      >
        <Plus className="h-4 w-4 mr-2" />
        Create New Article
      </Link>
    </div>
  );
};

export default NoArticlesFound;
