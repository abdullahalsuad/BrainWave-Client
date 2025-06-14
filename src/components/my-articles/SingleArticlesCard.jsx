import { Edit, Trash2 } from "lucide-react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const SingleArticlesCard = ({ article, handleRemove, handleEdit }) => {
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={article.articleThumbnail}
          alt={article.articleTitle}
          className="w-full lg:w-48 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {article.articleTitle}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {article.articleContent.length > 200
              ? `${article.articleContent.substring(0, 200)}...`
              : article.articleContent}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-4">
              <span>{formatDate(article.createdAt)}</span>
              <span className="flex gap-1">
                <p className="text-teal-400">{article.totalArticleLike}</p>{" "}
                Likes
              </span>

              <span className="flex gap-1">
                <p className="text-teal-400">{article.totalArticleLike}</p>{" "}
                comments
              </span>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => handleEdit(article)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer text-md"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
              <button
                onClick={() => handleRemove(article._id)}
                className="inline-flex items-center px-3 py-2 border border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 rounded hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer text-md"
              >
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </button>
              <Link to={`/all-articles/${article._id}`}>
                <button className="inline-flex items-center px-3 py-2 border border-teal-300 dark:border-teal-600 text-teal-800 dark:text-teal-400 rounded hover:bg-teal-50 dark:hover:bg-teal-950 transition cursor-pointer text-md">
                  <FaRegEye className="w-4 h-4 mr-1" /> View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticlesCard;
