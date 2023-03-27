import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../../app/store";
import { PublicRoutes } from "../../models/Routes";

interface Props {
  privateValidation: string;
}

export const AuthGuard = ({ privateValidation }: Props) => {
  const token = useSelector((store: AppStore) => store.auth.token);

  if (token && privateValidation === "must-logIn") return <Outlet />;

  if (!token && privateValidation === "must-not-logIn") return <Outlet />;

  if (!token) return <Navigate replace to={PublicRoutes.HOME} />;

  return <Navigate replace to={PublicRoutes.HOME} />;
};

export default AuthGuard;
