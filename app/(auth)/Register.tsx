import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Register = () => {
  // for auth use
  const { register, loading, error, user } = useAuthStore();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      router.replace("/(tabs)/Home");
    }
  }, [user]);

  // screen displays here
  return (
    <View>
      <View className="flex flex-row justify-between items-center"></View>
    </View>
  );
};

export default Register;
