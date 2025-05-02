import { Stack } from "expo-router";
import React from "react";

import "../global.css";
import { AuthProvider } from "../authentication/AuthContext"; 

export default function RootLayout() {
  // splash screen

  return (
    <AuthProvider>
      
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </Stack>
    </AuthProvider>
  );
}
