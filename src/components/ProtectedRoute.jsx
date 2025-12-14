import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // if user is not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // otherwise allow the page to load
  return children;
}
