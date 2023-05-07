import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import ErrorPage from "../pages/Error";

import Loading from "../components/common/Loading";
const HomeLayout = lazy(() => import("../layouts/HomeLayout.jsx"));
const HomePage = lazy(() => import("../pages/home/index.jsx"));
const NewsPage = lazy(() => import("../pages/news/index.jsx"));
const ListingPage = lazy(() => import("../pages/listing/index.jsx"));

const UserProfileLayout = lazy(() => import("../layouts/UserProfileLayout.jsx"));
const UserInfo = lazy(() => import("../pages/user-info/index.jsx"));

Loader.propTypes = {
  children: PropTypes.any,
};

function Loader(props) {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
}

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
