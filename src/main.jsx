import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './components/Home/Home';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import App from "./App";
import Startup from "./HomeStartup/Startup";
import Wraper from "./HomeMain/Wraper";
import About from "./About/About";
import PortfolioDetails from "./Portfolio/PortfolioDetails/PortfolioDetails";
import OurTeam from "./OurTeam/OurTeam";
import FaqPage from "./FaqPage/FaqPage";
import BlogDetailsStanders from "./Blog/BlogDetailsStanders";
import PortfolioMain from "./Portfolio/PortfolioMain";
import ServiceMain from "./Services/ServiceMain";
import ContactMain from "./Contact/ContactMain";
import BlogStanderd from "./Blog/BlogStanderd";
import ServiceDetails from "./Services/ServiceDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Wraper></Wraper>,
      },
      {
        path: "/startup",
        element: <Startup></Startup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactMain></ContactMain>,
      },
      {
        path: "/portfolio",
        element: <PortfolioMain></PortfolioMain>,
      },
      {
        path: "/portfolioDetails",
        element: <PortfolioDetails></PortfolioDetails>,
      },
      {
        path: "/service",
        element: <ServiceMain></ServiceMain>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://infolio-port-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/blogs",
        element: <BlogStanderd />,
      },
      {
        path: "/blogsDetails/:id",
        element: <BlogDetailsStanders />,
      },
      {
        path: "/blogsDetails",
        element: <BlogDetailsStanders></BlogDetailsStanders>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
