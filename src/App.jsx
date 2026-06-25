import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Forget from "./components/Forget";
import ResetPassword from "./components/ResetPassword";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/clientdashboard/Dashboard";
import BrowseDonations from "./pages/clientdashboard/BrowseDonations";
import DonationDetails from "./pages/clientdashboard/DonationDetails";
import RequestFood from "./pages/clientdashboard/RequestFood";
import MyRequests from "./pages/clientdashboard/MyRequests";
import DonateFood from "./pages/clientdashboard/Donatefood";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forget />} />
        <Route
          path="/reset-password/:uid/:token"
          element={<ResetPassword />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Browsedonation"
          element={
            <ProtectedRoute>
              <BrowseDonations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myrequest"
          element={
            <ProtectedRoute>
              <MyRequests />
            </ProtectedRoute>
          }
        />

        <Route
          path="/request-food/:id"
          element={
            <ProtectedRoute>
              <RequestFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donatefood"
          element={
            <ProtectedRoute>
              <DonateFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donation/:id"
          element={
            <ProtectedRoute>
              <DonationDetails />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}