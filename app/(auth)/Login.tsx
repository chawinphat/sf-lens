import { useAuthStore } from "@/store/authStore";
import { useRouter, useFocusEffect } from "expo-router";
import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

const Login = () => {
  const { login, loading, error, user, clearError } = useAuthStore();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)/Home");
    }
  }, [user]);

  useFocusEffect( // clear error when the screen got reopen
    useCallback(() => {
      clearError?.();
    }, [])
  );

  const onLogin = () => {
    if (!email || !password) return;
    login(email, password);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white px-6 justify-center"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* header */}
      <View className="w-full mb-10">
        <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back 👋
        </Text>
        <Text className="text-center text-gray-500 text-sm">
          Login with your account
        </Text>
      </View>

      <View className="space-y-5">
        {/* email/phone input */}
        <View>
          <Text className="mb-1 text-gray-700 font-medium text-sm">
            Email / Phone Number
          </Text>
          <TextInput
            placeholder="example@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (error) clearError?.();
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-gray-50 focus:border-black text-black"
          />
        </View>

        {/* password section */}
        <View>
          <Text className="mb-1 text-gray-700 font-medium text-sm">
            Password
          </Text>
          <TextInput
            placeholder="••••••••"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) clearError?.();
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-gray-50 focus:border-black text-black"
          />
        </View>

        {/* error message if login fails */}
        {error && (
          <Text className="text-red-500 text-sm text-center">{error}</Text>
        )}

        {/* login button */}
        <TouchableOpacity
          disabled={loading}
          onPress={onLogin}
          className={`w-full py-3 rounded-2xl ${
            loading ? "bg-gray-400" : "bg-black"
          } items-center mt-5`}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-base">Login</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* sign up if no account */}
      <TouchableOpacity
        onPress={() => router.push("/Register")}
        className="mt-8"
      >
        <Text className="text-center text-gray-500 text-sm">
          Don’t have an account? <Text className="underline text-black">Sign up</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;