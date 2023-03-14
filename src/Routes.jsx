import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import UserLayout from "./Layouts/User";
import Aboutus from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import BookingPage from "./pages/BookingPage";
import CustomerSignup from "./pages/CustomerSignup";
import Enquiries from "./pages/Enquiries";
import Homepage from "./pages/Home";
import LoginPage from "./pages/Login";
import LoginOrSignUp from "./pages/LoginOrSignUp";
import Partners from "./pages/Partners";
import Payment from "./pages/Payment";
import PromptPage from "./pages/PromptPage";
import Receipt from "./pages/Receipt";
import UserDashboard from "./pages/UserDashboard";
import VendorSignup from "./pages/VendorSIgnUp";

// jsdoc
/**
  * @returns {JSX.Element}
 all routes are defined here
  */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/loginorsignup" element={<LoginOrSignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/receipt" element={<Receipt />} />
      <Route exact path="/customer/signup" element={<CustomerSignup />} />
      <Route exact path="/vendor/signup" element={<VendorSignup />} />
      <Route exact path="/prompt" element={<PromptPage />} />
      <Route exact path="/booking" element={<BookingPage />} />
      <Route exact path="/blog" element={<BlogPage />} />
      <Route exact path="/enquiries" element={<Enquiries />} />
      <Route exact path="/partners" element={<Partners />} />
      <Route
        path="/user/dashboard"
        element={
          <UserLayout>
            <UserDashboard />
          </UserLayout>
        }
      />
    </Switch>
  );
};

export default Routes;
