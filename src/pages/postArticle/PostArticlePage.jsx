import { useState } from "react";

import PostArticleForm from "../../components/postAddArticle/PostArticleForm";

const PostArticlePage = () => {
  const [tags, setTags] = useState(["hello", "tech"]);
  const [newTag, setNewTag] = useState("");

  // add tag
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // remove tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-10/12 mx-auto p-6 mb-60 mt-20">
      <h1 className="text-2xl font-bold mb-1">Create New Article</h1>
      <p className="text-gray-600 mb-8 dark:text-gray-400">
        Share your knowledge with the community
      </p>

      {/* Main Content Grid */}
      <PostArticleForm
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        tags={tags}
        newTag={newTag}
        setNewTag={setNewTag}
      />
    </div>
  );
};

export default PostArticlePage;
