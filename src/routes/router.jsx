import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/login/LoginPage";
import AllArticlesPage from "../pages/allArticles/AllArticlesPage";
import PostArticlePage from "../pages/postArticle/PostArticlePage";
import MyArticlesPage from "../pages/myArticles/MyArticlesPage";
import AboutUsPage from "../pages/about/AboutUsPage";

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
    ],
  },
]);

export default router;
