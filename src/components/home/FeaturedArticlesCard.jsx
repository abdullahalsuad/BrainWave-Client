import { Link } from "react-router";
import { formatDate } from "../../utils/dateformat";

const FeaturedArticlesCard = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <img
        src={article.articleThumbnail}
        alt={article.articleTitle}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 my-4">
        <span className="px-2 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded">
          {article.articleCategory}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex-1 line-clamp-2 mt-4">
          {article.articleTitle}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {article.articleContent.length > 200
            ? `${article.articleContent.substring(0, 200)}...`
            : article.articleContent}
        </p>

        {/*  Read More Button  */}
        <div className="mt-auto pt-4">
          <Link
            to={`/all-articles/${article._id}`}
            className="block w-full text-center text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded border border-teal-600 dark:border-teal-400 transition-colors"
          >
            Read More →
          </Link>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
          <div className="flex items-center">
            <img
              src={article.profilePhotoURL}
              alt={article.displayName}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span>{article.displayName}</span>
          </div>
          <span>{formatDate(article.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticlesCard;
