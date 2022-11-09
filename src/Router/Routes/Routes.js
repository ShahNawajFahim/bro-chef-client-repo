import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ShowReview from "../../Pages/Home/Services/Review/ShowReview/ShowReview";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <ShowReview></ShowReview>,
                loader: () => fetch(`http://localhost:5000/reviews`)
            }
        ]
    }

])

export default router;