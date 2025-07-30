import React from 'react';
import {T_SCREEN_WRAPPER} from './screen.wrapper.types';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {styles} from './screen.wrapper.styles';
import useAppTheme from '../../hooks/useAppTheme';
import {appColors} from '../../theme';

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER> = ({children}) => {
  const insets = useSafeAreaInsets();
  const {theme} = useAppTheme();
  return (
    <SafeAreaProvider>
      <Animated.View
        entering={FadeInDown.duration(500)}
        style={[
          styles.mainContainer,
          {
            paddingTop: insets.top,
            backgroundColor:
              theme === 'light'
                ? appColors.neutral[100]
                : appColors.neutral[900],
          },
        ]}>
        {children}
      </Animated.View>
    </SafeAreaProvider>
  );
};

export default ScreenWrapper;
