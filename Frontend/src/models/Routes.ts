export enum PublicRoutes {
  HOME = "/",
  LOGIN = "login",
  SIGNUPCLIENT = "signup-client",
  SIGNUPPRO = "signup-pro",
  ONBOARDINGPROVIDER = "onboarding/provider",
  ONBOARDINGCLIENT = "onboarding/client",
  PROFESSIONALS = "professionals/:id?",
  PROFESSIONALDETAIL = "professional/detail/:id?",
  PROFESSIONALHOME = "/professional/home"
}

export enum PrivateRoutes {
  PROFILE = "profile"
}
