import {T_LOGIN_ROUTE_PARAMS} from '../../screens/auth/login/login.types';
import {T_ONBOARDING_ROUTE_PARAMS} from '../../screens/auth/onboarding/onboarding.types';
import {T_WELCOME_ROUTE_PARAMS} from '../../screens/auth/welcome/welcome.types';

export type AuthStackParamList = {
  OnboardingScreen: T_ONBOARDING_ROUTE_PARAMS;
  WelcomeScreen: T_WELCOME_ROUTE_PARAMS;
  LoginScreen: T_LOGIN_ROUTE_PARAMS;
};
