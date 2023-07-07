import { Route, Routes } from "react-router-dom";
import { Home, Login, Logout, Register } from "../components";
import { ProtectedRoute } from "./protected-route";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<ProtectedRoute />} >
        <Route path="/inicio" element={<Home />} />
      </Route>
    </Routes>
  );
};

