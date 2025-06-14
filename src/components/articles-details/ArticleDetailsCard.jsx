import { use, useEffect, useState } from "react";
import ArticlesDetailsMainContent from "./ArticlesDetailsMainContent";
import CommentSection from "./CommentSection";
import { ArticleContext } from "../../context/ArticlesProvider";
import { AuthContext } from "../../context/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ArticleDetailsCard = ({
  singleArticle,
  setSingleArticle,
  formatDate,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { setAllArticles } = use(ArticleContext);
  const { user } = use(AuthContext);

  // checking like
  useEffect(() => {
    if (singleArticle && user) {
      const userHasLiked = singleArticle.articleLikes.some(
        (like) => like.userEmail === user.email
      );
      setIsLiked(userHasLiked);
    }
  }, [singleArticle, user]);

  // handling like
  const handleLike = async () => {
    try {
      const response = await axiosSecure.patch(
        `/articles/like/${singleArticle._id}`,
        {
          userEmail: user.email,
        }
      );

      const updatedArticle = response.data;

      // Update UI
      setAllArticles((prev) =>
        prev.map((article) =>
          article._id === updatedArticle._id ? updatedArticle : article
        )
      );
      setSingleArticle(updatedArticle);
      setIsLiked(
        updatedArticle.articleLikes.some(
          (like) => like.userEmail === user.email
        )
      );
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-60">
      <div className="transition-colors duration-500 mb-10">
        {/* Main Content */}
        <ArticlesDetailsMainContent
          singleArticle={singleArticle}
          formatDate={formatDate}
          handleLike={handleLike}
          isLiked={isLiked}
        />
      </div>

      {/* Comments Section */}
      <CommentSection singleArticle={singleArticle} user={user} />

      {/* Related Articles */}
    </div>
  );
};

export default ArticleDetailsCard;
