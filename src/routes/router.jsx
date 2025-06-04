import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/login/LoginPage";
import AllArticlesPage from "../pages/allArticles/AllArticlesPage";
import PostArticlePage from "../pages/postArticle/PostArticlePage";
import MyArticlesPage from "../pages/myArticles/MyArticlesPage";
import AboutUsPage from "../pages/about/AboutUsPage";
import RegisterPage from "../pages/register/RegisterPage";
import ArticleDetails from "../pages/articleDetails/ArticleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-articles",
        element: <AllArticlesPage />,
      },
      {
        path: "/all-articles/:id",
        element: <ArticleDetails />,
      },
      {
        path: "/my-articles",
        element: <MyArticlesPage />,
      },
      {
        path: "/post-article",
        element: <PostArticlePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
