import { Plus } from "lucide-react";

import { Link } from "react-router";

const MyArticlesHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and track your published articles
        </p>
      </div>
      <Link
        to="/post-article"
        className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition"
      >
        <Plus className="w-4 h-4 mr-2" />
        New Article
      </Link>
    </div>
  );
};

export default MyArticlesHeader;
