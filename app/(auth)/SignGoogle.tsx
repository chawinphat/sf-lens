import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

const SignGoogle = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "<YOUR_EXPO_CLIENT_ID>", // hey guys, these four are placeholders. we can replace these when we have valid Google OAuth Client IDs.
    iosClientId: "<YOUR_IOS_CLIENT_ID>",
    androidClientId: "<YOUR_ANDROID_CLIENT_ID>",
    webClientId: "<YOUR_WEB_CLIENT_ID>",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Google access token:", authentication?.accessToken);
      // authenticate with backend using this token
    }
  }, [response]);

  return (
    <View className="px-6 mt-4">
      <TouchableOpacity
        onPress={() => promptAsync()}
        className="flex-row items-center bg-white py-3 px-5 rounded-xl border border-gray-300 w-full justify-center"
      >
        <Ionicons name="logo-google" size={20} color="#DB4437" className="mr-3" />
        <Text className="text-base font-medium text-gray-600">
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignGoogle;