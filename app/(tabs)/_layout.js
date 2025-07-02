import { StyleSheet, View, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { router, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Color from "../../constants/Color";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.buttonRed,
        tabBarLabelPosition: "below-icon",
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: "8%" },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={styles} />
        ),
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
                onPress={() => router.navigate('/add')}
              >
                <FontAwesome6 name="plus" size={35} color={Color.white} />
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
    width: 60,
    height: 60,
    borderRadius: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
