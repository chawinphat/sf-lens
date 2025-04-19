import { Stack } from "expo-router";
import React from "react";

import "../global.css";

export default function RootLayout() {
  // splash screen

  return (
    <Stack>
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
    </Stack>
  )
}
