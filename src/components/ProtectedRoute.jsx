import { Navigate } from "react-router-dom";
import useUserStore from "../zustand/basesStore";

const ProtectedRoute = ({ children }) => {
  // console.log(useUserStore.getState().user);
  if (!useUserStore.getState().user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
