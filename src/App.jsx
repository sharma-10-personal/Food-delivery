import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
//import  from "./components/Groceries";

const Groceries = lazy(() => import("./components/Groceries"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1> this is fallback loading ...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
