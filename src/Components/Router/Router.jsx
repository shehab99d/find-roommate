import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Listing from "../Listing/Listing";
import AddListing from "../AddListing/AddListing";
import BrowseListing from "../BrowseListing/BrowseListing";
import AddToFindRoommate from "../AddToFindRoommate/AddToFindRoommate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'listing',
                element: <Listing></Listing>
            },
            {
                path: 'add-listing',
                element: <AddListing></AddListing>
            },
            {
                path: 'browse-listing',
                element: <BrowseListing></BrowseListing>
            },
            {
                path:'Add-To-Find-Roommate',
                element: <AddToFindRoommate></AddToFindRoommate>
            }
        ]
    },

]);
export default router