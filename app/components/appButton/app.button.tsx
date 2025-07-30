import {View, Text} from 'react-native';
import React from 'react';
import {T_APP_BUTTON} from './app.button.types';
import ButtonWrapper from '../buttonWrapper/button.wrapper';
import {styles} from './app.button.styles';
import {appColors} from '../../theme';

const AppButton: React.FC<T_APP_BUTTON> = ({
  title,
  disabled,
  loading,
  onPress,
  width,
  icon,
}) => {
  return (
    <ButtonWrapper
      onPress={onPress}
      props={{
        disabled: disabled,
        style: [
          styles.mainContainer,
          {
            width: width,
            backgroundColor: appColors.primary[500],
          },
        ],
      }}>
      <Text style={[styles.title, {color: appColors.common.white}]}>
        {title}
      </Text>
      {icon && icon}
    </ButtonWrapper>
  );
};

export default AppButton;
