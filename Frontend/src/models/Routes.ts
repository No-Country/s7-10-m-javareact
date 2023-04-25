export enum PublicRoutes {
  HOME = "/",
  LOGIN = "login",
  SIGNUPCLIENT = "signup-client",
  SIGNUPPRO = "signup-pro",
  ONBOARDINGPROVIDER = "onboarding/provider",
  ONBOARDINGCLIENT = "onboarding/client",
  PROFESSIONALS = "professionals/:id?",
  PROFESSIONALDETAIL = "professional/detail/:id?",
  PROFESSIONALDATESCHEDULE = "/professional/date/schedule",
  PROFESSIONALHOME = "/professional/home",
  PROFESSIONALSCHEDULE = "/professional/schedule",
  REQUEST = "/request",
  PROFILE = "profile",
  SETTINGS = "settings",
  SCHEDULE = "schedule"
}

export enum PrivateRoutes {
  PROFILE = ""
}
