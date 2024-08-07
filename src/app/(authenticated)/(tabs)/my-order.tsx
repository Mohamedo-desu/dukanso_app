import { Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MyOrder = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.typography }]}>MyOrder</Text>
    </View>
  );
};

export default MyOrder;

const stylesheet = createStyleSheet({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(24),
    fontFamily: 'Medium',
  },
});