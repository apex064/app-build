import {useContext} from 'react';
import {ThemeContext} from '../providers/theme.provider';

const useAppTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return {
    theme,
    toggleTheme,
  };
};

export default useAppTheme;
