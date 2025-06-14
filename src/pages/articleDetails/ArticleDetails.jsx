import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

import ArticleDetailsCard from "../../components/articles-details/ArticleDetailsCard";
import ArticleDetailSkeleton from "../../components/loading/ArticleDetailSkeleton";

const ArticleDetails = () => {
  const [loading, setLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState();

  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // date formate
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // fetch single article
  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const response = await axiosSecure.get(`/articles/${id}`);
        const articleData = await response.data;
        setSingleArticle(articleData);
        setLoading(false);
      } catch (err) {
        console.log("failed to load article", err);
      }
    };
    fetchSingleArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="mt-30 mb-10 w-11/12 mx-auto ">
        <Link to={"/all-articles"}>
          <button className="text-gray-500 dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-4 cursor-pointer">
            <FaLongArrowAltLeft size={20} />
            Back to Articles
          </button>
        </Link>
      </div>

      {/* Header */}
      {loading ? (
        <ArticleDetailSkeleton />
      ) : (
        <>
          <ArticleDetailsCard
            formatDate={formatDate}
            singleArticle={singleArticle}
            setSingleArticle={setSingleArticle}
          />
        </>
      )}
    </>
  );
};

export default ArticleDetails;
