import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

const SearchBarAndFilters = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  selectedSort,
  setSelectedSort,
}) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Artificial Intelligence", value: "Artificial-Intelligence" },
    { label: "Cybersecurity", value: "Cybersecurity" },
    { label: "Cloud Computing", value: "Cloud-Computing" },
    { label: "Internet of Things", value: "Internet-of-Things" },
    { label: "Blockchain Technology", value: "Blockchain-Technology" },
    { label: "Augmented Reality", value: "Augmented-Reality" },
    { label: "Robotics", value: "Robotics" },
    { label: "Software Development", value: "Software-Development" },
    { label: "Quantum Computing", value: "Quantum-Computing" },
  ];

  const sortOptions = [
    { label: "Newest First", value: "newest" },
    { label: "Oldest First", value: "oldest" },
  ];

  return (
    <div className="lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8 space-y-4">
        {/* Search Input */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-4 w-full">
          {/* Category Dropdown */}
          <div className="relative w-full md:w-1/2">
            <button
              type="button"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600 bg-white dark:bg-gray-700 text-left cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <FaCheckSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>
                  {categories.find((c) => c.value === selectedCategory)?.label}
                </span>
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isCategoryDropdownOpen ? "rotate-180" : ""
                }`}
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
                className="absolute mt-2 py-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md z-10"
              >
                {categories.map((category) => (
                  <div
                    key={category.value}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setIsCategoryDropdownOpen(false);
                    }}
                  >
                    <FaCheckSquare
                      className={`h-5 w-5 mr-2 ${
                        selectedCategory === category.value
                          ? "text-teal-500"
                          : "text-transparent"
                      }`}
                    />
                    <span>{category.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Custom Sort Dropdown (same style as category) */}
          <div className="relative w-full md:w-1/2">
            <button
              type="button"
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-600 bg-white dark:bg-gray-700 text-left cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <FaCheckSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>
                  {sortOptions.find((opt) => opt.value === selectedSort)?.label}
                </span>
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isSortDropdownOpen ? "rotate-180" : ""
                }`}
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

            {isSortDropdownOpen && (
              <div
                id="sort-dropdown"
                className="absolute mt-2 py-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md z-10"
              >
                {sortOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedSort(option.value);
                      setIsSortDropdownOpen(false);
                    }}
                  >
                    <FaCheckSquare
                      className={`h-5 w-5 mr-2 ${
                        selectedSort === option.value
                          ? "text-teal-500"
                          : "text-transparent"
                      }`}
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarAndFilters;
