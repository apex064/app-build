import {StyleSheet} from 'react-native';
import {
  appSpacings,
  horizontalScale,
  moderateScale,
  typography,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(45),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: horizontalScale(appSpacings[4]),
  },
  title: {
    ...typography.MEDIUM.F_14,
  },
});
