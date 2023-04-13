export enum PublicRoutes {
  HOME = "/",
  LOGIN = "login",
  SIGNUPCLIENT = "signup-client",
  SIGNUPPRO = "signup-pro",
  ONBOARDINGPROVIDER = "onboarding/provider",
  ONBOARDINGCLIENT = "onboarding/client",
  PROFESSIONALS = "professionals/:id?",
  PROFESSIONALDETAIL = "professional/detail/:id?"
}

export enum PrivateRoutes {
  PROFILE = "profile"
}
