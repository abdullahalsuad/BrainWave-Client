import StatsCards from "../../components/my-articles/StatsCards";
import NoArticlesFound from "../../components/my-articles/NoArticlesFound";
import SingleArticlesCard from "../../components/my-articles/SingleArticlesCard";
import MyArticlesHeader from "../../components/my-articles/MyArticlesHeader";
import { use } from "react";
import { ArticleContext } from "../../context/ArticlesProvider";
import ArticleCardSkeleton from "../../components/loading/ArticleCardSkeleton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyArticlesPage = () => {
  const { myArticles, loading, setAllArticles, setMyArticles } =
    use(ArticleContext);
  const axiosSecure = useAxiosSecure();

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
  const handleEdit = async (id) => {
    console.log(id);
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
    </div>
  );
};

export default MyArticlesPage;
