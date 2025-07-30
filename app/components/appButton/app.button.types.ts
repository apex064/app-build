import React from 'react';
import {DimensionValue, GestureResponderEvent} from 'react-native';

export type T_APP_BUTTON = {
  width?: DimensionValue;
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};
