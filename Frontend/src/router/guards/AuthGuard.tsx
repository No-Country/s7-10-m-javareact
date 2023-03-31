import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { getToken } from "../../app/state/authSlice";
import { PublicRoutes } from "../../models/Routes";

interface Props {
  privateValidation: string;
}

export const AuthGuard = ({ privateValidation }: Props) => {
  const token = useAppSelector(getToken);

  if (token && privateValidation === "must-logIn") return <Outlet />;

  if (!token && privateValidation === "must-not-logIn") return <Outlet />;

  if (!token) return <Navigate replace to={PublicRoutes.HOME} />;

  return <Navigate replace to={PublicRoutes.HOME} />;
};

export default AuthGuard;
