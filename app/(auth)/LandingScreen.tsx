import { View, Text, Image, TouchableOpacity } from "react-native";
import ImgCarousel from "@/components/ImgCarousel";
import { useRouter } from "expo-router";

const images = [
  require("@/assets/images/goldengate.jpg"),
  require("@/assets/images/baybridge.jpg"),
  require("@/assets/images/palace.jpg"),
];

const LandingScreen = () => {
  const router = useRouter();
  const onLogin = () => {
    router.push("/Login");
  };
  const onSignup = () => {
    router.push("/Register");
  };
  return (
    <View className="flex-1 bg-gray-300">
      <ImgCarousel images={images} />
      {/* Buttons here for auth */}
      <View className="flex-1 items-center px-6 pt-8">
        <View className="flex-row justify-between w-full mb-5">
          {["Login", "Sign Up"].map((label, i) => (
            <TouchableOpacity
              key={i}
              onPress={i === 0 ? onLogin : onSignup}
              className="flex-1 mx-1 py-3 bg-gray-100 rounded-xl border border-gray-400 items-center"
            >
              <Text className="text-black text-base font-semibold">
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Google sign in button - not used for now */}
        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center bg-white py-3 px-5 rounded-xl border border-gray-300 w-full justify-center mb-5"
        >
          <Image
            source={require("@/assets/images/google.png")}
            className="w-7 h-5 mr-3"
          />
          <Text className="text-base font-medium text-gray-600">
            Sign in with Google
          </Text>
        </TouchableOpacity>

        {/* Guest button - not used for now */}
        <TouchableOpacity onPress={() => console.log("guest")}>
          <Text className="text-black underline text-sm mt-2">
            EXPLORE AS GUEST
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
