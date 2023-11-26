import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/Error/ErrorPage";

import Login from "./components/Login/Login";

import Register from "./components/Register/Register";

import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },

    {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
