import React, { useState } from "react";
import { FaCheckSquare, FaSort } from "react-icons/fa";

const SearchBarAndFilters = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Technology", value: "technology" },
    { label: "Science", value: "science" },
    { label: "Business", value: "business" },
    { label: "Environment", value: "environment" },
    { label: "Psychology", value: "psychology" },
    { label: "Programming", value: "programming" },
    { label: "Web Dev", value: "web-dev" },
    { label: "Data Science", value: "data-science" },
    { label: "Academic", value: "academic" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
        {/* Search Input */}
        <div className="w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
          />
        </div>

        {/* Filters */}
        <div className="ml-4 flex items-center space-x-4">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="flex items-center justify-between w-48 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
            >
              <span className="flex items-center space-x-2">
                <FaCheckSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>All Categories</span>
              </span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isCategoryDropdownOpen && (
              <div
                id="category-dropdown"
                className="absolute mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-md z-10"
              >
                {categories.map((category) => (
                  <div
                    key={category.value}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <FaCheckSquare
                      className={`h-5 w-5 mr-2 ${
                        category.label === "All Categories"
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                    />
                    <span>{category.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sorting Dropdown */}
          <div className="relative">
            <select className="w-48 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarAndFilters;
