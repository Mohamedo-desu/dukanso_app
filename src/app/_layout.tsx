import ProtectRoutes from '@/components/ProtectRoutes';
import { Fonts } from '@/constants/Fonts';
import CustomThemeProvider from '@/Theme/ThemeProvider';
import '@/unistyle/unistyles';
import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { Slot, SplashScreen, useNavigationContainerRef } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, UnistylesRuntime, useStyles } from 'react-native-unistyles';

SplashScreen.preventAutoHideAsync();
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  _experiments: {
    profilesSampleRate: 1,
  },
  debug: false,
  enableAutoSessionTracking: true,
  attachScreenshot: true,
  attachStacktrace: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
      enableNativeFramesTracking: !isRunningInExpoGo(),
    }),
  ],
  enableAutoPerformanceTracing: true,
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function InitialLayout() {
  return (
    <ProtectRoutes>
      <CustomThemeProvider>
        <Slot />
      </CustomThemeProvider>
    </ProtectRoutes>
  );
}

function RootLayoutNav() {
  const ref = useNavigationContainerRef();
  const [fontsLoaded, fontError] = useFonts(Fonts);
  const { styles, theme } = useStyles(Stylesheet);

  useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
      SplashScreen.hideAsync();

      UnistylesRuntime.navigationBar.setColor(theme.colors.primary[500]);
    }

    return () => {
      UnistylesRuntime.navigationBar.setColor(undefined);
    };
  }, [ref]);

  if (!fontsLoaded || fontError) return null;

  return (
    <GestureHandlerRootView style={styles.root}>
      <InitialLayout />
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(RootLayoutNav);

const Stylesheet = createStyleSheet({
  root: {
    flex: 1,
  },
});
