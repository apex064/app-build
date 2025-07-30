import {StyleSheet} from 'react-native';
import {
  appColors,
  appSpacings,
  horizontalScale,
  moderateScale,
  typography,
  verticalScale,
} from '../../../theme';

export const styles = StyleSheet.create({
  bgStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: verticalScale(appSpacings[8] * 2),
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: verticalScale(appSpacings[8]),
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: verticalScale(appSpacings[8]),
    paddingHorizontal: horizontalScale(appSpacings[8]),
  },
  dotsView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(appSpacings[2]),
  },
  button: {
    height: verticalScale(45),
    borderRadius: moderateScale(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: horizontalScale(appSpacings[3]),
    backgroundColor: appColors.primary[500],
  },
  buttonText: {
    ...typography.MEDIUM.F_14,
    color: appColors.common.white,
  },
});
