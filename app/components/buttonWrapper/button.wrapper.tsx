import {TouchableOpacity} from 'react-native';
import React from 'react';
import {T_BUTTON_WRAPPER} from './button.wrapper.types';

const ButtonWrapper: React.FC<T_BUTTON_WRAPPER> = ({
  onPress,
  props,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;
