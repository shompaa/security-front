import { Outlet, Navigate } from "react-router-dom";
import { Layout } from "../components/shared/Layout/layout";
import { useUser } from "../store";
import { AUTH_TYPES } from "../store/auth/utils/enum";

export const ProtectedRoute = ({ children }) => {
  const { status } = useUser();

  if (status === AUTH_TYPES.GUEST) {
    return <Navigate to="/login" />;
  }
  return children ? (
    children
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};
