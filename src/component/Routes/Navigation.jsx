// import React from 'react'
import Register from './../public/Register';
import Login from '../public/Login';
import Verify_otp from './../public/Verify_otp';
import Home from './../public/Home';
import SellerOrders from './../private/Seller/SellerOrders';
import SellerDashboard from '../private/Seller/SellerDashboard';
import Cart from '../private/Customer/Cart';
import Account from '../private/Common/Account';
import EditProfile from './../private/Common/EditProfile';
import Search from './../public/Search';
import Order from './../private/Customer/Order';
import WishList from '../private/Customer/WishList';

const navs = [
    // ----------------------- BEFORE AUTH --------------------------- 
  {
    path: "/seller/register",
    element: <Register></Register>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/customer/register",
    element: <Register/>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/login",
    element: <Login />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/verify-otp",
    element: <Verify_otp />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
    // -------------------------- BEFORE AND AFTER AUTH ----------------
  {
    path: "/",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // ---------------------- COMMON AND AFTER AUTH ----------------------
  {
    path: "/account",
    element: <Account />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // --------------------------- CUSTOMER --------------------------
  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/orders",
    element: <Order />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/wishlist",
    element: <WishList />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  // ------------------------- SELLER ----------------------------
  {
    path: "/seller-dashboard",
    element: <SellerDashboard />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/seller-orders",
    element: <SellerOrders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
];

export default navs;
