import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {T_WELCOME} from './welcome.types';
import {AppButton, ScreenWrapper} from '../../../components';
import {styles} from './welcome.styles';
import {globalStyles} from '../../../config/globalStyles';
import {
  appColors,
  horizontalScale,
  typography,
  verticalScale,
} from '../../../theme';
import useAppTheme from '../../../hooks/useAppTheme';
import {Logo} from '../../../assets/images';
import {getApppName} from '../../../config/constant';
import {gotoLoginFromWelcome} from '../../../navigation/service';

const Welcome: React.FC<T_WELCOME> = ({navigation}) => {
  const {theme} = useAppTheme();
  return (
    <ScreenWrapper>
      <Image
        source={require('../../../assets/images/welcomeBg.png')}
        resizeMode="cover"
        style={styles.welcomeBg}
      />
      <View style={[styles.mainContainer, globalStyles.flexContainer]} />
      <View
        style={[
          globalStyles.screenHPadding32,
          globalStyles.screenVPadding32,
          styles.bodyContainer,
          globalStyles.rowGap24,
          {
            backgroundColor:
              theme === 'light'
                ? appColors.neutral[50]
                : appColors.neutral[900],
          },
        ]}>
        <Logo width={horizontalScale(80)} height={verticalScale(80)} />
        <View style={globalStyles.rowGap8}>
          <Text
            style={[
              styles.heading,
              {
                color:
                  theme === 'light'
                    ? appColors.neutral[900]
                    : appColors.common.white,
              },
            ]}>{`Get Started`}</Text>
          <Text
            style={[
              styles.info,
              {
                color:
                  theme === 'light'
                    ? appColors.neutral[900]
                    : appColors.common.white,
              },
            ]}>
            {`Your `}{' '}
            {getApppName(
              typography.LIGHT.F_14.fontFamily,
              typography.LIGHT.F_14.fontSize,
              theme,
            )}{' '}
            {` awaits: let's begin!`}
          </Text>
        </View>
        <AppButton
          onPress={() => {
            gotoLoginFromWelcome(navigation);
          }}
          title={`Let's Get Started`}
        />
        <Text
          style={[
            styles.info2,
            {
              color:
                theme === 'light'
                  ? appColors.neutral[900]
                  : appColors.common.white,
            },
          ]}>
          {`By proceeding, you are agree to `}
          <Text style={styles.info2Bold}>{`Privacy Policy`}</Text> {`and `}
          <Text style={styles.info2Bold}>{`Terms Condition`}</Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
