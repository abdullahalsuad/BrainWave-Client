import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import LoginPage from "../pages/login/LoginPage";
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
import AuthPage from "../pages/AuthPage";

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
      // {
      //   path: "/login",
      //   element: (
      //     <AuthLayout>
      //       <LoginPage />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/register",
      //   element: (
      //     <AuthLayout>
      //       <RegisterPage />
      //     </AuthLayout>
      //   ),
      // },
    ],
  },

  {
    path: "/authpage",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/authpage/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
