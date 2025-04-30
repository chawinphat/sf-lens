// place holder for now
// can be nested into folder (tabs)/profile if needed
import { useAuth } from "@/authentication/AuthContext";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const Profile = () => {
  const { user, logout } = useAuth();
  const username = user?.displayName ?? "Guest";

  const confirmLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", style: "destructive", onPress: () => logout() },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="items-center mt-10">
        <Image
          source={{
            // uri: user?.photoURL || "https://avatar.iran.liara.run/public", // TODO: fix
            uri: "https://avatar.iran.liara.run/public",
          }}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <Text className="mt-4 text-2xl font-semibold text-gray-800">
          {username}
        </Text>
      </View>

      {/* Options */}
      <View className="mt-8">
        {[
          {
            label: "Change Username",
            onPress: () => {},
          },
          {
            label: "Visited",
            onPress: () => {},
          },
          {
            label: "Bookmarks",
            onPress: () => {},
          },
          { label: "Logout", onPress: confirmLogout },
        ].map(({ label, onPress }) => (
          <Pressable
            key={label}
            onPress={onPress}
            className="px-6 py-4 border-b border-gray-200"
          >
            <Text className="text-lg text-gray-700">{label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
