import { StyleSheet, Pressable, Platform } from "react-native";
import { useEffect } from "react";
import { router, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Color from "../../constants/Color";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [loaded, error] = useFonts({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Bold": require("../../assets/fonts/SpaceMono-Bold.ttf"),
    "Sedan": require("../../assets/fonts/Sedan-Regular.ttf"),
    "Sedan-Italic": require("../../assets/fonts/Sedan-Regular.ttf"),
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
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.buttonRed,
        tabBarLabelPosition: "below-icon",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Color.white,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: () => {
            return (
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? [styles.tabBarButton, styles.pressed]
                    : styles.tabBarButton
                }
                onPress={() => router.navigate("/add")}
              >
                <FontAwesome6 name="plus" size={40} color={Color.white} />
              </Pressable>
            );
          },
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="favorite" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="user" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  tabBarButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.supportingSecondaryButtonTeal,
    width: 80,
    height: 80,
    borderRadius: 60,
    position: "absolute",
    bottom: "22%",
    // left: "10%",
    elevation: 3,
    shadowColor: Color.black,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
