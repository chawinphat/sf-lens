// place holder for now
// can be nested into folder (tabs)/profile if needed
import { useAuth } from "@/authentication/AuthContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Switch,
  Text,
  View,
} from "react-native";

const Profile = () => {
  const { user, logout } = useAuth();
  const username = user?.displayName ?? "Guest";
  const router = useRouter();

  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);

  const [dialog, setDialog] = useState<"none" | "username" | "password">(
    "none"
  );
  const [input, setInput] = useState("");

  const openDialog = (mode: "username" | "password") => {
    setInput("");
    setDialog(mode);
  };
  const closeDialog = () => setDialog("none");

  const onConfirm = () => {
    if (dialog === "username") {
      // update w api
    } else if (dialog === "password") {
      // update w api
    }
    closeDialog();
  };

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
            uri: user?.photoURL || "https://avatar.iran.liara.run/public"
           
          }}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <Text className="mt-4 text-2xl font-semibold text-gray-800">
          {username}
        </Text>
      </View>

      {/* Options */}
      <View className="mt-8">
        {!user ? (
          // ─── Not Logged In ─────────────────────
          <>
            <Pressable
              onPress={() => router.push("/(auth)/Login")}
              className="flex-row items-center px-6 py-4 border-b border-gray-200"
            >
              <Ionicons name="log-in-outline" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">Log In</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/(auth)/Register");
              }}
              className="flex-row items-center px-6 py-4"
            >
              <Ionicons name="person-add-outline" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">Sign Up</Text>
            </Pressable>
          </>
        ) : (
          // ─── Logged In ─────────────────────────
          <>
            <Pressable
              onPress={() => {
                openDialog("username");
              }}
              className="flex-row items-center px-6 py-4 border-b border-gray-200"
            >
              <MaterialIcons name="badge" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">
                Change Username
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                className="ml-auto"
              />
            </Pressable>

            <Pressable
              onPress={() => {
                openDialog("password");
              }}
              className="flex-row items-center px-6 py-4 border-b border-gray-200"
            >
              <Ionicons name="lock-closed-outline" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">
                Change Password
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                className="ml-auto"
              />
            </Pressable>

            <Pressable
              onPress={() => {
                /* navigate to Language selection */
              }}
              className="flex-row items-center px-6 py-4 border-b border-gray-200"
            >
              <MaterialIcons name="language" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">Language</Text>
              <Text className="ml-auto text-lg text-gray-700">{language}</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                className="ml-2"
              />
            </Pressable>

            <View className="flex-row items-center px-6 py-4 border-b border-gray-200">
              <Ionicons name="moon-outline" size={24} color="#444" />
              <Text className="ml-4 text-lg text-gray-700">Dark Mode</Text>
              <View className="ml-auto">
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ true: "#FC622C", false: "#ccc" }}
                  thumbColor={darkMode ? "#fff" : "#fff"}
                />
              </View>
            </View>

            <Pressable
              onPress={confirmLogout}
              className="flex-row items-center px-6 py-4"
            >
              <Ionicons name="log-out-outline" size={24} color="#E11D48" />
              <Text className="ml-4 text-lg text-red-500">Log Out</Text>
            </Pressable>
          </>
        )}
      </View>

      {/* ─── Dialog Overlay ───────────────────────── */}
      {dialog !== "none" && (
        <View className="absolute inset-0 bg-black/50 items-center justify-center">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="w-full px-6"
          >
            <View className="bg-white rounded-xl p-6">
              <Text className="text-lg font-semibold mb-4">
                {dialog === "username"
                  ? "Enter new username"
                  : "Enter new password"}
              </Text>

              <TextInput
                placeholder={
                  dialog === "username" ? "New username" : "New password"
                }
                secureTextEntry={dialog === "password"}
                value={input}
                onChangeText={setInput}
                className="border border-gray-300 rounded-lg px-4 py-2 mb-6"
              />

              <View className="flex-row justify-end space-x-4">
                <Pressable onPress={closeDialog} className="px-4 py-2">
                  <Text className="font-medium text-gray-600">Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={onConfirm}
                  className="px-4 py-2 bg-[#FC622C] rounded-lg"
                >
                  <Text className="text-white font-medium">Confirm</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
