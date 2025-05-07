import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen name="LandingScreen" options={{ headerShown: false }} />

      {/* with header. can change to headerShown: false for other design */}
      <Stack.Screen
        name="Login"
        options={{ headerTitle: "Login", headerBackTitle: "Back" }}
      />
      <Stack.Screen
        name="Register"
        options={{ headerTitle: "Register", headerBackTitle: "Back" }}
      />

    </Stack>
  );
};

export default Layout;
