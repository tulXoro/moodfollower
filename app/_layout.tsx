import "../global.css";


import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';

import { useColorScheme, useInitialAndroidBarSync } from '../lib/useColorScheme';
import { NAV_THEME } from '../theme';


// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
        
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
    <>
    <StatusBar
      key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
      style={isDarkColorScheme ? 'light' : 'dark'}
    />

    <NavThemeProvider value={NAV_THEME[colorScheme]}>
      <Stack >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NavThemeProvider>
  </>
  );
}
