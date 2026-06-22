import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget from "./components/Forget";

import Dashboard from "./pages/clientdashboard/Dashboard";
import BrowseDonations from "./pages/clientdashboard/BrowseDonations";
import DonationDetails from "./pages/clientdashboard/Donationdetails";
import MyRequests from "./pages/clientdashboard/MyRequests";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<Forget />} />

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
        path="/donation/:id"
        element={
          <ProtectedRoute>
            <DonationDetails />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}