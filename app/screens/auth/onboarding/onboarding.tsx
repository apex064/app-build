import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {T_ONBOARDING, T_ONBOARDING_ITEM} from './onboarding.types';
import useAppTheme from '../../../hooks/useAppTheme';
import {ScreenWrapper} from '../../../components';
import {styles} from './onboarding.styles';
import {getOnboardData} from '../../../config/constant';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  appColors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';
import {ArrowLeft} from '../../../assets/icons';
import {gotoWelcomeFromOnboarding} from '../../../navigation/service';

const INACTIVE_DOT_WIDTH = horizontalScale(10);
const ACTIVE_DOT_WIDTH = horizontalScale(35);
const DOT_HEIGHT = verticalScale(10);
const LS_BUTTON_WIDTH = horizontalScale(160);
const BLS_BUTTON_WIDTH = horizontalScale(45);

const Onboarding: React.FC<T_ONBOARDING> = ({navigation}) => {
  const {theme} = useAppTheme();
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const onboardData = getOnboardData(theme);

  const [index, setIndex] = useState<number>(0);
  const buttonWidth = useSharedValue(BLS_BUTTON_WIDTH);
  const scrollX = useSharedValue(0);
  const flatlistIndex = useSharedValue(0);
  const flatlistRef = useAnimatedRef<FlatList<T_ONBOARDING_ITEM[]>>();
  const viewConfigRef = useRef({
    minimumViewTime: 300,
    viewAreaCoveragePercentThreshold: 10,
  });

  const onViewCallBack = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (
        viewableItems &&
        viewableItems.length &&
        viewableItems[0].index !== null
      ) {
        setIndex(viewableItems[0].index);
        flatlistIndex.value = viewableItems[0].index;
      }
    },
    [],
  );

  const scrollEventHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const RenderItem = ({
    item,
    index,
  }: {
    item: T_ONBOARDING_ITEM;
    index: number;
  }) => {
    let inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const scaleAnimation = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(
              scrollX.value,
              inputRange,
              [0.5, 1, 0.5],
              'clamp',
            ),
          },
        ],
      };
    });

    const parallexAnimation = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(
              scrollX.value,
              inputRange,
              [SCREEN_WIDTH, 0, -SCREEN_WIDTH],
              'clamp',
            ),
          },
        ],
      };
    });

    return (
      <View style={[styles.contentMainContainer, {width: SCREEN_WIDTH}]}>
        <Animated.View style={scaleAnimation}>{item.icon}</Animated.View>
        <Animated.View style={[styles.contentContainer, parallexAnimation]}>
          {item.title}
          {item.description}
        </Animated.View>
      </View>
    );
  };

  const RenderDots = () => {
    return (
      <View style={styles.dotsView}>
        {onboardData.map((_, index) => {
          let inputRange = [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ];

          const dotAnimation = useAnimatedStyle(() => {
            return {
              width: interpolate(
                scrollX.value,
                inputRange,
                [INACTIVE_DOT_WIDTH, ACTIVE_DOT_WIDTH, INACTIVE_DOT_WIDTH],
                'clamp',
              ),
              height: DOT_HEIGHT,
              opacity: interpolate(
                scrollX.value,
                inputRange,
                [0.25, 1, 0.25],
                'clamp',
              ),
              backgroundColor: appColors.primary[500],
            };
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[dotAnimation, {borderRadius: moderateScale(10)}]}
            />
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    if (index == 2) {
      buttonWidth.value = withSpring(LS_BUTTON_WIDTH, {duration: 1000});
    }
  }, [index]);

  return (
    <ScreenWrapper>
      <Image
        source={require('../../../assets/images/mapBg.png')}
        resizeMode="cover"
        style={styles.bgStyle}
      />
      <Animated.FlatList
        ref={flatlistRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={onboardData}
        onScroll={scrollEventHandler}
        scrollEventThrottle={16}
        scrollEnabled={false}
        decelerationRate={'fast'}
        snapToInterval={SCREEN_WIDTH}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
        onViewableItemsChanged={onViewCallBack}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.bottomContainer}>
        <RenderDots />
        <TouchableOpacity
          onPress={() => {
            if (index < 2) {
              flatlistRef.current?.scrollToIndex({
                index: index + 1,
                animated: true,
              });
            } else {
              gotoWelcomeFromOnboarding(navigation);
            }
          }}>
          <Animated.View style={[styles.button, {width: buttonWidth}]}>
            {index == 2 && (
              <Animated.Text
                style={[styles.buttonText]}>{`Get Started`}</Animated.Text>
            )}
            <ArrowLeft />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Onboarding;
