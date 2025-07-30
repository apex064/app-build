import {View, Text} from 'react-native';
import React from 'react';
import {T_LOGIN} from './login.types';
import {AppButton, ScreenWrapper} from '../../../components';
import {globalStyles} from '../../../config/globalStyles';
import {Logo} from '../../../assets/images';
import {appColors, horizontalScale, verticalScale} from '../../../theme';
import {styles} from './login.styles';
import useAppTheme from '../../../hooks/useAppTheme';
import {ArrowLeft} from '../../../assets/icons';

const Login: React.FC<T_LOGIN> = () => {
  const {theme} = useAppTheme();
  return (
    <ScreenWrapper>
      <View
        style={[
          globalStyles.flexContainer,
          globalStyles.screenVPadding32,
          globalStyles.screenHPadding32,
          globalStyles.rowGap24,
        ]}>
        <Logo width={horizontalScale(80)} height={verticalScale(80)} />
        <View style={[globalStyles.rowGap8]}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  theme == 'light'
                    ? appColors.neutral[900]
                    : appColors.common.white,
              },
            ]}>{`Get Started`}</Text>
          <Text
            style={[
              styles.info,
              {
                color:
                  theme == 'light'
                    ? appColors.neutral[900]
                    : appColors.common.white,
              },
            ]}>{`Please enter your number to continue`}</Text>
        </View>
        <AppButton
          title="Continue"
          icon={<ArrowLeft style={{transform: [{rotate: '360deg'}]}} />}
        />
        <View style={styles.orSeperator}>
          <View style={styles.separatorLine} />
          <Text style={styles.orText}>{`or`}</Text>
          <View style={styles.separatorLine} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
