import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "../redux/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Sedan: require("../assets/fonts/Sedan-Regular.ttf"),
    "Sedan-Italic": require("../assets/fonts/Sedan-Regular.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
}
