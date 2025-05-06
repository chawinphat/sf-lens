import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { MotiView, AnimatePresence } from "moti";

import { Image, Pressable, Text, View } from "react-native";

const SplashScreen = () => {
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [showLanding, setShowLanding] = useState(false);

  const { user } = useAuth();
  // loading time, can load data here
  useEffect(() => {
    const timer = setTimeout(() => {
      // setLoading(false);
      setShowLanding(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  
  if (user) {
      return <Redirect href="/(tabs)/Home" />;
    }
    
  return (
    <View className="flex-1 flex flex-col justify-center items-center bg-white">
      <MotiView
        from={{ translateY: 0 }}
        animate={{ translateY: showLanding ? -80 : 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <View className="justify-center items-center bg-white">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-2/3 object-scale-down"
            resizeMode="contain"
          />
          <Text className="text-orange-600 mt-5 font-bold text-xl w-2/3 text-right">
            Explore San Francisco with us.
          </Text>
        </View>
      </MotiView>

      <AnimatePresence>
        {showLanding && (
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ type: "timing", delay: 200, duration: 400 }}
          >
            <View className="flex-col justify-center items-center gap-2">
              <Pressable
                onPress={() => router.push("/(auth)/Login")}
                className="w-48 py-3 bg-amber-500 rounded-xl items-center"
              >
                <Text className="text-white font-semibold">Log In</Text>
              </Pressable>
              <Pressable
                onPress={() => router.push("/(auth)/Register")}
                className="w-48 py-3 border border-amber-500 rounded-xl items-center"
              >
                <Text className="text-amber-500 font-semibold">Sign Up</Text>
              </Pressable>
              <Pressable onPress={() => router.replace("/(tabs)/Home")}>
                <Text className="text-black underline text-sm">
                  EXPLORE AS GUEST
                </Text>
              </Pressable>
            </View>
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
};

export default SplashScreen;
