import {View, Text, useColorScheme, ColorSchemeName} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import {T_CHILDREN, T_THEME_CONTEXT} from './types';

export const ThemeContext = createContext<T_THEME_CONTEXT>({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<T_CHILDREN> = ({children}) => {
  const scheme = useColorScheme();
  const [appTheme, setAppTheme] = useState<ColorSchemeName>('light');

  useEffect(() => {
    setAppTheme(scheme);
  }, [scheme]);

  const toggleTheme = () => {
    setAppTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: appTheme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
