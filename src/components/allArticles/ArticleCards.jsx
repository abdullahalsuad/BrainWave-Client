import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const ArticleCards = ({ article }) => {
  // date formate
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between mb-2">
          <div className="flex flex-wrap gap-2  items-center space-x-2">
            {article.articleTags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className=" px-3 py-1 text-sm font-semibold rounded-full bg-teal-500 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {article.articleTitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {article.articleContent.length > 200
            ? `${article.articleContent.substring(0, 200)}...`
            : article.articleContent}
        </p>

        <div className="flex items-center space-x-2 mb-2">
          <img
            src={article.profilePhotoURL}
            alt="Author Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-md font-medium text-gray-900 dark:text-white">
              {article.displayName}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400 flex items-center">
              <span className="mr-2">
                <MdDateRange size={20} />
              </span>
              {formatDate(article.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 mt-4">
          <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <span className="mr-2">
              <FcLike size={20} />
            </span>
            {article.totalArticleLike}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <span className="mr-2">
              <FaRegComment size={18} />
            </span>
            {article.totalArticleComment}
          </span>
        </div>

        <Link
          to={`/all-articles/${article._id}`}
          className="block mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </>
  );
};

export default ArticleCards;
