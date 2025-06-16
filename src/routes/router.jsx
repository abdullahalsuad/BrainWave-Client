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
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../components/authentication/AuthLayout";
import CategoriesArticlesPage from "../pages/categories-articles/CategoriesArticlesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

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
        path: "/category/:slug",
        element: <CategoriesArticlesPage />,
      },
      {
        path: "/all-articles/:id",
        element: (
          <PrivateRoute>
            <ArticleDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-articles",
        element: (
          <PrivateRoute>
            <MyArticlesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-article",
        element: (
          <PrivateRoute>
            <PostArticlePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

export default router;
