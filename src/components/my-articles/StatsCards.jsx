import { FaRegComments } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlLike } from "react-icons/sl";

const StatsCards = () => {
  return (
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
  );
};

export default StatsCards;
