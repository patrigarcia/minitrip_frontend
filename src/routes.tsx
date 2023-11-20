import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/Error/ErrorPage";
// // import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Login from "./components/Login/Login";

import Register from "./components/Register/Register";

const router = createBrowserRouter([
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
    // {
    //     element: <PrivateRoutes />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: "profile",
    //             element: <Profile />,
    //         },
    //     ],
    // },
]);

export default router;
