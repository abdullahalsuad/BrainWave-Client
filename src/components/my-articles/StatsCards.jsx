import { use, useEffect, useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlLike } from "react-icons/sl";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthProvider";

const StatsCards = () => {
  const [totalComments, setTotalComments] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);

  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  // load data

  useEffect(() => {
    if (user) {
      // fetching all comments
      const fetchTotalComments = async () => {
        try {
          const response = await axiosSecure.get(
            `my-articles/total-comments/${user.email}`
          );
          const comments = response.data;
          setTotalComments(comments);
        } catch (err) {
          console.log("failed to load", err);
        }
      };
      fetchTotalComments();

      // fetching all likes
      const fetchTotalLikes = async () => {
        try {
          const response = await axiosSecure.get(
            `my-articles/total-likes/${user.email}`
          );
          const likes = response.data;
          setTotalLikes(likes);
        } catch (err) {
          console.log("failed to load", err);
        }
      };
      fetchTotalLikes();

      // fetching all articles
      const fetchTotalArticles = async () => {
        try {
          const response = await axiosSecure.get(
            `my-articles/total-articles/${user.email}`
          );
          const articles = response.data;
          setTotalArticles(articles);
        } catch (err) {
          console.log("failed to load", err);
        }
      };
      fetchTotalArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {totalComments}
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
              {totalLikes}
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
              {totalArticles}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
