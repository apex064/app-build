import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/authStack/auth.stack.types';
import React from 'react';

export type T_ONBOARDING = NativeStackScreenProps<
  AuthStackParamList,
  'OnboardingScreen'
>;
export type T_ONBOARDING_ROUTE_PARAMS = undefined;

export type T_ONBOARDING_ITEM = {
  key: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
};
