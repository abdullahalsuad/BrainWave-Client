import { Plus, Edit, Trash2 } from "lucide-react";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router";

const MyArticlesPage = () => {
  const myArticles = [
    {
      id: "1",
      title: "Getting Started with React Hooks",
      excerpt:
        "A comprehensive guide to understanding and implementing React Hooks in your projects.",
      category: "Technology",
      tags: ["React", "JavaScript", "Frontend"],
      authorName: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      publishedDate: "2024-03-10",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      commentCount: 15,
      status: "published",
      views: 324,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-30 mb-70 dark:text-gray-100">
      {/* Page Header */}
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
              <FaRegComments className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="ml-4">
              <p className="text-md text-gray-600 dark:text-gray-400">
                Total Comment
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                324
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
              <SlLike className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="ml-4">
              <p className="text-md text-gray-600 dark:text-gray-400">
                Total Likes
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                1
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg">
              <HiOutlineDocumentText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="ml-4">
              <p className="text-md text-gray-600 dark:text-gray-400">
                Total Articles
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article List */}
      {myArticles.length > 0 ? (
        <div className="space-y-6">
          {myArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full lg:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {article.title}
                    </h3>
                    <span className="text-md px-2 py-1  bg-green-100 dark:bg-green-900 text-black dark:text-green-400 rounded-md ">
                      {article.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex gap-4">
                      <span>{article.publishedDate}</span>
                      <span>{article.views} views</span>
                      <span>{article.commentCount} comments</span>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer text-md">
                        <Edit className="w-4 h-4 mr-1" /> Edit
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 rounded hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer text-md">
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MyArticlesPage;
