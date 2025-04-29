import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../authentication/AuthContext";

const Register = () => {
  const { register, user, loading, updateProfile } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/(tabs)/Home");
    }
  }, [user, loading]);

  const passwordsMatch = password === confirmPassword;
  const passwordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|[^a-zA-Z\d]).{8,}$/.test(password);

  const handleRegister = async () => {
    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }
    if (!passwordStrong) {
      alert("Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }
    const newUserCred = await register(email, password, username);
  router.replace("/(tabs)/Home");

  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 24 }}>
        <View className="mb-10 items-center">
          <Text className="text-2xl font-bold text-black">Create Account 👤</Text>
          <Text className="text-gray-500 mt-2 text-sm">
            Fill in the details below to register
          </Text>
        </View>

        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium text-sm">Username</Text>
          <TextInput
            placeholder="Your name"
            value={username}
            onChangeText={setUsername}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-gray-50 text-black"
            placeholderTextColor="#999"
          />
        </View>

        {/* email */}
        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium text-sm">Email</Text>
          <TextInput
            placeholder="example@email.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-gray-50 text-black"
            placeholderTextColor="#999"
          />
        </View>

        {/* password */}
        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium text-sm">Password</Text>
          <View className="flex-row items-center px-4 py-3 border border-gray-300 rounded-xl bg-gray-50">
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              className="flex-1 text-sm text-black"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#555"
              />
            </Pressable>
          </View>

          {password.length > 0 && !passwordStrong && (
            <Text className="text-sm text-red-500 mt-1">
              ❌ Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number.
            </Text>
          )}
          {password.length > 0 && passwordStrong && (
            <Text className="text-sm text-green-600 mt-1">
              ✅ Strong password
            </Text>
          )}
        </View>

        {/* confirm password */}
        <View className="mb-6">
          <Text className="mb-1 text-gray-700 font-medium text-sm">Confirm Password</Text>
          <View className="flex-row items-center px-4 py-3 border border-gray-300 rounded-xl bg-gray-50">
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCapitalize="none"
              className="flex-1 text-sm text-black"
            />
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={20}
                color="#555"
              />
            </Pressable>
          </View>

          {confirmPassword.length > 0 && (
            <Text
              className={`text-sm mt-1 ${
                passwordsMatch ? "text-green-600" : "text-red-500"
              }`}
            >
              {passwordsMatch
                ? "✅ Passwords match"
                : "❌ Passwords do not match"}
            </Text>
          )}
        </View>

        {/* submit button */}
        <TouchableOpacity
          onPress={handleRegister}
          className={`py-3 rounded-xl items-center mb-6 ${
            passwordsMatch && passwordStrong ? "bg-black" : "bg-gray-300"
          }`}
          disabled={!passwordsMatch || !passwordStrong}
        >
          <Text className="text-white text-base font-semibold">Register</Text>
        </TouchableOpacity>

        {/* link to login */}
        <View className="flex-row justify-center mb-10">
          <Text className="text-gray-500 text-sm">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/Login")}>
            <Text className="text-sm underline text-black">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
