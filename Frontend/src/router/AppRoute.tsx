import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models/Routes";
import Layout from "../components/Layout/Layout";
import AuthGuard from "./guards/AuthGuard";
import { ToastContainer } from "react-toastify";

const Spinner = lazy(() => import("../components/Spinner/Spinner"));
const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const LogIn = lazy(() => import("../pages/LogIn/LogIn"));
const SignUpClient = lazy(() => import("../pages/SignUp/SignUpClient"));
const SignUpPro = lazy(() => import("../pages/SignUp/SignUpPro"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Provider = lazy(() => import("../components/OnBoarding/Provider"));
const Client = lazy(() => import("../components/OnBoarding/Client"));
const Professionals = lazy(() => import("../pages/Professionals/Professionals"));
const ProfessionalDetail = lazy(() => import("../pages/ProfessionalDetail/ProfessionalDetail"));

export default function AppRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route element={<AuthGuard privateValidation={"must-logIn"} />}>
              <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
            </Route>
            <Route element={<AuthGuard privateValidation={"must-not-logIn"} />}>
              <Route path={PublicRoutes.LOGIN} element={<LogIn />} />
              <Route path={PublicRoutes.SIGNUPCLIENT} element={<SignUpClient />} />
              <Route path={PublicRoutes.SIGNUPPRO} element={<SignUpPro />} />
              <Route path={PublicRoutes.ONBOARDINGCLIENT} element={<Client />} />
              <Route path={PublicRoutes.ONBOARDINGPROVIDER} element={<Provider />} />
              <Route path={PublicRoutes.PROFESSIONALS} element={<Professionals />} />
              <Route path={PublicRoutes.PROFESSIONALDETAIL} element={<ProfessionalDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </Suspense>
  );
}
