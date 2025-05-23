import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Listing from "../Listing/MyListings";

import BrowseListing from "../BrowseListing/BrowseListings";
import AddToFindRoommate from "../AddToFindRoommate/AddToFindRoommate";
import ListDetails from "../ListDetails/ListDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateListing from "../UpdateListing/UpdateListing";
import Cities from "../cities-details/Cities";
import BookNow from "../BookNow/BookNow";

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
                path: 'details/:id',
                element: <PrivateRoute>
                    <ListDetails></ListDetails>
                </PrivateRoute>
            },
            {
                path: 'browse-listing',
                element: <BrowseListing></BrowseListing>
            },
            {
                path: 'Add-To-Find-Roommate',
                element: <AddToFindRoommate></AddToFindRoommate>
            },
            {
                path: 'update-listing/:id',
                element: <UpdateListing></UpdateListing>
            },
            {
                path: 'listings/city/:id',
                loader: async ({ params }) => {
                    const res = await fetch('/Cities.json');
                    const cities = await res.json();
                    const city = cities.find(city => city.id === params.id);
                    return city;
                },
                element: <Cities />
            },
            {
                path: 'listing/city/:id',
                element: <BookNow></BookNow>
            }
        ]
    },

]);
export default router