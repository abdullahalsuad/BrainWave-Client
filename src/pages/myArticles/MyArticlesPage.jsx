import StatsCards from "../../components/my-articles/StatsCards";
import NoArticlesFound from "../../components/my-articles/NoArticlesFound";
import SingleArticlesCard from "../../components/my-articles/SingleArticlesCard";
import MyArticlesHeader from "../../components/my-articles/MyArticlesHeader";
import { use, useState } from "react";
import { ArticleContext } from "../../context/ArticlesProvider";
import ArticleCardSkeleton from "../../components/loading/ArticleCardSkeleton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import EditArticleModal from "../../components/my-articles/EditArticleModal";

const MyArticlesPage = () => {
  const [editingArticle, setEditingArticle] = useState(null);
  const axiosSecure = useAxiosSecure();

  const { myArticles, loading, setAllArticles, setMyArticles } =
    use(ArticleContext);

  // handling delete articles
  const handleRemove = (id) => {
    // alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/my-articles/${id}`);

          if (response.statusText === "OK") {
            toast.success("Article deleted successfully");

            // ui update
            setMyArticles((prev) =>
              prev.filter((article) => article._id !== id)
            );
            setAllArticles((prev) =>
              prev.filter((article) => article._id !== id)
            );
          }
        } catch (err) {
          console.log("Error from deleting article", err);
        }
      }
    });
  };

  // handling edit articles
  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleSave = async (id, e, tags) => {
    e.preventDefault();

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData);
    updatedData.articleTags = tags;

    try {
      const response = await axiosSecure.put(`/my-articles/${id}`, updatedData);
      const updatedArticle = response.data;

      if (response.status === 201) {
        toast.success("Article updated successfully");

        //ui update
        setMyArticles((prev) =>
          prev.map((a) => (a._id === id ? updatedArticle : a))
        );

        setAllArticles((prev) =>
          prev.map((a) => (a._id === id ? updatedArticle : a))
        );
        setEditingArticle(null);
      }
    } catch (err) {
      console.error("Error updating article", err);
      toast.error("Failed to update article");
    }
  };

  return (
    <div className="lg:w-8/12 mx-auto px-4 py-8 mt-30 mb-70 dark:text-gray-100">
      {/* Page Header */}
      <MyArticlesHeader />

      {/* Stats Cards */}
      <StatsCards />

      {loading ? (
        <div className="space-y-6">
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </div>
      ) : myArticles.length > 0 ? (
        <div className="space-y-6">
          {myArticles.map((article) => (
            // single card
            <SingleArticlesCard
              key={article._id}
              article={article}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      ) : (
        <NoArticlesFound />
      )}

      {/* update modal */}
      {editingArticle && (
        <EditArticleModal
          article={editingArticle}
          onClose={() => setEditingArticle(null)}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default MyArticlesPage;
