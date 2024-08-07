import { useSettingsStoreSelectors } from '@/store/settingsStore';
import { supabase } from '@/utils/supabaseClient';
import { Button, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const setTheme = useSettingsStoreSelectors.use.setTheme();
  const currTheme = useSettingsStoreSelectors.use.theme();
  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.typography }]}>Home</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await supabase.auth.signOut();
        }}
      />
      <Button
        title="Theme"
        onPress={async () => {
          setTheme(currTheme === 'light' ? 'dark' : 'light');
        }}
      />
    </View>
  );
};

export default Home;

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
