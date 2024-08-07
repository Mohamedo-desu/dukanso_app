import { Colors } from '@/unistyle/theme';
import { ActivityIndicator, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const SplashScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <ActivityIndicator size={'large'} color={Colors.primary[500]} />
    </View>
  );
};

export default SplashScreen;

const stylesheet = createStyleSheet({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
