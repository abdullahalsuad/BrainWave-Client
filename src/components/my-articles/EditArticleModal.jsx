import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";

const EditArticleModal = ({ article, onClose, handleSave }) => {
  const [tags, setTags] = useState(article.articleTags || []);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (!newTag.trim()) return toast.warning("Empty tag");
    if (tags.includes(newTag.trim()))
      return toast.warning("Tag already exists");

    setTags((prev) => [...prev, newTag.trim()]);
    setNewTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-all duration-300">
      <div className="w-full sm:w-11/12 md:w-8/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto animate-fadeInUp border border-gray-100 dark:border-gray-700">
        {/* Title & Close Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Edit Article
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 dark:text-gray-300 transition cursor-pointer"
            aria-label="Close modal"
          >
            <FaRegTimesCircle size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={(e) => handleSave(article._id, e, tags)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Article Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:col-span-2 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Article Details
              </h2>

              {/* Title */}
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Title *
                </label>
                <input
                  required
                  type="text"
                  id="title"
                  name="articleTitle"
                  defaultValue={article.articleTitle}
                  placeholder="Enter article title..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition"
                />
              </div>

              {/* Thumbnail URL */}
              <div className="mb-5">
                <label
                  htmlFor="thumbnail"
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Thumbnail URL
                </label>
                <input
                  required
                  type="url"
                  id="thumbnail"
                  name="articleThumbnail"
                  defaultValue={article.articleThumbnail}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition"
                />
              </div>

              {/* Content */}
              <div className="mb-5">
                <label
                  htmlFor="content"
                  className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Content *
                </label>
                <textarea
                  required
                  id="content"
                  name="articleContent"
                  defaultValue={article.articleContent}
                  rows="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition"
                />
              </div>
            </div>

            {/* Right Column: Category & Tags */}
            <div className="space-y-6">
              {/* Category & Tags Card */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg dark:bg-gray-900 dark:border-gray-700 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                  Category & Tags
                </h2>

                {/* Category Dropdown */}
                <div className="mb-5">
                  <label
                    htmlFor="category"
                    className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Category *
                  </label>
                  <div className="relative">
                    <select
                      required
                      id="category"
                      name="articleCategory"
                      defaultValue={article.articleCategory}
                      className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white cursor-pointer transition"
                    >
                      <option value="">Select Category</option>
                      <option value="Artificial-Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Cloud-Computing">Cloud Computing</option>
                      <option value="Project-Based">Project Based</option>
                      <option value="Internet-of-Things">
                        Internet of Things
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="mb-5">
                  <label
                    htmlFor="tags"
                    className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Tags
                  </label>
                  <div className="flex mb-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                      placeholder="Add tag..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-4 py-2 ml-2 bg-indigo-100 border border-indigo-300 text-indigo-700 dark:bg-indigo-900 dark:border-indigo-700 dark:text-indigo-300 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800 transition flex items-center gap-1"
                    >
                      <IoMdAdd /> Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Section */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg dark:bg-gray-900 dark:border-gray-700 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                  Actions
                </h2>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md hover:from-teal-600 hover:to-teal-700 font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticleModal;
