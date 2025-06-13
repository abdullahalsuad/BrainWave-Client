import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";
import CommentSection from "../../components/articles-details/CommentSection";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const [loading, setLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState();
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

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
        <p>loading..</p>
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-60">
            <div className="transition-colors duration-500 mb-10">
              {/* Main Content */}
              <div className=" px-4 py-8 bg-white dark:bg-gray-900 rounded-md">
                {/* Article Header */}
                <div className="mb-8">
                  {/* Article Image */}
                  <div className="w-full h-96 flex justify-center items-center overflow-hidden rounded-lg mb-4">
                    <img
                      src={singleArticle.articleThumbnail}
                      alt={singleArticle.displayName}
                      className="min-w-full min-h-full object-cover"
                    />
                  </div>

                  {/* Article Meta */}
                  <div className="my-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 lg:flex-nowrap">
                      {singleArticle?.articleTags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-teal-700 text-white px-2 py-1 rounded font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Article Title */}
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {singleArticle.articleTitle}
                  </h1>

                  {/* Author and Date */}
                  <div className="lg:flex md:flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={singleArticle.profilePhotoURL}
                        alt={singleArticle.displayName}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{singleArticle.displayName}</span>
                    </div>
                    <span>•</span>
                    <span>{formatDate(singleArticle.createdAt)}</span>
                    <span>•</span>
                    <span>{singleArticle.articleLike} likes</span>
                    <span>•</span>
                    <span>24 comments</span>

                    {/* 👍 Like Button (added) */}
                    <button className="ml-4 flex items-center gap-2 px-3 py-1 rounded-full border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                       2 5.42 4.42 3 7.5 3c1.74 0 
                       3.41 0.81 4.5 2.09C13.09 3.81 
                       14.76 3 16.5 3 19.58 3 22 5.42 
                       22 8.5c0 3.78-3.4 6.86-8.55 
                       11.54L12 21.35z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Like</span>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <article className="prose prose-sm md:prose lg:prose-lg max-w-none text-gray-700 dark:text-gray-300">
                  {singleArticle.articleContent}
                </article>
              </div>
            </div>

            {/* Comments Section */}
            <CommentSection />

            {/* Related Articles */}
          </div>
        </>
      )}
    </>
  );
};

export default ArticleDetails;
