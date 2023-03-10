import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/AddProduct/MyProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
                path: '/category/:id',
                element: <PrivetRoute><Category></Category></PrivetRoute>,
                loader: ({ params }) => fetch(`https://used-furniture-server-site.vercel.app/category/${params.id}`)
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allreporteditem',
                element: <ReportedItem></ReportedItem>
            }
        ]
    }
])

export default router;