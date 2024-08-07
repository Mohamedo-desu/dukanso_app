import {
  ArrowDownIcon,
  FavouriteIcon,
  LocationIcon,
  NotificationIcon,
  WavingHandIcon,
} from '@/assets/icons/icons';
import { Colors } from '@/unistyle/theme';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Header = () => {
  const { styles, theme } = useStyles(stylesheet);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme.colors.background, paddingTop: insets.top + moderateScale(10) },
      ]}>
      <View style={styles.userInfoContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.userImage}
          resizeMode="cover"
        />
        <View>
          <View style={styles.greetingContainer}>
            <Text
              style={[styles.greetingText, { color: theme.colors.typography }]}
              numberOfLines={1}>
              Hello, Marwan
            </Text>
            <WavingHandIcon
              strokeWidth={1.5}
              color={Colors.primary[500]}
              width={moderateScale(18)}
              height={moderateScale(18)}
            />
          </View>
          <View style={styles.deliveryContainer}>
            <LocationIcon
              strokeWidth={1.5}
              color={theme.colors.typography}
              width={moderateScale(18)}
              height={moderateScale(18)}
            />
            <Text style={[styles.deliveryText, { color: theme.colors.gray[500] }]}>
              Deliver to{' '}
              <Text
                style={[styles.deliveryHighlightText, { color: theme.colors.typography }]}
                numberOfLines={1}>
                {'Mohamed Marwan'.substring(0, 8) + '...'}
              </Text>
            </Text>
            <ArrowDownIcon
              strokeWidth={1.5}
              color={theme.colors.typography}
              width={moderateScale(18)}
              height={moderateScale(18)}
            />
          </View>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <NotificationIcon
          strokeWidth={1.5}
          color={theme.colors.typography}
          width={moderateScale(25)}
          height={moderateScale(25)}
        />
        <FavouriteIcon
          strokeWidth={1.5}
          color={theme.colors.typography}
          width={moderateScale(25)}
          height={moderateScale(25)}
        />
      </View>
    </View>
  );
};

export default Header;

const stylesheet = createStyleSheet({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(14),
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(9),
  },
  userImage: {
    width: moderateScale(50),
    aspectRatio: 1,
    borderRadius: moderateScale(25),
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  greetingText: {
    fontSize: moderateScale(15),
    fontFamily: 'Medium',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: moderateScale(4),
  },
  deliveryText: {
    fontSize: moderateScale(11),
    fontFamily: 'Regular',
  },
  deliveryHighlightText: {
    fontFamily: 'Medium',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: moderateScale(20),
  },
});
