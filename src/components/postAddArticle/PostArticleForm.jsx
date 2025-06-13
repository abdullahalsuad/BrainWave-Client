import { IoMdAdd } from "react-icons/io";
// import JoditEditor from "jodit-react";
// import { useState } from "react";

const PostArticleForm = ({
  handleAddTag,
  handleRemoveTag,
  tags,
  newTag,
  setNewTag,
  creatorEmail,
  displayName,
  isLoading,
}) => {
  // const [content, setContent] = useState("");
  // console.log(content);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Article Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:col-span-2 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
            Article Details
          </h2>

          <div className="mb-5">
            <label htmlFor="title" className="block font-medium mb-2">
              Title *
            </label>
            <input
              required
              type="text"
              id="title"
              name="articleTitle"
              placeholder="Enter article title..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="thumbnail" className="block font-medium mb-2">
              Thumbnail URL
            </label>
            <input
              required
              type="url"
              id="thumbnail"
              name="articleThumbnail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="content" className="block font-medium mb-2">
              Content *
            </label>
            <textarea
              required
              id="content"
              name="articleContent"
              placeholder="Write your article content here..."
              rows="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            {/* Replace textarea with JoditEditor */}
            {/* <JoditEditor
              value={content}
              onChange={(newContent) => setContent(newContent)}
              config={{
                readonly: false,
                height: 400,
                statusbar: false,
                tabIndex: 0,
                autofocus: true,
                useSplitMode: false,
                uploader: {
                  insertImageAsBase64URI: true, // avoids extra API calls for image uploads
                },
                toolbarAdaptive: false,
              }}
              className="dark:bg-gray-900 dark:text-white"
            /> */}
          </div>

          <div className="mb-5">
            <div className="flex space-x-4">
              {/* Email Field */}
              <div className="w-1/2">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="creatorEmail"
                  readOnly
                  value={creatorEmail}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800  select-none dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Username Field */}
              <div className="w-1/2">
                <label htmlFor="username" className="block font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="displayName"
                  readOnly
                  value={displayName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800  select-none dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Category & Tags */}
        <div>
          <div className="bg-white border border-gray-200 lg:p-6 p-4 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-4">
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
              Category & Tags
            </h2>

            <div className="mb-5">
              <label htmlFor="category" className="block font-medium mb-2">
                Category *
              </label>
              <div className="relative">
                <select
                  required
                  id="category"
                  name="articleCategory"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white cursor-pointer"
                >
                  <option value="">Select Category</option>
                  <option value="Artificial-Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud-Computing">Cloud Computing</option>
                  <option value="Internet-of-Things">Internet of Things</option>
                  <option value="Blockchain-Technology">
                    Blockchain Technology
                  </option>
                  <option value="Augmented-Reality">Augmented Reality</option>
                  <option value="Robotics">Robotics</option>
                  <option value="Software-Development">
                    Software Development
                  </option>
                  <option value="Quantum-Computing">Quantum Computing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-300">
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

            <div className="mb-5">
              <label htmlFor="tags" className="block font-medium mb-2">
                Tags
              </label>
              <div className="lg:flex mb-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                  placeholder="Add tag..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition duration-200 flex items-center gap-1 cursor-pointer lg:ml-4 mt-4"
                >
                  <IoMdAdd />
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:text-white"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
              Actions
            </h2>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 font-medium cursor-pointer"
              >
                {isLoading ? "⏳ Publishing..." : "Publish Article"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostArticleForm;
