import {StyleSheet} from 'react-native';
import {
  appColors,
  appSpacings,
  horizontalScale,
  typography,
  verticalScale,
} from '../../../theme';

export const styles = StyleSheet.create({
  heading: {
    ...typography.BOLD.F_24,
  },
  info: {
    ...typography.LIGHT.F_14,
  },
  orSeperator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: horizontalScale(appSpacings[3]),
  },
  separatorLine: {
    flex: 1,
    height: verticalScale(1),
    backgroundColor: appColors.neutral[300],
  },
  orText: {
    ...typography.SEMI_BOLD.F_14,
    color: appColors.neutral[300],
  },
});
