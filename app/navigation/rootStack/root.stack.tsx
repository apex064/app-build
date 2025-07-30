import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './root.stack.types';
import AuthStack from '../authStack/auth.stack';
import {NavigationContainer} from '@react-navigation/native';
import useAppTheme from '../../hooks/useAppTheme';
import {StatusBar} from 'react-native';
import {appColors} from '../../theme';
import RNSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const {theme} = useAppTheme();

  setTimeout(() => {
    RNSplash.hide({fade: true});
  }, 1500);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={
          theme === 'light' ? appColors.neutral[100] : appColors.neutral[900]
        }
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
