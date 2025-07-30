import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from './authStack/auth.stack.types';
import {T_WELCOME_ROUTE_PARAMS} from '../screens/auth/welcome/welcome.types';
import {T_LOGIN_ROUTE_PARAMS} from '../screens/auth/login/login.types';

export const gotoWelcomeFromOnboarding = (
  navigation: NativeStackNavigationProp<AuthStackParamList, 'OnboardingScreen'>,
  params?: T_WELCOME_ROUTE_PARAMS,
) => {
  navigation.reset({
    index: 0,
    routes: [{name: 'WelcomeScreen', params}],
  });
};

export const gotoLoginFromWelcome = (
  navigation: NativeStackNavigationProp<AuthStackParamList, 'WelcomeScreen'>,
  params?: T_LOGIN_ROUTE_PARAMS,
) => {
  navigation.reset({
    index: 0,
    routes: [{name: 'LoginScreen', params}],
  });
};
