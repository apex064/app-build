import {ColorSchemeName, Text} from 'react-native';
import {Onboarding1, Onboarding2, Onboarding3} from '../assets/images';
import {T_ONBOARDING_ITEM} from '../screens/auth/onboarding/onboarding.types';
import {appColors, horizontalScale, typography, verticalScale} from '../theme';

export const getApppName = (
  fontFamily?: string,
  fontSize?: number,
  theme?: ColorSchemeName,
) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily ? fontFamily : typography.BOLD.F_24.fontFamily,
        fontSize: fontSize ? fontSize : typography.BOLD.F_24.fontSize,
        color:
          theme === 'light' ? appColors.neutral[900] : appColors.common.white,
      }}>
      {`R`}
      <Text style={{color: appColors.primary[500]}}>{`II`}</Text>
      <Text
        style={{
          fontFamily: fontFamily ? fontFamily : typography.BOLD.F_24.fontFamily,
          fontSize: fontSize ? fontSize : typography.BOLD.F_24.fontSize,
          color:
            theme === 'light' ? appColors.neutral[900] : appColors.common.white,
        }}>
        {`DE`}
      </Text>
    </Text>
  );
};

export const getOnboardData = (theme: ColorSchemeName): T_ONBOARDING_ITEM[] => {
  return [
    {
      key: '1',
      title: (
        <Text
          style={{
            ...typography.BOLD.F_24,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>{`Request & Select`}</Text>
      ),
      description: (
        <Text
          style={{
            ...typography.REGULAR.F_16,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>
          {`Request a`}{' '}
          {getApppName(
            typography.REGULAR.F_16.fontFamily,
            typography.REGULAR.F_16.fontSize,
            theme,
          )}
          {`, car and get picked up\nby a nearby community driver or\nreverse a car for a later time/data.`}
        </Text>
      ),
      icon: (
        <Onboarding1
          width={horizontalScale(230.74)}
          height={verticalScale(246.17)}
        />
      ),
    },
    {
      key: '2',
      title: (
        <Text
          style={{
            ...typography.BOLD.F_24,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>{`Confirm & Pay`}</Text>
      ),
      description: (
        <Text
          style={{
            ...typography.REGULAR.F_16,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>
          {`Once you've confirmed your car and\noptions, simply pay using your debit or\ncredit card `}
          {getApppName(
            typography.REGULAR.F_16.fontFamily,
            typography.REGULAR.F_16.fontSize,
            theme,
          )}
          {`, tokens or other\nselected cryptocurrency.`}
        </Text>
      ),
      icon: (
        <Onboarding2
          width={horizontalScale(230.74)}
          height={verticalScale(246.17)}
        />
      ),
    },
    {
      key: '3',
      title: (
        <Text
          style={{
            ...typography.BOLD.F_24,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>
          {`Relax &`}{' '}
          {getApppName(
            typography.BOLD.F_24.fontFamily,
            typography.BOLD.F_24.fontSize,
            theme,
          )}
        </Text>
      ),
      description: (
        <Text
          style={{
            ...typography.REGULAR.F_16,
            color:
              theme === 'light'
                ? appColors.neutral[900]
                : appColors.common.white,
            textAlign: 'center',
          }}>{`Enjoy a variety of our EV (electric\nvehicle) cars, comfortable, safe and\ncheap ride`}</Text>
      ),
      icon: (
        <Onboarding3
          width={horizontalScale(230.74)}
          height={verticalScale(246.17)}
        />
      ),
    },
  ];
};
