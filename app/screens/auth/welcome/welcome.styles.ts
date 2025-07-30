import {Dimensions, StyleSheet} from 'react-native';
import {appColors, moderateScale, typography} from '../../../theme';

export const styles = StyleSheet.create({
  welcomeBg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mainContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: appColors.neutral[900],
    opacity: 0.35,
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  heading: {
    ...typography.BOLD.F_24,
  },
  info: {
    ...typography.LIGHT.F_14,
  },
  info2: {
    ...typography.REGULAR.F_12,
    textAlign: 'center',
  },
  info2Bold: {
    ...typography.SEMI_BOLD.F_12,
    color: appColors.secondary[500],
  },
});
