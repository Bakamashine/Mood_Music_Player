import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const app_name = "Your Daily Mood";
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: app_name,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="play" color={color} />
          ),
          headerTitleAlign: 'center'
        }}
      />
    </Tabs>
  );
}
