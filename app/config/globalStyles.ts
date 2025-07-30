import {StyleSheet} from 'react-native';
import {appSpacings, horizontalScale, verticalScale} from '../theme';

export const globalStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  screenHPadding32: {
    paddingHorizontal: horizontalScale(appSpacings[8]),
  },
  screenVPadding32: {
    paddingVertical: verticalScale(appSpacings[8]),
  },
  screenHPadding28: {
    paddingHorizontal: horizontalScale(appSpacings[7]),
  },
  screenVPadding28: {
    paddingVertical: verticalScale(appSpacings[7]),
  },
  screenHPadding24: {
    paddingHorizontal: horizontalScale(appSpacings[6]),
  },
  screenVPadding24: {
    paddingVertical: verticalScale(appSpacings[6]),
  },
  screenHPadding20: {
    paddingHorizontal: horizontalScale(appSpacings[5]),
  },
  screenVPadding20: {
    paddingVertical: verticalScale(appSpacings[5]),
  },
  rowGap24: {
    rowGap: verticalScale(appSpacings[6]),
  },
  rowGap8: {
    rowGap: verticalScale(appSpacings[2]),
  },
});
