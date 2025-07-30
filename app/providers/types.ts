import React from 'react';
import {ColorSchemeName} from 'react-native';

export type T_CHILDREN = {
  children: React.ReactNode;
};
export type T_THEME_CONTEXT = {
  theme: ColorSchemeName;
  toggleTheme: () => void;
};
