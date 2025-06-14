import { FaComment } from "react-icons/fa";
import CommentForm from "./CommentForm";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CommentCard from "./CommentCard";

const CommentSection = ({
  singleArticle,
  user,
  setAllArticles,
  setSingleArticle,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const axiosSecure = useAxiosSecure();

  // handle comment
  const handleComment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    // getting logged in user info
    const userName = user.displayName;
    const userEmail = user.email;
    const userAvatar = user.photoURL;

    const newComment = {
      ...formValues,
      userName,
      userEmail,
      userAvatar,
    };

    // send to backed
    try {
      const response = await axiosSecure.patch(
        `/articles/comment/${singleArticle._id}`,
        newComment
      );
      const updatedArticle = response.data;

      if (response.status === 201) {
        e.target.reset();
        setIsLoading(false);

        // Update UI
        setAllArticles((prev) =>
          prev.map((article) =>
            article._id === updatedArticle._id ? updatedArticle : article
          )
        );
        setSingleArticle(updatedArticle);
      }
    } catch (err) {
      console.log("Failed to comment", err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center">
        <FaComment className="h-4 w-4 inline-block mr-2" />
        Comments ({singleArticle.articleComments.length})
      </h3>
      <form className="mb-4" onSubmit={handleComment}>
        <CommentForm isLoading={isLoading} />
      </form>
      {/* all comment */}
      {singleArticle.articleComments.length !== 0 ? (
        singleArticle.articleComments.map((comment) => (
          <CommentCard comment={comment} key={comment._id} />
        ))
      ) : (
        <p className="text-center text-xl my-4 font-medium">
          {" "}
          No echoes yet... drop your voice below 👆
        </p>
      )}
    </div>
  );
};

export default CommentSection;
