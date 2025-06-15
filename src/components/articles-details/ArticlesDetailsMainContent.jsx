import { FaHeart, FaRegHeart } from "react-icons/fa";
import { formatDate } from "../../utils/dateformat";

const ArticlesDetailsMainContent = ({
  singleArticle,

  handleLike,
  isLiked,
}) => {
  return (
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

        <div className="my-6">
          <span className="bg-sky-200 text-black px-4 py-2 rounded font-semibold">
            Category :- {singleArticle.articleCategory}
          </span>
        </div>

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
          <span>{singleArticle.totalArticleLike} likes</span>
          <span>•</span>
          <span>{singleArticle.totalArticleComment} comments</span>

          {/* 👍 Like Button (added) */}
          <button
            onClick={handleLike}
            className="ml-4 flex items-center gap-2 px-3 py-1 rounded-full border border-pink-700 text-pink-700  transition-colors duration-300 cursor-pointer"
          >
            {isLiked ? (
              <>
                <FaHeart />
                <span className="text-sm font-medium">Liked</span>
              </>
            ) : (
              <>
                {" "}
                <FaRegHeart /> <span className="text-sm font-medium">Like</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-sm md:prose lg:prose-lg max-w-none text-gray-700 dark:text-gray-300 text-justify p-2">
        {singleArticle.articleContent}
      </article>
    </div>
  );
};

export default ArticlesDetailsMainContent;
