import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ headerShown: false }} />
      <Tabs.Screen name="Profile Screen" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
