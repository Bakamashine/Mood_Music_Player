import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

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
          title: "Play",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="play" color={color} />
          ),
          headerTitle: app_name,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 20,
              }}
              onPress={() => router.back()}
            >
              <FontAwesome name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
