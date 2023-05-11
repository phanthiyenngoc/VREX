import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/Error";
import Loader from "../components/common/Loader";

const HomeLayout = lazy(() => import("../layouts/HomeLayout.jsx"));
const HomePage = lazy(() => import("../pages/home/index.jsx"));
const NewsPage = lazy(() => import("../pages/news/index.jsx"));
const NewsDetail = lazy(() => import("../pages/news/detail.jsx"));
const NewsCategory = lazy(() => import("../pages/news/news-category.jsx"));

const ListingPage = lazy(() => import("../pages/listing/index.jsx"));
const UserProfileLayout = lazy(() =>
  import("../layouts/UserProfileLayout.jsx")
);
const UserInfo = lazy(() => import("../pages/user-info/index.jsx"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Loader>
              <HomePage />
            </Loader>
          ),
        },
        {
          path: "/tin-tuc",
          element: (
            <Loader>
              <NewsPage />
            </Loader>
          ),
        },
        {
          path: "/tin-tuc/:newsId",
          element: (
            <Loader>
              <NewsDetail />
            </Loader>
          ),
        },
        {
          path: "/danh-muc-tin-tuc/:newsCategoryId",
          element: (
            <Loader>
              <NewsCategory />
            </Loader>
          ),
        },
        {
          path: "/listing/:listingId",
          element: (
            <Loader>
              <ListingPage />
            </Loader>
          ),
        },
      ],
    },
    {
      path: "/thong-tin-ca-nhan",
      element: <UserProfileLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/thong-tin-ca-nhan",
          element: <UserInfo />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default router;
