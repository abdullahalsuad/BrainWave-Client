import { use, useEffect, useState } from "react";

import PostArticleForm from "../../components/postAddArticle/PostArticleForm";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ArticleContext } from "../../context/ArticlesProvider";

const PostArticlePage = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { user } = use(AuthContext);
  const { setAllArticles } = use(ArticleContext);

  const displayName = user?.displayName;
  const creatorEmail = user?.email;
  const profilePhotoURL = user?.photoURL;

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // add tag
  const handleAddTag = () => {
    if (tags.includes(newTag.trim())) {
      toast.warning("Already Added");
    }

    if (newTag === "") {
      toast.warning("Empty Tag");
    }

    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // remove tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const articleData = {
      ...formValues,
      profilePhotoURL: profilePhotoURL,
      articleTags: tags,
    };

    // send to backend
    try {
      const response = await axiosSecure.post("articles", articleData);

      if (!response.data._id) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      if (response.status === 201) {
        toast.success("Article added successfully!");
        // UI update
        e.target.reset();
        setAllArticles((prev) => [...prev, response.data]);
        setTags([]);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log("Error from sending data to the server", err);
    }
  };

  return (
    <div className="lg:w-10/12 mx-auto p-6 mt-30 mb-70">
      <h1 className="text-2xl font-bold mb-1">Create New Article</h1>
      <p className="text-gray-600 mb-8 dark:text-gray-400">
        Share your knowledge with the community
      </p>

      {/* Main Content Grid */}
      <form onSubmit={handleSubmit}>
        <PostArticleForm
          handleAddTag={handleAddTag}
          handleRemoveTag={handleRemoveTag}
          tags={tags}
          newTag={newTag}
          setNewTag={setNewTag}
          displayName={displayName}
          creatorEmail={creatorEmail}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default PostArticlePage;
