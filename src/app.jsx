import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Error from "./components/Error";
import React from "react";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import About from "./components/About";
import Terms from "./components/Terms";
import Refund from "./components/Refund";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import Chat from "./components/Chat";
import Shipping from "./components/Shipping"

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/refund",
        element: <Refund />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path:"/shipping",
        element:<Shipping/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/chat/:targetUserId",
        element:<Chat/>
      }
    ],
  },
]);

const root = createRoot(document.querySelector(".root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={reactRouter} />
  </Provider>
);
